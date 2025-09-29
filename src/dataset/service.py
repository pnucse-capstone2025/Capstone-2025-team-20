from fastapi import FastAPI, Query
from fastapi.responses import JSONResponse
import uvicorn
from typing import Optional

from matrix_factorization_recommender import get_user_recommendations
from content_based_filtering import SalesBasedFiltering
from bluray_rating_converter import BlurayRatingConverter
import pandas as pd
import os

app = FastAPI()


def generate_recommendation_reason(benefited_genres, personalized_score, predicted_rating):
    """
    benefit 받은 장르들을 바탕으로 추천 사유 문장을 생성
    
    Args:
        benefited_genres: benefit을 받은 장르 리스트
        personalized_score: 개인화 점수
        predicted_rating: 기본 예상 평점
    
    Returns:
        str: 추천 사유 문장
    """
    if not benefited_genres:
        return "당신의 전반적인 평점 패턴을 기반으로 추천되었습니다."
    
    # 장르를 한국어로 번역
    genre_translations = {
        'Action': '액션', 'Adventure': '모험', 'Animation': '애니메이션',
        'Children': '아동', 'Comedy': '코미디', 'Crime': '범죄',
        'Documentary': '다큐멘터리', 'Drama': '드라마', 'Fantasy': '판타지',
        'Film-Noir': '필름 누아르', 'Horror': '호러', 'Musical': '뮤지컬',
        'Mystery': '미스터리', 'Romance': '로맨스', 'Sci-Fi': 'SF',
        'Thriller': '스릴러', 'War': '전쟁', 'Western': '서부'
    }
    
    # 장르를 한국어로 변환
    korean_genres = [genre_translations.get(genre, genre) for genre in benefited_genres]
    
    # 부스트 정도 계산
    boost = personalized_score - predicted_rating
    
    if len(korean_genres) == 1:
        reason = f"당신이 선호하는 {korean_genres[0]} 장르가 포함되었습니다."
    elif len(korean_genres) == 2:
        reason = f"당신이 선호하는 {korean_genres[0]}, {korean_genres[1]} 장르가 포함되었습니다."
    else:
        genres_str = ', '.join(korean_genres[:-1]) + f", {korean_genres[-1]}"
        reason = f"당신이 선호하는 {genres_str} 장르들이 포함되었습니다."
    
    return reason


