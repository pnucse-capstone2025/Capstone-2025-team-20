import argparse
import os
import random
import tempfile
from typing import List, Tuple

import numpy as np
import pandas as pd

from user_based_collaborative_filtering import UserBasedCollaborativeFiltering
from matrix_factorization_recommender import SVDRecommender
from matrix_factorization import SimpleMatrixFactorization
from content_based_filtering_for_movies import recommend_for_user as cb_recommend_for_user


DEFAULT_DATA_DIR = os.path.join(os.path.dirname(__file__), "ml-latest-small")
MOVIES_CSV_PATH = os.path.join(DEFAULT_DATA_DIR, "movies.csv")
RATINGS_CSV_PATH = os.path.join(DEFAULT_DATA_DIR, "ratings.csv")


def split_user_ratings(
    user_ratings: pd.DataFrame,
    train_count: int,
    split_by: str = "random",
    seed: int = 42,
) -> Tuple[pd.DataFrame, pd.DataFrame]:
    if len(user_ratings) < train_count:
        raise ValueError(f"User has only {len(user_ratings)} ratings, cannot take train_count={train_count}")
    if split_by == "time":
        user_ratings = user_ratings.sort_values("timestamp") if "timestamp" in user_ratings.columns else user_ratings
        train_df = user_ratings.iloc[:train_count]
        test_df = user_ratings.iloc[train_count:]
    else:
        rng = random.Random(seed)
        idx = list(range(len(user_ratings)))
        rng.shuffle(idx)
        train_idx = set(idx[:train_count])
        mask = [i in train_idx for i in range(len(user_ratings))]
        train_df = user_ratings.iloc[mask]
        test_df = user_ratings.iloc[[not m for m in mask]]
    return train_df, test_df


