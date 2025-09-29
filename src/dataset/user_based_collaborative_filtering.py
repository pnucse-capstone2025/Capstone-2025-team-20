import pandas as pd
import numpy as np
from scipy.spatial.distance import cosine
from scipy.stats import pearsonr
import warnings
warnings.filterwarnings('ignore')

class UserBasedCollaborativeFiltering:
    def __init__(self, ratings_file, movies_file):
        """
        사용자 기반 협업 필터링 클래스
        
        Args:
            ratings_file: 평점 데이터 파일 경로
            movies_file: 영화 정보 파일 경로
        """
        self.ratings_file = ratings_file
        self.movies_file = movies_file
        self.ratings_df = None
        self.movies_df = None
        self.user_movie_matrix = None
        self.user_similarity_matrix = None
        
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
        
    def calculate_user_similarity(self, method='cosine', min_common_movies=5):
        """
        사용자 간 유사도 계산
        
        Args:
            method: 유사도 계산 방법 ('cosine', 'pearson')
            min_common_movies: 최소 공통 영화 수
        """
        print(f"{method} 유사도를 계산하는 중...")
        
        n_users = self.user_movie_matrix.shape[0]
        self.user_similarity_matrix = np.zeros((n_users, n_users))
        
        user_ids = self.user_movie_matrix.index.tolist()
        
        for i, user1 in enumerate(user_ids):
            for j, user2 in enumerate(user_ids):
                if i == j:
                    self.user_similarity_matrix[i][j] = 1.0
                elif i < j:  # 대칭 행렬이므로 한 번만 계산
                    similarity = self._calculate_similarity(
                        user1, user2, method, min_common_movies
                    )
                    self.user_similarity_matrix[i][j] = similarity
                    self.user_similarity_matrix[j][i] = similarity
                    
        print("유사도 계산 완료!")
        
    def _calculate_similarity(self, user1, user2, method, min_common_movies):
        """두 사용자 간 유사도 계산"""
        # 공통으로 평가한 영화 찾기
        user1_ratings = self.user_movie_matrix.loc[user1].dropna()
        user2_ratings = self.user_movie_matrix.loc[user2].dropna()
        
        common_movies = user1_ratings.index.intersection(user2_ratings.index)
        
        if len(common_movies) < min_common_movies:
            return 0.0
            
        user1_common_ratings = user1_ratings[common_movies].values
        user2_common_ratings = user2_ratings[common_movies].values
        
        if method == 'cosine':
            # 코사인 유사도
            similarity = 1 - cosine(user1_common_ratings, user2_common_ratings)
            return similarity if not np.isnan(similarity) else 0.0
            
        elif method == 'pearson':
            # 피어슨 상관계수
            try:
                correlation, _ = pearsonr(user1_common_ratings, user2_common_ratings)
                return correlation if not np.isnan(correlation) else 0.0
            except:
                return 0.0
                
    def get_similar_users(self, user_id, n_similar=10, min_similarity=0.1):
        """
        특정 사용자와 유사한 사용자들 반환
        
        Args:
            user_id: 사용자 ID
            n_similar: 반환할 유사 사용자 수
            min_similarity: 최소 유사도 임계값
        """
        user_ids = self.user_movie_matrix.index.tolist()
        
        if user_id not in user_ids:
            print(f"사용자 {user_id}를 찾을 수 없습니다.")
            return []
            
        user_idx = user_ids.index(user_id)
        similarities = self.user_similarity_matrix[user_idx]
        
        # 유사도가 높은 순으로 정렬
        similar_users = []
        for i, sim in enumerate(similarities):
            if i != user_idx and sim >= min_similarity:
                similar_users.append((user_ids[i], sim))
                
        similar_users.sort(key=lambda x: x[1], reverse=True)
        return similar_users[:n_similar]
        
    def predict_rating(self, user_id, movie_id, n_similar=10, min_similarity=0.1):
        """
        특정 사용자가 특정 영화에 줄 평점 예측
        
        Args:
            user_id: 사용자 ID
            movie_id: 영화 ID
            n_similar: 사용할 유사 사용자 수
            min_similarity: 최소 유사도 임계값
        """
        # 이미 평가한 영화인지 확인
        if movie_id in self.user_movie_matrix.columns:
            existing_rating = self.user_movie_matrix.loc[user_id, movie_id]
            if not pd.isna(existing_rating):
                return existing_rating, "이미 평가한 영화"
        
        # 유사한 사용자들 찾기
        similar_users = self.get_similar_users(user_id, n_similar, min_similarity)
        
        if not similar_users:
            return None, "유사한 사용자를 찾을 수 없음"
        
        # 유사한 사용자들의 해당 영화 평점 수집
        weighted_sum = 0
        similarity_sum = 0
        
        for similar_user_id, similarity in similar_users:
            if movie_id in self.user_movie_matrix.columns:
                rating = self.user_movie_matrix.loc[similar_user_id, movie_id]
                if not pd.isna(rating):
                    weighted_sum += similarity * rating
                    similarity_sum += abs(similarity)
        
        if similarity_sum == 0:
            return None, "유사한 사용자들이 해당 영화를 평가하지 않음"
        
        predicted_rating = weighted_sum / similarity_sum
        return predicted_rating, f"{len(similar_users)}명의 유사 사용자 기반"
        
    def recommend_movies(self, user_id, n_recommendations=10, n_similar=10, min_similarity=0.1):
        """
        특정 사용자에게 영화 추천
        
        Args:
            user_id: 사용자 ID
            n_recommendations: 추천할 영화 수
            n_similar: 사용할 유사 사용자 수
            min_similarity: 최소 유사도 임계값
        """
        print(f"사용자 {user_id}에게 영화를 추천하는 중...")
        
        # 사용자가 이미 평가한 영화들
        user_ratings = self.user_movie_matrix.loc[user_id].dropna()
        rated_movies = set(user_ratings.index)
        
        # 모든 영화 중에서 아직 평가하지 않은 영화들
        all_movies = set(self.user_movie_matrix.columns)
        unrated_movies = all_movies - rated_movies
        
        # 각 영화에 대한 예상 평점 계산
        movie_predictions = []
        
        for movie_id in unrated_movies:
            predicted_rating, status = self.predict_rating(
                user_id, movie_id, n_similar, min_similarity
            )
            if predicted_rating is not None:
                movie_predictions.append((movie_id, predicted_rating, status))
        
        # 예상 평점이 높은 순으로 정렬
        movie_predictions.sort(key=lambda x: x[1], reverse=True)
        
        # 상위 추천 영화들 반환
        recommendations = movie_predictions[:n_recommendations]
        
        # 영화 정보와 함께 반환
        result = []
        for movie_id, predicted_rating, status in recommendations:
            movie_info = self.movies_df[self.movies_df['movieId'] == movie_id]
            if not movie_info.empty:
                title = movie_info.iloc[0]['title']
                genres = movie_info.iloc[0]['genres']
                result.append({
                    'movieId': movie_id,
                    'title': title,
                    'genres': genres,
                    'predicted_rating': round(predicted_rating, 2),
                    'status': status
                })
        
        return result
        
    def evaluate_recommendations(self, user_id, n_recommendations=10, n_similar=10, min_similarity=0.1):
        """추천 결과 평가 및 분석"""
        recommendations = self.recommend_movies(user_id, n_recommendations, n_similar, min_similarity)
        
        print(f"\n=== 사용자 {user_id} 추천 결과 ===")
        print(f"추천 영화 수: {len(recommendations)}")
        
        if recommendations:
            print("\n추천 영화 목록:")
            for i, rec in enumerate(recommendations, 1):
                print(f"{i:2d}. {rec['title']}")
                print(f"    예상 평점: {rec['predicted_rating']}")
                print(f"    장르: {rec['genres']}")
                print(f"    근거: {rec['status']}")
                print()
        else:
            print("추천할 영화가 없습니다.")
            
        return recommendations

def main():
    """메인 실행 함수"""
    # 데이터 파일 경로
    ratings_file = "./ml-latest-small/ratings.csv"
    movies_file = "./ml-latest-small/movies.csv"
    
    # 협업 필터링 객체 생성
    cf = UserBasedCollaborativeFiltering(ratings_file, movies_file)
    
    # 데이터 로드
    cf.load_data()
    
    # 사용자-영화 평점 행렬 생성
    cf.create_user_movie_matrix()
    
    # 사용자 유사도 계산 (코사인 유사도 사용)
    cf.calculate_user_similarity(method='cosine', min_common_movies=3)
    
    # 테스트 사용자들
    test_users = [1, 2, 3, 4, 5]
    
    print("\n" + "="*60)
    print("사용자 기반 협업 필터링 추천 결과")
    print("="*60)
    
    for user_id in test_users:
        try:
            cf.evaluate_recommendations(user_id, n_recommendations=5)
            print("-" * 60)
        except Exception as e:
            print(f"사용자 {user_id} 추천 중 오류 발생: {e}")
            print("-" * 60)

if __name__ == "__main__":
    main()