@app.get("/run")
def run(userId: int = Query(..., alias="userId"), topN: int = Query(20, alias="topN")):
    try:
        # 1) 영화 추천 (SVD)
        recommendations = get_user_recommendations(
            userId,
            n_recommendations=100,
            random_seed=293,
            diversity_factor=0.3,
            include_personalized_score=True,
            include_benefited_genres=True,
            verbose=False,
        ) or []
        
        # 각 영화의 추천 사유를 미리 생성
        movie_reasons = {}
        for rec in recommendations:
            # 튜플 언패킹: (movie_id, title, predicted_rating, personalized_score, avg_rating, benefited_genres)
            movie_id, title, predicted_rating, personalized_score, avg_rating, benefited_genres = rec
            reason = generate_recommendation_reason(benefited_genres, personalized_score, predicted_rating)
            movie_reasons[movie_id] = reason

        # 2) 블루레이 추천 (콘텐츠 기반)
        bluray_results = []
        disable_sbf = os.getenv("DISABLE_SBF", "false").lower() in ("1", "true", "yes")
        if not disable_sbf:
            try:
                sbf = SalesBasedFiltering()
                sbf.load_data()
                sbf.create_sales_feature_matrix(min_df=2, use_log_tf=True)
                # 충분히 많이 뽑아두고, 사후 필터링(이미 평가한 영화 제외) 후 최종 topN으로 자르기
                candidate_top_n = max(topN * 5, 100)
                bluray_results = sbf.find_best_sales_for_movies(
                    recommendations,
                    user_id=userId,
                    top_n=candidate_top_n
                )
            except Exception as e:
                # 윈도우/외부 환경에서 DB 연결 실패 등은 무시하고 영화 추천만 반환
                bluray_results = []

        # numpy 타입을 Python 기본 타입으로 변환하는 헬퍼 함수
        def convert_numpy_types(obj):
            import numpy as np
            if isinstance(obj, (np.integer, np.floating)):
                return obj.item()
            elif isinstance(obj, np.ndarray):
                return obj.tolist()
            return obj

        # Filter out already-rated movies (live from ratings.csv)
        try:
            dataset_dir = os.getenv("APP_DATASET_DIR") or "/app/dataset"
            ml_dir = os.path.join(dataset_dir, "ml-latest-small")
            ratings_csv_path = os.path.join(ml_dir, "ratings.csv")

            frames = []
            if os.path.exists(ratings_csv_path):
                frames.append(pd.read_csv(ratings_csv_path, usecols=["userId", "movieId"]))

            rated_df = pd.concat(frames, ignore_index=True) if frames else pd.DataFrame(columns=["userId","movieId"])
            # 안전 캐스팅 및 NA 제거
            rated_df = rated_df.dropna(subset=["userId","movieId"])
            rated_df["userId"] = rated_df["userId"].astype(int)
            rated_df["movieId"] = rated_df["movieId"].astype(int)
            rated_movie_ids = set(rated_df.loc[rated_df["userId"] == int(userId), "movieId"].tolist())
        except Exception:
            rated_movie_ids = set()

        filtered = []
        for r in (bluray_results or []):
            # Support both keys: movie_id or movieId
            mid = convert_numpy_types(r.get("movie_id") if r.get("movie_id") is not None else r.get("movieId"))
            if mid is None:
                continue
            try:
                mid_int = int(mid)
            except Exception:
                continue
            if mid_int in rated_movie_ids:
                continue
            # 기존 reason과 영화 추천 사유 결합
            existing_reason = r.get("reason", "")
            movie_reason = movie_reasons.get(mid_int, "")
            
            # 두 사유를 결합 (둘 다 있으면 구분해서 표시)
            if existing_reason and movie_reason:
                combined_reason = f"{movie_reason} {existing_reason}"
            elif movie_reason:
                combined_reason = movie_reason
            elif existing_reason:
                combined_reason = existing_reason
            else:
                combined_reason = "추천 알고리즘에 의해 선별되었습니다."
            
            filtered.append({
                "movieId": mid_int,
                "movieTitle": r.get("movie_title"),
                "saleId": convert_numpy_types((r.get("best_sale") or {}).get("id")) if r.get("best_sale") else None,
                "similarityScore": convert_numpy_types(r.get("similarity_score", 0.0)),
                "reason": combined_reason
            })

        # 최종 응답 개수는 항상 topN을 넘지 않도록 슬라이싱
        payload = {"userId": userId, "results": filtered[:topN]}
        return JSONResponse(content=payload)
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})


@app.post("/append-rating")
def append_rating(userId: int = Query(..., alias="userId"), salesId: int = Query(..., alias="salesId")):
    try:
        # Determine dataset dir for ratings.csv
        dataset_dir = os.getenv("APP_DATASET_DIR") or "/app/dataset"
        ratings_csv_path = os.path.join(dataset_dir, "ml-latest-small", "ratings.csv")

        converter = BlurayRatingConverter(verbose=False)
        result = converter.convert_review_to_movie_rating(userId, salesId)
        if not result:
            return JSONResponse(status_code=404, content={"error": "conversion_failed_or_not_found"})

        movie_id = int(result.get("movie_id"))
        converted_rating = float(result.get("converted_movie_rating"))
        ts = int(__import__("time").time())

        # Ensure directory exists
        os.makedirs(os.path.dirname(ratings_csv_path), exist_ok=True)

        # Append (or create with header)
        if not os.path.exists(ratings_csv_path):
            df = pd.DataFrame([
                {"userId": userId, "movieId": movie_id, "rating": converted_rating, "timestamp": ts}
            ])
            df.to_csv(ratings_csv_path, index=False)
            created = True
        else:
            try:
                df_existing = pd.read_csv(ratings_csv_path)
            except Exception:
                df_existing = pd.DataFrame(columns=["userId","movieId","rating","timestamp"])
            df_append = pd.DataFrame([
                {"userId": userId, "movieId": movie_id, "rating": converted_rating, "timestamp": ts}
            ])
            df_out = pd.concat([df_existing, df_append], ignore_index=True)
            df_out.to_csv(ratings_csv_path, index=False)
            created = False

        return JSONResponse(content={
            "status": "ok",
            "created": created,
            "ratings_csv_path": ratings_csv_path,
            "userId": userId,
            "movieId": movie_id,
            "rating": converted_rating,
            "timestamp": ts
        })
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)