import argparse
import os
import re
from typing import Dict, Iterable, List, Tuple

import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer

# Editable default paths for datasets
DEFAULT_DATA_DIR = os.path.join(os.path.dirname(__file__), "ml-latest-small")
MOVIES_CSV_PATH = os.path.join(DEFAULT_DATA_DIR, "movies.csv")
RATINGS_CSV_PATH = os.path.join(DEFAULT_DATA_DIR, "ratings.csv")


def _clean_text(value: str) -> str:
    """
    Lowercase and keep alphanumeric tokens; remove year in parentheses from title.
    """
    if not isinstance(value, str):
        return ""

    # Remove year in parentheses, e.g., "Toy Story (1995)" -> "Toy Story"
    value = re.sub(r"\s*\(\d{4}\)$", "", value.strip())
    value = value.lower()
    # Replace non-alphanumeric with space, keep ascii letters and numbers
    value = re.sub(r"[^a-z0-9]+", " ", value)
    # Collapse spaces
    value = re.sub(r"\s+", " ", value).strip()
    return value


def _genres_to_text(genres: str) -> str:
    if not isinstance(genres, str) or genres == "(no genres listed)":
        return ""
    parts = [g.strip().lower() for g in genres.split("|") if g and g != "(no genres listed)"]
    return " ".join(parts)


def build_corpus(movies: pd.DataFrame) -> Tuple[List[str], Dict[int, int]]:
    """
    Build a text corpus from movies DataFrame and return corpus and movieId->rowIndex map.
    The row order matches the input movies DataFrame order after reset_index().
    """
    movies = movies.reset_index(drop=True)
    corpus: List[str] = []
    movie_id_to_row_index: Dict[int, int] = {}

    for row_index, row in movies.iterrows():
        title_text = _clean_text(row.get("title", ""))
        genres_text = _genres_to_text(row.get("genres", ""))
        combined_text = (title_text + " " + genres_text).strip()
        corpus.append(combined_text)
        movie_id_to_row_index[int(row["movieId"])] = row_index

    return corpus, movie_id_to_row_index


def build_item_feature_matrix(corpus: List[str]) -> Tuple[Iterable, object]:
    """
    Return (matrix, vectorizer). Matrix may be a numpy array or a scipy.sparse matrix.
    """
    vectorizer = TfidfVectorizer(
        lowercase=False,  # already cleaned
        tokenizer=lambda s: s.split(" "),
        preprocessor=lambda s: s,
        token_pattern=None,
        min_df=1,
        dtype=np.float32,
    )
    matrix = vectorizer.fit_transform(corpus)
    return matrix, vectorizer


def compute_user_profile(
    ratings: pd.DataFrame,
    user_id: int,
    movie_id_to_row_index: Dict[int, int],
    item_matrix: Iterable,
) -> np.ndarray:
    """
    Compute the user's preference vector by mean-centering ratings and summing
    the corresponding item TF-IDF vectors weighted by these centered ratings.
    The result is L2-normalized.
    """
    user_ratings = ratings[ratings["userId"] == user_id]
    if user_ratings.empty:
        raise ValueError(f"No ratings found for userId={user_id}")

    # Mean-center ratings
    user_mean = user_ratings["rating"].mean()
    user_ratings = user_ratings.assign(weight=user_ratings["rating"] - user_mean)

    # Build indices and weights
    indices: List[int] = []
    weights: List[float] = []
    for _, row in user_ratings.iterrows():
        movie_id = int(row["movieId"])
        weight = float(row["weight"])  # may be negative if disliked
        idx = movie_id_to_row_index.get(movie_id)
        if idx is not None and weight != 0.0:
            indices.append(idx)
            weights.append(weight)

    if not indices:
        raise ValueError("User profile cannot be built (no overlapping movies in movies.csv)")

    weights_vec = np.array(weights, dtype=np.float32)

    # Slice the item matrix rows
    try:
        # Likely a scipy.sparse/csr_matrix
        user_profile = (item_matrix[indices].T @ weights_vec).astype(np.float32)
        # Convert to dense 1D vector if it's sparse
        if hasattr(user_profile, "toarray"):
            user_profile = user_profile.toarray().ravel()
        else:
            user_profile = np.asarray(user_profile).ravel()
    except Exception:
        # Assume dense numpy array
        rows = np.asarray(item_matrix)[indices]
        user_profile = rows.T @ weights_vec
        user_profile = np.asarray(user_profile).ravel()

    # Normalize
    norm = np.linalg.norm(user_profile)
    if norm > 0:
        user_profile = user_profile / norm

    return user_profile


