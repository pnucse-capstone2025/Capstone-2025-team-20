import pandas as pd
import numpy as np
from sklearn.decomposition import TruncatedSVD
from sklearn.metrics import mean_squared_error
import warnings
warnings.filterwarnings('ignore')

class SVDRecommender:
    def __init__(self, ratings_file, movies_file, n_components=20):
        """
        SVD 기반 추천 시스템
        
        Args:
            ratings_file: 평점 데이터 파일 경로
            movies_file: 영화 정보 파일 경로
            n_components: 잠재 요인 수 (차원)
        """
        self.ratings_file = ratings_file
        self.movies_file = movies_file
        self.n_components = n_components
        
        self.ratings_df = None
        self.movies_df = None
        self.user_movie_matrix = None
        self.user_movie_matrix_filled = None
        self.model = None
        self.user_factors = None
        self.item_factors = None
        
    def load_data(self):
        """데이터 로드"""
        print("데이터를 로드하는 중...")
        self.ratings_df = pd.read_csv(self.ratings_file)
        self.movies_df = pd.read_csv(self.movies_file)
        
        print(f"평점 데이터: {self.ratings_df.shape[0]}개 평점")
        print(f"영화 데이터: {self.movies_df.shape[0]}개 영화")
        print(f"사용자 수: {self.ratings_df['userId'].nunique()}명")
        
    def create_user_movie_matrix(self):
        """사용자-영화 평점 행렬 생성"""
        print("사용자-영화 평점 행렬을 생성하는 중...")
        self.user_movie_matrix = self.ratings_df.pivot_table(
            index='userId', 
            columns='movieId', 
            values='rating'
        )
        print(f"평점 행렬 크기: {self.user_movie_matrix.shape}")
        print(f"평점 행렬 희소성: {(1 - self.user_movie_matrix.count().sum() / (self.user_movie_matrix.shape[0] * self.user_movie_matrix.shape[1])) * 100:.2f}%")
        
    def fill_missing_values(self, method='mean', max_iter=3):
        """결측값 채우기 (단순화)"""
        print("사용자별 평균으로 결측값 채우기...")
        
        # 사용자별 평균으로 채우기
        user_means = self.user_movie_matrix.mean(axis=1)
        self.user_movie_matrix_filled = self.user_movie_matrix.copy()
        
        for user_id in self.user_movie_matrix.index:
            user_mean = user_means[user_id]
            if pd.isna(user_mean):
                user_mean = self.user_movie_matrix.mean().mean()
            self.user_movie_matrix_filled.loc[user_id] = self.user_movie_matrix_filled.loc[user_id].fillna(user_mean)
        
        # 여전히 NaN이 있다면 전체 평균으로 채우기
        if self.user_movie_matrix_filled.isna().any().any():
            global_mean = self.user_movie_matrix.mean().mean()
            self.user_movie_matrix_filled = self.user_movie_matrix_filled.fillna(global_mean)
            
        print("결측값 채우기 완료!")
    
        
    def fit_model(self):
        """SVD 모델 학습"""
        print(f"SVD 모델을 학습하는 중... (차원: {self.n_components})")
        
        self.model = TruncatedSVD(n_components=self.n_components, random_state=42)
        self.user_factors = self.model.fit_transform(self.user_movie_matrix_filled)
        self.item_factors = self.model.components_
        
        print(f"사용자 요인 행렬 크기: {self.user_factors.shape}")
        print(f"영화 요인 행렬 크기: {self.item_factors.shape}")
        print("SVD 모델 학습 완료!")
        
    def predict_rating(self, user_id, movie_id):
        """
        특정 사용자가 특정 영화에 줄 평점 예측
        
        Args:
            user_id: 사용자 ID
            movie_id: 영화 ID
        """
        # 사용자와 영화 인덱스 찾기
        user_ids = self.user_movie_matrix.index.tolist()
        movie_ids = self.user_movie_matrix.columns.tolist()
        
        if user_id not in user_ids or movie_id not in movie_ids:
            return None, "사용자 또는 영화를 찾을 수 없음"
        
        user_idx = user_ids.index(user_id)
        movie_idx = movie_ids.index(movie_id)
        
        # 이미 평가한 영화인지 확인
        existing_rating = self.user_movie_matrix.loc[user_id, movie_id]
        if not pd.isna(existing_rating):
            return existing_rating, "이미 평가한 영화"
        
        # 행렬 분해를 통한 예측
        predicted_rating = np.dot(self.user_factors[user_idx], self.item_factors[:, movie_idx])
        
        # 평점 범위 제한 (0.5 ~ 5.0)
        predicted_rating = np.clip(predicted_rating, 0.5, 5.0)
        
        return predicted_rating, "SVD 기반"
        
    def get_user_preferences(self, user_id):
        """사용자의 선호도 분석 (최적화된 버전)"""
        user_ratings = self.ratings_df[self.ratings_df['userId'] == user_id]
        
        if len(user_ratings) == 0:
            return {
                'genre_scores': {},
                'user_mean': 3.0,
                'user_std': 1.0,
                'total_ratings': 0
            }
        
        # 사용자 평점 패턴 분석 (먼저 계산)
        user_mean = user_ratings['rating'].mean()
        user_std = user_ratings['rating'].std()
        
        # 영화 정보와 조인 (한 번만)
        user_movies = user_ratings.merge(self.movies_df[['movieId', 'genres']], on='movieId', how='left')
        
        # 장르별 선호도 계산 (벡터화)
        genre_preferences = {}
        
        for _, row in user_movies.iterrows():
            if pd.isna(row['genres']):
                continue
            genres = row['genres'].split('|')
            rating = row['rating']
            
            for genre in genres:
                if genre not in genre_preferences:
                    genre_preferences[genre] = []
                genre_preferences[genre].append(rating)
        
        # 장르별 평균 평점 계산 (간소화)
        genre_scores = {}
        for genre, ratings in genre_preferences.items():
            if len(ratings) >= 2:  # 최소 2개 이상 평가한 장르만
                avg_rating = np.mean(ratings)
                # 가중치 계산 간소화
                genre_scores[genre] = avg_rating
        
        return {
            'genre_scores': genre_scores,
            'user_mean': user_mean,
            'user_std': user_std,
            'total_ratings': len(user_ratings)
        }
    
    def calculate_personalized_score(self, user_id, movie_id, predicted_rating, user_prefs=None, movie_rating_counts=None):
        """개인화된 점수 계산 (적당한 수준)"""
        if user_prefs is None:
            user_prefs = self.get_user_preferences(user_id)
        
        # 간단한 장르 선호도만 적용 (과도한 복잡성 제거)
        genre_bonus = 0.0
        benefited_genres = []  # benefit을 받은 장르들 저장
        
        # 영화 장르 정보 가져오기
        movie_info = self.movies_df[self.movies_df['movieId'] == movie_id]
        if movie_info.empty:
            return predicted_rating, []
        
        movie_genres = movie_info.iloc[0]['genres'].split('|')
        
        # 장르 선호도 보너스 (간단하게)
        for genre in movie_genres:
            if genre in user_prefs['genre_scores']:
                genre_score = user_prefs['genre_scores'][genre]
                if genre_score > user_prefs['user_mean']:
                    bonus = (genre_score - user_prefs['user_mean']) * 0.3  # 계수 줄임
                    genre_bonus += bonus
                    benefited_genres.append(genre)  # benefit을 받은 장르 추가
        
        # 최종 개인화 점수 (간단하게)
        personalized_score = predicted_rating + min(genre_bonus, 0.5)  # 보너스 상한 설정
        
        return np.clip(personalized_score, 0.0, 5.0), benefited_genres
    
    def recommend_movies(self, user_id, n_recommendations=10, diversity_factor=0.2):
        """
        영화 추천 (적당한 개인화 버전)
        
        Args:
            user_id: 사용자 ID
            n_recommendations: 추천할 영화 수
            diversity_factor: 다양성 인자 (0.0-0.5 권장)
        """
        print(f"사용자 {user_id}에게 개인화된 영화를 추천하는 중...")
        
        # 사용자가 이미 평가한 영화들
        user_ratings = self.user_movie_matrix.loc[user_id].dropna()
        rated_movies = set(user_ratings.index)
        
        # 사용자 선호도 분석 (한 번만)
        user_prefs = self.get_user_preferences(user_id)
        
        # 추천 후보 영화 필터링
        movie_rating_counts = self.ratings_df.groupby('movieId').size()
        movie_rating_counts_dict = movie_rating_counts.to_dict()
        
        # 간단한 필터링 (최소 평점 수만 제한)
        min_ratings = 10
        
        candidate_movies = [
            movie_id for movie_id, count in movie_rating_counts_dict.items()
            if count >= min_ratings and movie_id not in rated_movies
        ]
        
        # 후보가 너무 많으면 랜덤 샘플링
        if len(candidate_movies) > 1000:
            np.random.shuffle(candidate_movies)
            candidate_movies = candidate_movies[:1000]
        
        # 각 영화에 대한 개인화된 점수 계산
        movie_predictions = []
        
        for movie_id in candidate_movies:
            predicted_rating, status = self.predict_rating(user_id, movie_id)
            if predicted_rating is not None:
                # 개인화 점수 계산
                personalized_score, benefited_genres = self.calculate_personalized_score(
                    user_id, movie_id, predicted_rating, user_prefs, movie_rating_counts_dict
                )
                movie_predictions.append((movie_id, personalized_score, predicted_rating, status, benefited_genres))
        
        # 개인화된 점수 기준으로 정렬
        movie_predictions.sort(key=lambda x: x[1], reverse=True)
        
        # 간단한 장르 다양성 적용 (과도하지 않게)
        if diversity_factor > 0:
            movie_predictions = self._apply_simple_genre_diversity(
                movie_predictions, n_recommendations, diversity_factor
            )
        
        # 상위 추천 영화들 반환
        recommendations = movie_predictions[:n_recommendations]
        
        # 영화 정보와 함께 반환
        result = []
        movie_info_dict = self.movies_df.set_index('movieId')[['title', 'genres']].to_dict('index')
        
        for movie_id, personalized_score, original_score, status, benefited_genres in recommendations:
            if movie_id in movie_info_dict:
                movie_info = movie_info_dict[movie_id]
                result.append({
                    'movieId': movie_id,
                    'title': movie_info['title'],
                    'genres': movie_info['genres'],
                    'predicted_rating': round(original_score, 2),
                    'personalized_score': round(personalized_score, 2),
                    'status': status,
                    'benefited_genres': benefited_genres  # benefit을 받은 장르들 추가
                })
        
        return result
    
    def _apply_simple_genre_diversity(self, movie_predictions, n_recommendations, diversity_factor):
        """간단한 장르 다양성 적용 (과적합 방지)"""
        if diversity_factor == 0:
            return movie_predictions
        
        selected = []
        used_genres = set()
        
        # 먼저 높은 점수 순으로 선택하되, 장르 중복 고려
        for movie_id, score, original_score, status, benefited_genres in movie_predictions:
            if len(selected) >= n_recommendations:
                break
                
            movie_info = self.movies_df[self.movies_df['movieId'] == movie_id]
            if movie_info.empty:
                continue
                
            movie_genres = set(movie_info.iloc[0]['genres'].split('|'))
            genre_overlap = len(movie_genres.intersection(used_genres))
            
            # 장르 중복이 적거나, 점수가 매우 높으면 선택
            if genre_overlap <= 1 or len(selected) < n_recommendations // 2:
                selected.append((movie_id, score, original_score, status, benefited_genres))
                used_genres.update(movie_genres)
        
        # 부족하면 나머지로 채우기
        if len(selected) < n_recommendations:
            remaining = [
                item for item in movie_predictions 
                if item[0] not in [s[0] for s in selected]
            ]
            selected.extend(remaining[:n_recommendations - len(selected)])
        
        return selected
    
    
        
    def evaluate_recommendations(self, user_id, n_recommendations=10):
        """추천 결과 평가 및 분석"""
        recommendations = self.recommend_movies(user_id, n_recommendations)
        
        print(f"\n=== 사용자 {user_id} 추천 결과 (SVD) ===")
        print(f"추천 영화 수: {len(recommendations)}")
        
        if recommendations:
            print("\n추천 영화 목록:")
            for i, rec in enumerate(recommendations, 1):
                print(f"{i:2d}. {rec['title']}")
                print(f"    예상 평점: {rec['predicted_rating']}")
                print(f"    장르: {rec['genres']}")
                print()
        else:
            print("추천할 영화가 없습니다.")
            
        return recommendations
        
    def evaluate_model(self, test_ratio=0.2):
        """
        모델 성능 평가 (교차 검증)
        
        Args:
            test_ratio: 테스트 데이터 비율
        """
        print("모델 성능을 평가하는 중...")
        
        # 테스트 데이터 생성 (랜덤 샘플링)
        test_indices = np.random.choice(
            self.ratings_df.index, 
            size=int(len(self.ratings_df) * test_ratio), 
            replace=False
        )
        
        train_df = self.ratings_df.drop(test_indices)
        test_df = self.ratings_df.loc[test_indices]
        
        # 훈련 데이터로 모델 재학습
        train_matrix = train_df.pivot_table(
            index='userId', 
            columns='movieId', 
            values='rating'
        )
        
        # 결측값 채우기 (더 안전한 방법)
        user_means = train_matrix.mean(axis=1)
        train_matrix_filled = train_matrix.fillna(user_means)
        
        # 여전히 NaN이 있다면 전체 평균으로 채우기
        if train_matrix_filled.isna().any().any():
            global_mean = train_matrix.mean().mean()
            train_matrix_filled = train_matrix_filled.fillna(global_mean)
        
        # 최종적으로 NaN이 있다면 0으로 채우기
        if train_matrix_filled.isna().any().any():
            train_matrix_filled = train_matrix_filled.fillna(0)
        
        # SVD 모델 재학습
        model = TruncatedSVD(n_components=self.n_components, random_state=42)
        
        user_factors = model.fit_transform(train_matrix_filled)
        item_factors = model.components_
        
        # 테스트 데이터에 대한 예측
        predictions = []
        actuals = []
        
        for _, row in test_df.iterrows():
            user_id = row['userId']
            movie_id = row['movieId']
            actual_rating = row['rating']
            
            if user_id in train_matrix.index and movie_id in train_matrix.columns:
                user_idx = train_matrix.index.get_loc(user_id)
                movie_idx = train_matrix.columns.get_loc(movie_id)
                
                predicted_rating = np.dot(user_factors[user_idx], item_factors[:, movie_idx])
                predicted_rating = np.clip(predicted_rating, 0.5, 5.0)
                
                predictions.append(predicted_rating)
                actuals.append(actual_rating)
        
        # RMSE 계산
        if predictions:
            rmse = np.sqrt(mean_squared_error(actuals, predictions))
            print(f"RMSE: {rmse:.4f}")
            return rmse
        else:
            print("평가할 데이터가 없습니다.")
            return None