def run_training_with_holdout(
    user_id: int,
    train_count: int,
    top_k: int,
    min_positive_rating: float,
    split_by: str,
    seed: int,
    algo: str,
) -> Tuple[pd.DataFrame, pd.DataFrame, List[int], List[int]]:
    ratings = pd.read_csv(RATINGS_CSV_PATH)
    movies = pd.read_csv(MOVIES_CSV_PATH)

    if "userId" not in ratings.columns or "movieId" not in ratings.columns or "rating" not in ratings.columns:
        raise ValueError("ratings.csv must contain userId, movieId, rating columns")

    user_r = ratings[ratings["userId"] == user_id].copy()
    # If train_count is not provided (<=0), default to half of user's ratings
    if train_count <= 0:
        train_count = max(1, len(user_r) // 2)
        if train_count >= len(user_r):
            train_count = len(user_r) - 1

    if len(user_r) < train_count + 1:
        raise ValueError(f"User {user_id} needs at least train_count+1 ratings; has {len(user_r)} (train_count={train_count})")

    train_u, test_u = split_user_ratings(user_r, train_count=train_count, split_by=split_by, seed=seed)

    # Auto-adjust K to the size of held-out set if not provided
    if top_k <= 0:
        top_k = len(test_u)

    # Build temporary ratings file with user's test ratings removed
    train_ratings = pd.concat([
        ratings[ratings["userId"] != user_id],
        train_u
    ], ignore_index=True)

    # Persist to a temporary CSV
    with tempfile.NamedTemporaryFile(delete=False, suffix="_ratings.csv") as tf:
        tmp_ratings_path = tf.name
    train_ratings.to_csv(tmp_ratings_path, index=False)

    # Train/evaluate using selected algorithm
    recs_movie_ids: List[int] = []
    if algo == 'mf':
        model = SVDRecommender(ratings_file=tmp_ratings_path, movies_file=MOVIES_CSV_PATH, n_components=50)
        model.load_data()
        model.create_user_movie_matrix()
        model.fill_missing_values(method='svd', max_iter=5)
        model.fit_model()
        recs = model.recommend_movies(user_id=user_id, n_recommendations=top_k, diversity_factor=0.3)
        recs_movie_ids = [int(r['movieId']) for r in recs]
    elif algo == 'simple_mf':
        model = SimpleMatrixFactorization(n_components=50)
        model.load_data(ratings_file=tmp_ratings_path, movies_file=MOVIES_CSV_PATH)
        model.prepare_matrix()
        model.fit()
        recs = model.recommend_movies(user_id=user_id, n_recommendations=top_k)
        recs_movie_ids = [int(r[0]) for r in recs]  # SimpleMatrixFactorization returns tuples (movie_id, title, rating)
    elif algo == 'usercf':
        cf = UserBasedCollaborativeFiltering(ratings_file=tmp_ratings_path, movies_file=MOVIES_CSV_PATH)
        cf.load_data()
        cf.create_user_movie_matrix()
        # Reasonable defaults; can be parameterized if needed
        cf.calculate_user_similarity(method='cosine', min_common_movies=3)
        recs = cf.recommend_movies(user_id=user_id, n_recommendations=top_k, n_similar=20, min_similarity=0.05)
        recs_movie_ids = [int(r['movieId']) for r in recs]
    elif algo == 'cb':
        df = cb_recommend_for_user(
            movies_csv_path=MOVIES_CSV_PATH,
            ratings_csv_path=tmp_ratings_path,
            user_id=user_id,
            top_k=top_k,
            exclude_already_rated=True,
        )
        recs_movie_ids = [int(mid) for mid in df['movieId'].tolist()]
    else:
        raise ValueError("Unsupported algo. Use one of: mf, simple_mf, usercf, cb")

    # Cleanup temp file
    try:
        os.remove(tmp_ratings_path)
    except Exception:
        pass

    # Prepare evaluation sets
    heldout_positive = test_u[test_u["rating"] >= min_positive_rating]["movieId"].astype(int).tolist()
    return test_u, movies, recs_movie_ids, heldout_positive


def compare_algorithms(
    user_id: int,
    train_count: int,
    top_k: int,
    min_positive_rating: float,
    split_by: str,
    seed: int,
    algorithms: List[str] = None,
) -> Tuple[pd.DataFrame, str]:
    import time
    ratings = pd.read_csv(RATINGS_CSV_PATH)
    movies = pd.read_csv(MOVIES_CSV_PATH)

    user_r = ratings[ratings["userId"] == user_id].copy()
    if train_count <= 0:
        train_count = max(1, len(user_r) // 2)
        if train_count >= len(user_r):
            train_count = len(user_r) - 1
    if len(user_r) < train_count + 1:
        raise ValueError(f"User {user_id} needs at least train_count+1 ratings; has {len(user_r)} (train_count={train_count})")

    # One split for all algos
    train_u, test_u = split_user_ratings(user_r, train_count=train_count, split_by=split_by, seed=seed)
    if top_k <= 0:
        top_k = len(test_u)

    # Build temp ratings file
    train_ratings = pd.concat([
        ratings[ratings["userId"] != user_id],
        train_u
    ], ignore_index=True)
    with tempfile.NamedTemporaryFile(delete=False, suffix="_ratings.csv") as tf:
        tmp_ratings_path = tf.name
    train_ratings.to_csv(tmp_ratings_path, index=False)

    heldout_positive = test_u[test_u["rating"] >= min_positive_rating]["movieId"].astype(int).tolist()
    pos_set = set(heldout_positive)

    # 비교할 알고리즘 설정 (기본값: 모든 알고리즘)
    if algorithms is None:
        algorithms = ["mf", "simple_mf", "usercf", "cb"]

    rows = []
    for algo in algorithms:
        start = time.perf_counter()
        recs_movie_ids: List[int] = []
        if algo == 'mf':
            model = SVDRecommender(ratings_file=tmp_ratings_path, movies_file=MOVIES_CSV_PATH, n_components=50)
            model.load_data()
            model.create_user_movie_matrix()
            model.fill_missing_values(method='svd', max_iter=5)
            model.fit_model()
            recs = model.recommend_movies(user_id=user_id, n_recommendations=top_k, diversity_factor=0.3)
            recs_movie_ids = [int(r['movieId']) for r in recs]
        elif algo == 'simple_mf':
            model = SimpleMatrixFactorization(n_components=50)
            model.load_data(ratings_file=tmp_ratings_path, movies_file=MOVIES_CSV_PATH)
            model.prepare_matrix()
            model.fit()
            recs = model.recommend_movies(user_id=user_id, n_recommendations=top_k)
            recs_movie_ids = [int(r[0]) for r in recs]  # SimpleMatrixFactorization returns tuples (movie_id, title, rating)
        elif algo == 'usercf':
            cf = UserBasedCollaborativeFiltering(ratings_file=tmp_ratings_path, movies_file=MOVIES_CSV_PATH)
            cf.load_data()
            cf.create_user_movie_matrix()
            cf.calculate_user_similarity(method='cosine', min_common_movies=3)
            recs = cf.recommend_movies(user_id=user_id, n_recommendations=top_k, n_similar=20, min_similarity=0.05)
            recs_movie_ids = [int(r['movieId']) for r in recs]
        else:
            df = cb_recommend_for_user(
                movies_csv_path=MOVIES_CSV_PATH,
                ratings_csv_path=tmp_ratings_path,
                user_id=user_id,
                top_k=top_k,
                exclude_already_rated=True,
            )
            recs_movie_ids = [int(mid) for mid in df['movieId'].tolist()]

        elapsed = time.perf_counter() - start
        hit_count = len(set(recs_movie_ids[:top_k]).intersection(pos_set))
        precision = (hit_count / top_k) if top_k > 0 else 0.0
        recall = (hit_count / len(pos_set)) if len(pos_set) > 0 else 0.0
        f1 = (2 * precision * recall / (precision + recall)) if (precision + recall) > 0 else 0.0

        rows.append({
            "algo": algo,
            "hits": hit_count,
            "precision": round(precision, 4),
            "recall": round(recall, 4),
            "f1": round(f1, 4),
            "time_sec": round(elapsed, 3),
            "top_k": top_k,
            "heldout": len(pos_set),
        })

    try:
        os.remove(tmp_ratings_path)
    except Exception:
        pass

    df = pd.DataFrame(rows)
    # Friendly labels and descriptions for display
    label_map = {
        "mf": {"label": "project", "desc": "Matirx Factorization Algorithm customized  for our Project"},
        "simple_mf": {"label": "simple MF", "desc": "Simple Matrix Factorization using SVD"},
        "usercf": {"label": "user-based CF", "desc": "User-based Collaborative Filtering"},
        "cb": {"label": "content-based", "desc": "Content-based (Title+Genres TF-IDF)"},
    }
    # Short method names for axes and table (as requested)
    short_map = {"mf": "project", "simple_mf": "simple_mf", "usercf": "usercf", "cb": "cb"}
    df["method"] = df["algo"].map(lambda a: short_map.get(a, a))
    out_png = os.path.join(os.path.dirname(__file__), f"holdout_metrics_user{user_id}.png")
    try:
        import matplotlib.pyplot as plt
        plt.style.use('seaborn-v0_8')
        fig, axes = plt.subplots(2, 2, figsize=(12, 7))
        fig.suptitle(f"Holdout comparison (user={user_id}, train={train_count}, heldout={len(pos_set)}, K={top_k})", fontsize=14, fontweight='bold')

        # (0,0) Grouped bars: precision/recall/f1
        x = np.arange(len(df))
        width = 0.22
        ax = axes[0, 0]
        b1 = ax.bar(x - width, df["precision"], width, label="precision")
        b2 = ax.bar(x, df["recall"], width, label="recall")
        b3 = ax.bar(x + width, df["f1"], width, label="f1")
        ax.set_xticks(x)
        ax.set_xticklabels(df["method"].tolist(), fontsize=10)
        ax.set_ylim(0, 1)
        ax.set_ylabel("score (0-1)")
        ax.set_title("Precision / Recall / F1")
        ax.grid(axis='y', linestyle='--', alpha=0.5)
        ax.legend(loc='upper left')
        for bars in (b1, b2, b3):
            for rect in bars:
                h = rect.get_height()
                ax.annotate(f"{h:.2f}", xy=(rect.get_x() + rect.get_width() / 2, h),
                            xytext=(0, 4), textcoords="offset points", ha='center', va='bottom', fontsize=9)

        # (0,1) Hits bar with labels
        ax = axes[0, 1]
        b = ax.bar(df["method"], df["hits"], color="#4caf50")
        ax.set_title("Hits (over held-out)")
        ax.set_ylabel("count")
        ax.grid(axis='y', linestyle='--', alpha=0.5)
        for rect in b:
            h = rect.get_height()
            ax.annotate(f"{int(h)}/{len(pos_set)}", xy=(rect.get_x() + rect.get_width() / 2, h),
                        xytext=(0, 4), textcoords="offset points", ha='center', va='bottom', fontsize=9)

        # (1,0) Runtime horizontal bars
        ax = axes[1, 0]
        ax.barh(df["method"], df["time_sec"], color="#6a8cff")
        ax.set_xlabel("seconds")
        ax.set_title("Runtime")
        for i, v in enumerate(df["time_sec"]):
            ax.annotate(f"{v:.2f}s", xy=(v, i), xytext=(6, -2), textcoords='offset points', va='center', fontsize=9)
        ax.grid(axis='x', linestyle='--', alpha=0.5)

        # (1,1) Use bottom-right panel for method descriptions
        ax = axes[1, 1]
        ax.axis('off')
        try:
            info_lines = []
            for algo in algorithms:
                if algo in label_map:
                    info_lines.append(f"{short_map.get(algo, algo)}: {label_map[algo]['desc']}")
            
            if info_lines:
                legend_text = "\n\n".join(info_lines)
                ax.text(0.02, 0.5, legend_text, fontsize=9, va='center', ha='left', transform=ax.transAxes,
                        bbox=dict(boxstyle='round,pad=0.4', facecolor='white', alpha=0.7))
        except Exception:
            pass

        # Description moved to bottom-right pane; no global caption needed

        fig.tight_layout(rect=[0, 0, 1, 0.96])
        plt.savefig(out_png, dpi=200)
    except Exception:
        out_png = ""

    return df, out_png


def evaluate_overlap(rec_movie_ids: List[int], heldout_positive: List[int], top_k: int) -> pd.DataFrame:
    rec_set = set(rec_movie_ids[:top_k])
    pos_set = set(heldout_positive)
    hits = rec_set.intersection(pos_set)

    precision = (len(hits) / top_k) if top_k > 0 else 0.0
    recall = (len(hits) / len(pos_set)) if len(pos_set) > 0 else 0.0
    f1 = (2 * precision * recall / (precision + recall)) if (precision + recall) > 0 else 0.0

    df = pd.DataFrame({
        "metric": ["hits", "precision@K", "recall@K", "f1@K"],
        "value": [len(hits), round(precision, 4), round(recall, 4), round(f1, 4)],
    })
    return df


def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(description="Holdout validation for a single user's recommendations")
    p.add_argument("--user-id", type=int, required=True)
    p.add_argument("--train-count", type=int, default=0, help="Train ratings count; 0 means half of user's total")
    p.add_argument("--top-k", type=int, default=0, help="K; 0 means use size of held-out set")
    p.add_argument("--min-positive-rating", type=float, default=3.5, help="Threshold to treat held-out ratings as positive")
    p.add_argument("--split-by", choices=["random", "time"], default="random")
    p.add_argument("--seed", type=int, default=42)
    p.add_argument("--algo", choices=["mf", "simple_mf", "usercf", "cb", "all", "mf_only"], default="mf", help="Algorithm: mf, simple_mf, usercf, cb, all, or mf_only (matrix factorization only)")
    p.add_argument("--show-details", action="store_true")
    return p.parse_args()


def main() -> None:
    args = parse_args()
    if args.algo == 'all':
        df, out_png = compare_algorithms(
            user_id=args.user_id,
            train_count=args.train_count,
            top_k=args.top_k,
            min_positive_rating=args.min_positive_rating,
            split_by=args.split_by,
            seed=args.seed,
        )
        print(df.to_string(index=False))
        if out_png:
            print(f"Saved chart to: {out_png}")
        return
    elif args.algo == 'mf_only':
        df, out_png = compare_algorithms(
            user_id=args.user_id,
            train_count=args.train_count,
            top_k=args.top_k,
            min_positive_rating=args.min_positive_rating,
            split_by=args.split_by,
            seed=args.seed,
            algorithms=["mf", "simple_mf"],
        )
        print(df.to_string(index=False))
        if out_png:
            print(f"Saved chart to: {out_png}")
        return

    test_u, movies, rec_movie_ids, heldout_positive = run_training_with_holdout(
        user_id=args.user_id,
        train_count=args.train_count,
        top_k=args.top_k,
        min_positive_rating=args.min_positive_rating,
        split_by=args.split_by,
        seed=args.seed,
        algo=args.algo,
    )

    k = args.top_k if args.top_k > 0 else len(test_u)
    report = evaluate_overlap(rec_movie_ids, heldout_positive, k)
    print(report.to_string(index=False))

    if args.show_details:
        movies_idx = movies.set_index("movieId")
        print("\nHeld-out positives (movieId - title):")
        for mid in heldout_positive:
            title = movies_idx.loc[mid, "title"] if mid in movies_idx.index else "<unknown>"
            print(f"  {mid} - {title}")

        print("\nTop-K recommendations (movieId - title) with hit flag:")
        for mid in rec_movie_ids[:k]:
            title = movies_idx.loc[mid, "title"] if mid in movies_idx.index else "<unknown>"
            hit = "HIT" if mid in set(heldout_positive) else "MISS"
            print(f"  {mid} - {title} [{hit}]")


if __name__ == "__main__":
    main()


