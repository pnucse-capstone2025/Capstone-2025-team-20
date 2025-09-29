import pandas as pd
import numpy as np
from sklearn.decomposition import TruncatedSVD
import warnings
warnings.filterwarnings('ignore')

class SimpleMatrixFactorization:
    """
    간단한 행렬 분해 추천 시스템
    SVD(Singular Value Decomposition)를 사용한 협업 필터링 구현
    """
    
    def __init__(self, n_components=50):
        """
        Args:
            n_components: 잠재 요인 수 (차원)
        """
        self.n_components = n_components
        self.model = None
        self.user_movie_matrix = None
        self.user_factors = None
        self.item_factors = None
        self.user_ids = None
        self.movie_ids = None
        
    def load_data(self, ratings_file, movies_file=None):
        """
        데이터 로드
        
        Args:
            ratings_file: 평점 데이터 파일 경로 (userId, movieId, rating 컬럼 필요)
            movies_file: 영화 정보 파일 경로 (선택사항)
        """
        print("데이터 로드 중...")
        self.ratings_df = pd.read_csv(ratings_file)
        
        if movies_file:
            self.movies_df = pd.read_csv(movies_file)
        else:
            self.movies_df = None
            
        print(f"평점 데이터: {len(self.ratings_df)}개")
        print(f"사용자 수: {self.ratings_df['userId'].nunique()}명")
        print(f"영화 수: {self.ratings_df['movieId'].nunique()}개")
    
    def prepare_matrix(self):
        """사용자-영화 평점 행렬 생성 및 전처리"""
        print("사용자-영화 평점 행렬 생성 중...")
        
        # 피벗 테이블로 행렬 생성
        self.user_movie_matrix = self.ratings_df.pivot_table(
            index='userId', 
            columns='movieId', 
            values='rating'
        )
        
        # 인덱스 저장
        self.user_ids = self.user_movie_matrix.index.tolist()
        self.movie_ids = self.user_movie_matrix.columns.tolist()
        
        print(f"행렬 크기: {self.user_movie_matrix.shape}")
        
        # 결측값 처리 (전체 평균으로 채우기)
        global_mean = self.user_movie_matrix.mean().mean()
        self.user_movie_matrix_filled = self.user_movie_matrix.fillna(global_mean)
        
        print(f"전체 평균 평점: {global_mean:.2f}")
        print("행렬 준비 완료!")
    
    def fit(self):
        """SVD 모델 학습"""
        print(f"SVD 모델 학습 중... (차원: {self.n_components})")
        
        # TruncatedSVD 모델 생성 및 학습
        self.model = TruncatedSVD(n_components=self.n_components, random_state=42)
        self.user_factors = self.model.fit_transform(self.user_movie_matrix_filled)
        self.item_factors = self.model.components_
        
        print(f"사용자 요인 행렬: {self.user_factors.shape}")
        print(f"영화 요인 행렬: {self.item_factors.shape}")
        print("모델 학습 완료!")
    
    def predict_rating(self, user_id, movie_id):
        """
        특정 사용자의 특정 영화에 대한 평점 예측
        
        Args:
            user_id: 사용자 ID
            movie_id: 영화 ID
            
        Returns:
            predicted_rating: 예측 평점 (0.5-5.0)
        """
        try:
            user_idx = self.user_ids.index(user_id)
            movie_idx = self.movie_ids.index(movie_id)
            
            # 행렬 분해를 통한 예측
            predicted_rating = np.dot(self.user_factors[user_idx], self.item_factors[:, movie_idx])
            
            # 평점 범위 제한
            predicted_rating = np.clip(predicted_rating, 0.5, 5.0)
            
            return predicted_rating
            
        except ValueError:
            return None  # 사용자 또는 영화가 없는 경우
    
    def recommend_movies(self, user_id, n_recommendations=10):
        """
        사용자에게 영화 추천
        
        Args:
            user_id: 사용자 ID
            n_recommendations: 추천할 영화 수
            
        Returns:
            list: [(movie_id, predicted_rating), ...] 형태의 추천 목록
        """
        if user_id not in self.user_ids:
            print(f"사용자 {user_id}를 찾을 수 없습니다.")
            return []
        
        print(f"사용자 {user_id}에게 영화 추천 중...")
        
        # 사용자가 이미 평가한 영화들
        user_ratings = self.user_movie_matrix.loc[user_id].dropna()
        rated_movies = set(user_ratings.index)
        
        # 모든 영화에 대한 예측 평점 계산
        recommendations = []
        
        for movie_id in self.movie_ids:
            if movie_id not in rated_movies:  # 아직 평가하지 않은 영화만
                predicted_rating = self.predict_rating(user_id, movie_id)
                if predicted_rating is not None:
                    recommendations.append((movie_id, predicted_rating))
        
        # 예측 평점 기준으로 정렬
        recommendations.sort(key=lambda x: x[1], reverse=True)
        
        # 상위 N개 반환
        top_recommendations = recommendations[:n_recommendations]
        
        # 영화 제목 추가 (영화 데이터가 있는 경우)
        if self.movies_df is not None:
            result = []
            for movie_id, rating in top_recommendations:
                movie_info = self.movies_df[self.movies_df['movieId'] == movie_id]
                if not movie_info.empty:
                    title = movie_info.iloc[0]['title']
                    result.append((movie_id, title, round(rating, 2)))
                else:
                    result.append((movie_id, f"Movie {movie_id}", round(rating, 2)))
            return result
        else:
            return [(movie_id, f"Movie {movie_id}", round(rating, 2)) 
                   for movie_id, rating in top_recommendations]
    
    def get_movie_recommendations_with_details(self, user_id, n_recommendations=10):
        """
        영화 추천 결과를 상세 정보와 함께 출력
        """
        recommendations = self.recommend_movies(user_id, n_recommendations)
        
        if not recommendations:
            print("추천할 영화가 없습니다.")
            return
        
        print(f"\n=== 사용자 {user_id} 추천 영화 TOP {len(recommendations)} ===")
        for i, (movie_id, title, rating) in enumerate(recommendations, 1):
            print(f"{i:2d}. {title} (ID: {movie_id})")
            print(f"    예상 평점: {rating}")
            
            # 영화 장르 정보 추가 (있는 경우)
            if self.movies_df is not None:
                movie_info = self.movies_df[self.movies_df['movieId'] == movie_id]
                if not movie_info.empty and 'genres' in movie_info.columns:
                    genres = movie_info.iloc[0]['genres']
                    print(f"    장르: {genres}")
            print()


def example_usage():
    """사용 예제"""
    print("=== 간단한 Matrix Factorization 추천 시스템 예제 ===\n")
    
    # 1. 모델 초기화
    mf = SimpleMatrixFactorization(n_components=50)
    
    # 2. 데이터 로드
    mf.load_data(
        ratings_file="./ml-latest-small/ratings.csv",
        movies_file="./ml-latest-small/movies.csv"
    )
    
    # 3. 데이터 전처리
    mf.prepare_matrix()
    
    # 4. 모델 학습
    mf.fit()
    
    # 5. 추천 생성
    user_id = 1  # 예시 사용자 ID
    recommendations = mf.get_movie_recommendations_with_details(user_id, n_recommendations=5)
    
    # 6. 개별 평점 예측 예제
    print(f"\n=== 개별 평점 예측 예제 ===")
    movie_id = 1  # 예시 영화 ID
    predicted_rating = mf.predict_rating(user_id, movie_id)
    if predicted_rating:
        print(f"사용자 {user_id}가 영화 {movie_id}에 줄 예상 평점: {predicted_rating:.2f}")
    else:
        print(f"사용자 {user_id} 또는 영화 {movie_id}를 찾을 수 없습니다.")


if __name__ == "__main__":
    example_usage()