def get_user_recommendations(user_id, n_recommendations=10, random_seed=42, diversity_factor=0.3, include_personalized_score=False, include_benefited_genres=False, verbose=False):
    """
    개인화가 강화된 SVDRecommender를 사용해서 유저 ID로 추천 영화 ID, 제목, 평점을 가져오는 함수
    
    Args:
        user_id: 사용자 ID
        n_recommendations: 추천할 영화 수
        random_seed: 랜덤 시드 (재현 가능한 결과를 위해)
        diversity_factor: 다양성 인자 (0.0-1.0, 높을수록 다양한 장르 추천)
        include_personalized_score: True면 개인화 점수도 함께 반환
        include_benefited_genres: True면 benefit을 받은 장르들도 함께 반환
        verbose: True면 상세한 시간 측정 출력
        
    Returns:
        list: 기본 [(movie_id, title, predicted_rating, avg_rating), ...]
              include_personalized_score가 True면 personalized_score 추가
              include_benefited_genres가 True면 benefited_genres 추가
    """
    import time
    
    if verbose:
        step_times = {}
        
    # 랜덤 시드 설정
    np.random.seed(random_seed)
    
    # 데이터 파일 경로 (절대경로화: Windows/작업 디렉토리 차이 대응)
    import os
    base_dir = os.path.dirname(os.path.abspath(__file__))
    ratings_file = os.path.join(base_dir, "ml-latest-small", "ratings.csv")
    movies_file = os.path.join(base_dir, "ml-latest-small", "movies.csv")
    
    # SVDRecommender 모델 생성
    if verbose:
        start = time.time()
    svd_model = SVDRecommender(ratings_file, movies_file, n_components=20)
    if verbose:
        step_times['모델 생성'] = time.time() - start
    
    # 데이터 로드
    if verbose:
        start = time.time()
    svd_model.load_data()
    if verbose:
        step_times['데이터 로드'] = time.time() - start
    
    # 사용자-영화 행렬 생성
    if verbose:
        start = time.time()
    svd_model.create_user_movie_matrix()
    if verbose:
        step_times['행렬 생성'] = time.time() - start
    
    # 결측값 채우기
    if verbose:
        start = time.time()
    svd_model.fill_missing_values(method='mean', max_iter=3)
    if verbose:
        step_times['결측값 처리'] = time.time() - start
    
    # SVD 모델 학습
    if verbose:
        start = time.time()
    svd_model.fit_model()
    if verbose:
        step_times['SVD 학습'] = time.time() - start
    
    # 추천 계산
    if verbose:
        start = time.time()
    recommendations = svd_model.recommend_movies(user_id, n_recommendations, diversity_factor)
    if verbose:
        step_times['추천 계산'] = time.time() - start
    
    # 평균 평점 계산
    if verbose:
        start = time.time()
    movie_avg_ratings = svd_model.ratings_df.groupby('movieId')['rating'].mean()
    if verbose:
        step_times['평균 평점 계산'] = time.time() - start
    
    # 결과 구성
    if verbose:
        start = time.time()
    result = []
    for rec in recommendations:
        movie_id = rec['movieId']
        title = rec['title']
        predicted_rating = rec['predicted_rating']
        
        # 해당 영화의 평균 평점 가져오기
        avg_rating = movie_avg_ratings.get(movie_id, 0.0)
        
        # 결과 튜플 구성
        result_tuple = [movie_id, title, predicted_rating]
        
        if include_personalized_score:
            personalized_score = rec['personalized_score']
            result_tuple.append(personalized_score)
        
        result_tuple.append(avg_rating)
        
        if include_benefited_genres:
            benefited_genres = rec.get('benefited_genres', [])
            result_tuple.append(benefited_genres)
        
        result.append(tuple(result_tuple))
    
    if verbose:
        step_times['결과 구성'] = time.time() - start
        
        # 상세 시간 출력
        print(f"\n🔍 상세 실행 시간:")
        total_detailed = 0
        for step, elapsed in step_times.items():
            print(f"  {step}: {elapsed:.3f}초")
            total_detailed += elapsed
        print(f"  합계: {total_detailed:.3f}초")
    
    return result