def score_all_items(
    item_matrix: Iterable,
    user_profile: np.ndarray,
) -> np.ndarray:
    """
    Compute cosine similarity between user profile and all item vectors.
    If item_matrix rows are already L2-normalized (as with TF-IDF), then the dot
    product yields cosine similarity.
    """
    try:
        scores = (item_matrix @ user_profile).astype(np.float32)
        if hasattr(scores, "A1"):
            # scipy matrix to 1D array
            return scores.A1
        if hasattr(scores, "toarray"):
            return scores.toarray().ravel()
        return np.asarray(scores).ravel()
    except Exception:
        # Dense numpy fallback
        return (np.asarray(item_matrix) @ user_profile).astype(np.float32)


def recommend_for_user(
    movies_csv_path: str,
    ratings_csv_path: str,
    user_id: int,
    top_k: int = 10,
    exclude_already_rated: bool = True,
) -> pd.DataFrame:
    """
    Recommend movies for a given user using content-based filtering.

    Returns a DataFrame with columns: [movieId, title, genres, score]
    """
    movies = pd.read_csv(movies_csv_path)
    ratings = pd.read_csv(ratings_csv_path)

    # Basic validation
    for col in ("movieId", "title", "genres"):
        if col not in movies.columns:
            raise ValueError(f"movies.csv missing column: {col}")
    for col in ("userId", "movieId", "rating"):
        if col not in ratings.columns:
            raise ValueError(f"ratings.csv missing column: {col}")

    corpus, movie_id_to_row_index = build_corpus(movies)
    item_matrix, _ = build_item_feature_matrix(corpus)

    user_profile = compute_user_profile(ratings, user_id, movie_id_to_row_index, item_matrix)
    scores = score_all_items(item_matrix, user_profile)

    movies = movies.copy()
    movies["score"] = scores

    if exclude_already_rated:
        rated_movie_ids = set(ratings.loc[ratings["userId"] == user_id, "movieId"].astype(int).tolist())
        movies = movies[~movies["movieId"].astype(int).isin(rated_movie_ids)]

    # Rank by score desc, tie-break by movieId for determinism
    movies = movies.sort_values(by=["score", "movieId"], ascending=[False, True]).head(top_k)
    return movies[["movieId", "title", "genres", "score"]].reset_index(drop=True)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Content-based movie recommender using movies.csv and ratings.csv",
    )
    parser.add_argument("--user-id", type=int, required=True, help="User ID to recommend for")
    parser.add_argument("--top-k", type=int, default=10, help="Number of recommendations (default: 10)")
    parser.add_argument(
        "--include-rated",
        action="store_true",
        help="Include items the user has already rated",
    )

    return parser.parse_args()


def main() -> None:
    args = parse_args()
    recs = recommend_for_user(
        movies_csv_path=MOVIES_CSV_PATH,
        ratings_csv_path=RATINGS_CSV_PATH,
        user_id=args.user_id,
        top_k=args.top_k,
        exclude_already_rated=not args.include_rated,
    )

    # Pretty print to console
    pd.set_option("display.max_colwidth", 80)
    print(recs.to_string(index=False, justify="left", col_space=2, formatters={"score": lambda s: f"{s:.4f}"}))


if __name__ == "__main__":
    main()


