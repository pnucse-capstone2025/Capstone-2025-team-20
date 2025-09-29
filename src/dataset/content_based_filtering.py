import pandas as pd
import numpy as np
from scipy.sparse import csr_matrix
import warnings
import os
import pymysql
from config import get_db_config
from contextlib import contextmanager
warnings.filterwarnings('ignore')


@contextmanager
def get_mysql_connection():
	"""MySQL 연결 생성 (환경변수 기반)"""
	conn = pymysql.connect(**get_db_config())
	try:
		yield conn
	finally:
		conn.close()


class SalesBasedFiltering:
	def __init__(self, movies_file='ml-latest-small/movies.csv'):
		"""
		Sales 기반 콘텐츠 필터링 클래스 (데이터베이스 직접 연동)

		Args:
			movies_file: 영화 정보 파일 경로
		"""
		self.movies_file = movies_file
		self.ratings_df = None
		self.movies_df = None

		self.sale_index_to_id = None  # list[int saleId] aligned to row index
		self.sale_index_to_movie_id = None  # list[int movieId] aligned to row index
		self.sale_index_by_movie_id = None  # dict[int movieId -> list[int sale_row_index]]
		
		self.token_to_index = None
		self.index_to_token = None
		self.idf_vector = None
		self.item_feature_matrix = None  # csr_matrix (num_sales x num_features)
		self.sales_meta_by_id = None  # dict[int saleId -> dict row]

	def load_data(self):
		"""데이터베이스에서 평점 데이터 및 영화 데이터 로드"""
		print("데이터베이스 reviews 테이블에서 평점 데이터를 로드하는 중...")
		self.ratings_df = self._load_ratings_from_database()
		
		if self.ratings_df is not None and not self.ratings_df.empty:
			print(f"평점 데이터: {self.ratings_df.shape[0]}개 평점")
			print(f"사용자 수: {self.ratings_df['userId'].nunique()}명")
			print(f"영화 수: {self.ratings_df['movieId'].nunique()}개")
		else:
			print("❌ 데이터베이스에서 평점 데이터를 로드할 수 없습니다.")
			raise Exception("데이터베이스 연결을 확인하거나 reviews 테이블에 데이터가 있는지 확인해주세요.")
		
		print("영화 데이터를 로드하는 중...")
		if os.path.exists(self.movies_file):
			self.movies_df = pd.read_csv(self.movies_file)
			print(f"영화 데이터: {self.movies_df.shape[0]}개 영화")
		else:
			print(f"영화 데이터 파일을 찾을 수 없습니다: {self.movies_file}")
			self.movies_df = None

	def _load_ratings_from_database(self):
		"""데이터베이스 reviews 테이블에서 평점 데이터 로드"""
		try:
			with get_mysql_connection() as conn:
				query = """
				SELECT 
					r.user_id as userId,
					s.movie_id as movieId,
					r.rating as rating,
					UNIX_TIMESTAMP(r.created_at) as timestamp
				FROM reviews r
				LEFT JOIN sales s ON r.sales_id = s.id
				WHERE s.movie_id IS NOT NULL
				ORDER BY r.user_id, r.sales_id
				"""
				
				ratings_df = pd.read_sql(query, con=conn)
				
				if ratings_df.empty:
					print("⚠️ Reviews 테이블에서 데이터를 찾을 수 없습니다.")
					return None
				
				# 데이터 타입 확인 및 정리
				ratings_df['userId'] = ratings_df['userId'].astype(int)
				ratings_df['movieId'] = ratings_df['movieId'].astype(int)
				ratings_df['rating'] = ratings_df['rating'].astype(float)
				ratings_df['timestamp'] = ratings_df['timestamp'].fillna(0).astype(int)
				
				print(f"✅ Reviews 테이블에서 {len(ratings_df)}개 평점 로드 완료")
				return ratings_df
				
		except Exception as e:
			print(f"❌ 데이터베이스 평점 로드 오류: {e}")
			return None

	def _price_bucket(self, price):
		"""가격을 만원 단위 버킷으로 변환"""
		if pd.isna(price):
			return None

		try:
			p = int(price)
		except Exception:
			return None

		if p < 10000:
			return 'price:<1만'
		band = p // 10000
		return f'price:{band}만대'

	def create_sales_feature_matrix(self, min_df=2, use_log_tf=True, engine='sklearn'):
		"""
		Sales 메타데이터 기반 TF-IDF 특성 행렬 생성 (quality/price/region/site/limited)

		Args:
			min_df: 토큰 최소 문서 빈도
			use_log_tf: 로그 TF 사용 여부
			engine: 'sklearn' 또는 'internal' (기본 'sklearn')
		"""
		print("MySQL에서 sales 메타데이터를 로드하는 중...")

		query = (
			"SELECT id, movie_id, site_name, price, quality, region_code, is_limited_edition, "
			"bluray_title, site_url "
			"FROM sales"
		)
		with get_mysql_connection() as conn:
			df = pd.read_sql(query, con=conn)
		if df.empty:
			raise RuntimeError("sales 테이블이 비어 있습니다.")

		# 인덱스/매핑 초기화
		sale_ids = df['id'].astype(int).tolist()
		self.sale_index_to_id = sale_ids

		# movie_id -> sale row indices 매핑 구성
		self.sale_index_by_movie_id = {}
		self.sale_index_to_movie_id = []
		for idx, row in df.iterrows():
			mid = int(row['movie_id']) if not pd.isna(row['movie_id']) else None
			self.sale_index_to_movie_id.append(mid)
			if mid is not None:
				self.sale_index_by_movie_id.setdefault(mid, []).append(idx)
		

		# 공통: 토큰 텍스트 생성 함수
		def _row_to_token_text(row):
			tokens = []
			q = row.get('quality')
			if pd.notna(q) and str(q).strip():
				tokens.append(f"quality:{str(q).strip()}")
			r = row.get('region_code')
			if pd.notna(r) and str(r).strip():
				tokens.append(f"region:{str(r).strip()}")
			site = row.get('site_name')
			if pd.notna(site) and str(site).strip():
				tokens.append(f"site:{str(site).strip().lower()}")
			limited = row.get('is_limited_edition')
			if pd.notna(limited):
				tokens.append(f"limited:{'yes' if bool(limited) else 'no'}")
			bucket = self._price_bucket(row.get('price'))
			if bucket:
				tokens.append(bucket)
			return " ".join(tokens)

		if engine == 'sklearn':
			try:
				from sklearn.feature_extraction.text import TfidfVectorizer
			except Exception as e:
				print(f"scikit-learn 사용 실패({e}), internal 엔진으로 대체합니다.")
				engine = 'internal'
		
		if engine == 'sklearn':
			texts = [
				_row_to_token_text(row)
				for _, row in df.iterrows()
			]
			vectorizer = TfidfVectorizer(
				lowercase=False,
				preprocessor=lambda s: s,
				tokenizer=str.split,
				token_pattern=None,
				min_df=min_df,
				sublinear_tf=bool(use_log_tf),
				norm='l2',
				dtype=np.float32,
			)
			matrix = vectorizer.fit_transform(texts)
			self.item_feature_matrix = matrix.tocsr()
			# 호환성을 위해 보조 메타데이터도 유지
			self.token_to_index = dict(vectorizer.vocabulary_)
			self.index_to_token = {idx: tok for tok, idx in self.token_to_index.items()}
			# idf_는 feature 순서 기준
			try:
				idf = np.asarray(vectorizer.idf_, dtype=np.float32)
				self.idf_vector = idf
			except Exception:
				self.idf_vector = None
			# 판매 메타데이터를 id 기반으로 인메모리 인덱싱
			self.sales_meta_by_id = {int(r['id']): dict(r) for _, r in df.iterrows()}
			print(f"특성 행렬 크기: {self.item_feature_matrix.shape} (sales x 토큰, engine=sklearn)")
			return

		# 내부 엔진 경로 (기존 로직 유지)
		item_tokens_list = []
		df_counter = {}
		for _, row in df.iterrows():
			tokens = {}
			q = row.get('quality')
			if pd.notna(q) and str(q).strip():
				key = f"quality:{str(q).strip()}"
				tokens[key] = tokens.get(key, 0) + 1
			r = row.get('region_code')
			if pd.notna(r) and str(r).strip():
				key = f"region:{str(r).strip()}"
				tokens[key] = tokens.get(key, 0) + 1
			site = row.get('site_name')
			if pd.notna(site) and str(site).strip():
				key = f"site:{str(site).strip().lower()}"
				tokens[key] = tokens.get(key, 0) + 1
			limited = row.get('is_limited_edition')
			if pd.notna(limited):
				key = f"limited:{'yes' if bool(limited) else 'no'}"
				tokens[key] = tokens.get(key, 0) + 1
			bucket = self._price_bucket(row.get('price'))
			if bucket:
				tokens[bucket] = tokens.get(bucket, 0) + 1

			item_tokens_list.append(tokens)
			for tok in tokens.keys():
				df_counter[tok] = df_counter.get(tok, 0) + 1

		num_items = len(sale_ids)
		valid_tokens = [tok for tok, dfv in df_counter.items() if dfv >= min_df]
		valid_tokens.sort()
		self.token_to_index = {tok: idx for idx, tok in enumerate(valid_tokens)}
		self.index_to_token = {idx: tok for tok, idx in self.token_to_index.items()}

		idf = np.zeros(len(self.token_to_index), dtype=np.float32)
		for tok, idx in self.token_to_index.items():
			df_v = df_counter.get(tok, 0)
			idf[idx] = np.log((1.0 + num_items) / (1.0 + df_v)) + 1.0
		self.idf_vector = idf

		rows, cols, data = [], [], []
		for row_idx, token_counts in enumerate(item_tokens_list):
			for tok, tf in token_counts.items():
				col_idx = self.token_to_index.get(tok)
				if col_idx is None:
					continue
				val_tf = (1.0 + np.log(tf)) if use_log_tf else float(tf)
				rows.append(row_idx)
				cols.append(col_idx)
				data.append(val_tf)

		matrix = csr_matrix((np.array(data, dtype=np.float32), (np.array(rows), np.array(cols))),
			shape=(num_items, len(self.token_to_index)), dtype=np.float32)
		matrix = matrix.multiply(self.idf_vector)
		row_norms = np.asarray(np.sqrt(matrix.multiply(matrix).sum(axis=1))).ravel()
		row_norms[row_norms == 0.0] = 1.0
		inv = 1.0 / row_norms
		matrix = matrix.multiply(inv.reshape(-1, 1))

		self.item_feature_matrix = matrix.tocsr()
		# 판매 메타데이터를 id 기반으로 인메모리 인덱싱
		self.sales_meta_by_id = {int(r['id']): dict(r) for _, r in df.iterrows()}
		print(f"특성 행렬 크기: {self.item_feature_matrix.shape} (sales x 토큰, engine=internal)")

	def _build_user_profile_vector(self, user_id):
		"""사용자 프로필 벡터 생성 (평점 가중 합)"""
		if user_id not in set(self.ratings_df['userId'].unique().tolist()):
			return None

		user_ratings = self.ratings_df[self.ratings_df['userId'] == user_id][['movieId', 'rating']]
		user_ratings['movieId'] = user_ratings['movieId'].astype(int)

		# 사용자 평균 중심화 가중치 (모든 평점이 같으면 평점값 사용)
		user_mean = user_ratings['rating'].mean()
		user_ratings['weight'] = user_ratings['rating'] - user_mean
		
		# 모든 평점이 같아서 가중치가 0이 되는 경우, 평점 자체를 가중치로 사용
		if (user_ratings['weight'] == 0).all():
			user_ratings['weight'] = user_ratings['rating']

		# 영화 인덱스 정렬 및 가중치 벡터 생성
		indices = []
		weights = []
		for _, r in user_ratings.iterrows():
			mid = int(r['movieId'])
			w = float(r['weight'])
			if w == 0.0:
				continue
			
			# 영화에 연결된 모든 sales 행에 가중치를 균등 분배
			row_indices = self.sale_index_by_movie_id.get(mid, [])
			if not row_indices:
				continue
			share = w / float(len(row_indices))
			for idx in row_indices:
				indices.append(int(idx))
				weights.append(share)

		if not indices:
			return None

		# 가중 합: w^T * M  (1 x F)
		w_vec = np.zeros(self.item_feature_matrix.shape[0], dtype=np.float32)
		w_vec[np.array(indices, dtype=int)] = np.array(weights, dtype=np.float32)
		profile = w_vec @ self.item_feature_matrix  # dense(1 x F)

		# L2 정규화
		norm = np.linalg.norm(profile)
		if norm == 0.0:
			return None
		return (profile / norm).astype(np.float32)

	def recommend_sales(self, user_id, n_recommendations=10, min_score=0.0):
		"""
		특정 사용자에게 sales 추천 (콘텐츠 기반)

		Args:
			user_id: 사용자 ID
			n_recommendations: 추천할 sales 수
			min_score: 최소 유사도 임계값
		"""
		print(f"사용자 {user_id}에게 sales를 추천하는 중...")

		profile = self._build_user_profile_vector(user_id)
		if profile is None:
			return []

		# 모든 sales에 대한 코사인 유사도 점수 (행이 L2정규화되어 있으므로 내적 == 코사인)
		scores = self.item_feature_matrix @ profile.reshape(-1, 1)
		scores = np.asarray(scores).ravel()

		candidates = []
		for row_idx, score in enumerate(scores):
			mid = self.sale_index_to_movie_id[row_idx]
			if score >= min_score:
				candidates.append((row_idx, mid, float(score)))

		candidates.sort(key=lambda x: x[2], reverse=True)
		selected = candidates[:n_recommendations]

		result = []
		for row_idx, mid, sc in selected:
			result.append({
				'saleId': self.sale_index_to_id[row_idx],
				'movieId': mid,
				'relevance': round(sc, 4)
			})

		return result

	def evaluate_recommendations(self, user_id, n_recommendations=10):
		"""추천 결과 요약 출력"""
		recommendations = self.recommend_sales(user_id, n_recommendations=n_recommendations)
		print(f"\n=== 사용자 {user_id} Sales 기반 추천 결과 ===")
		print(f"추천 sales 수: {len(recommendations)}")
		if recommendations:
			print("\n추천 sales 목록:")
			for i, rec in enumerate(recommendations, 1):
				print(f"{i:2d}. saleId={rec['saleId']}, movieId={rec.get('movieId')}")
				print(f"    유사도: {rec['relevance']}")
				print()
		else:
			print("추천할 sales가 없습니다.")
		return recommendations

	def find_best_sales_for_movies(self, movie_recommendations, user_id, top_n=None):
		"""
		Content-based filtering으로 추천받은 영화 리스트에 대해 각 영화의 최적 블루레이(sales) 찾기
		사용자의 과거 구매/평가 패턴을 분석해서 메타데이터가 유사한 블루레이를 추천
		
		Args:
			movie_recommendations: 영화 추천 리스트 [(movie_id, title, predicted_rating, personalized_score, avg_rating), ...]
			user_id: 사용자 ID (content-based 프로필 생성용)
			top_n: 상위 N개 블루레이만 반환 (None이면 모든 영화에서 블루레이 찾기)
			
		Returns:
			list: 각 영화의 최적 sales 정보 (top_n이 지정되면 상위 N개만)
		"""
		total_movies = len(movie_recommendations)
		result_count = top_n if top_n else total_movies
		
		print(f"\n=== Content-based Filtering으로 영화 {total_movies}개 → 상위 {result_count}개 블루레이 추천 ===")
		print(f"사용자 ID: {user_id}")
		
		# 사용자 프로필 벡터 생성 (이미 평가한 sales 기반)
		user_profile = self._build_user_profile_vector(user_id)
		if user_profile is None:
			raise RuntimeError(f"사용자 {user_id}의 프로필이 존재하지 않습니다. 유저 프로필을 먼저 생성하세요.")
		
		print(f"✅ 사용자 프로필 벡터 생성 완료 (차원: {len(user_profile)})")
		
		results = []
		movies_with_sales = 0
		
		try:
			# 유사도 계산을 위해 사용자 프로필을 컬럼 벡터로 준비
			user_profile_vec = user_profile.reshape(-1, 1)
			for i, movie_rec in enumerate(movie_recommendations, 1):
				movie_id = movie_rec[0]
				movie_title = movie_rec[1]
				# SVD 예측 평점은 사용하지 않음 (순수 콘텐츠 기반)
				
				# 해당 영화의 sales들을 content-based filtering으로 추천
				best_sale_info = self._recommend_sale_for_movie(movie_id, user_profile)
				
				if best_sale_info is None:
					# Sales가 없는 영화는 낮은 점수로 처리 (유사도만 사용)
					results.append({
						'movie_id': movie_id,
						'movie_title': movie_title,
						'best_sale': None,
						'similarity_score': -1.0,
						'reason': 'No bluray sales available'
					})
					continue
				
				movies_with_sales += 1
				best_sale, similarity_score, reason = best_sale_info
				
				results.append({
					'movie_id': movie_id,
					'movie_title': movie_title,
					'available_sales': best_sale.get('total_sales', 1) if best_sale else 0,
					'best_sale': best_sale,
					'similarity_score': similarity_score,
					'reason': reason
				})
		
		except Exception as e:
			print(f"추천 과정 중 오류: {e}")
			return []
		
		print(f"✅ Content-based 추천 완료: {movies_with_sales}/{len(movie_recommendations)}개 영화에서 블루레이 발견")
		
		# 상위 N개만 반환하는 경우
		if top_n is not None:
			print(f"🔝 유사도 기준으로 상위 {top_n}개 블루레이 선별 중...")
			# 유사도 기준으로 정렬
			results.sort(key=lambda x: x['similarity_score'], reverse=True)
			results = results[:top_n]
			
			# 실제 블루레이가 있는 것들만 카운트
			actual_bluray_count = len([r for r in results if r.get('best_sale') is not None])
			print(f"✅ 상위 {top_n}개 선별 완료 (블루레이 있음: {actual_bluray_count}개)")
		
		return results

	def _recommend_sale_for_movie(self, movie_id, user_profile):
		"""
		특정 영화의 sales 중에서 사용자 프로필과 가장 유사한 것을 content-based filtering으로 추천
		
		Args:
			movie_id: 영화 ID
			user_profile: 사용자 프로필 벡터
			
		Returns:
			tuple: (best_sale, similarity_score, reason) 또는 None
		"""
		# 해당 영화의 sales 인덱스들 찾기
		if movie_id not in self.sale_index_by_movie_id:
			return None
		
		sale_indices = self.sale_index_by_movie_id[movie_id]
		if not sale_indices:
			return None
		
		best_sale = None
		best_score = -1.0
		best_reason = ""

		# 전체 후보에 대한 점수 한 번에 계산 (희소행렬 내적)
		sub_matrix = self.item_feature_matrix[sale_indices]
		scores = (sub_matrix @ user_profile.reshape(-1, 1))
		scores = np.asarray(scores).ravel()
		if scores.size == 0:
			return None

		best_local_idx = int(np.argmax(scores))
		best_score = float(scores[best_local_idx])
		best_row_idx = sale_indices[best_local_idx]
		best_sale_id = self.sale_index_to_id[best_row_idx]

		# 메타데이터는 인메모리 맵에서 조회
		meta = (self.sales_meta_by_id or {}).get(int(best_sale_id))
		if meta is None:
			return None
		best_sale = dict(meta)
		best_sale['total_sales'] = len(sale_indices)
		best_reason = self._get_content_based_reason(best_sale, best_score)
		return (best_sale, best_score, best_reason)


	def _get_content_based_reason(self, sale, similarity_score):
		"""Content-based filtering 선택 이유 생성"""
		if not sale:
			return "No sales available"
		
		reasons = []
		
		# 화질/형식 코드 해석
		quality = sale.get('quality', '').upper()
		matched_flag = False
		if '4' in quality:
			reasons.append("4K")
			matched_flag = True
		if '3' in quality:
			reasons.append("3D")
			matched_flag = True
		if 'H' in quality:
			reasons.append("HD")
			matched_flag = True
		if 'B' in quality:
			reasons.append("Blu-ray")
			matched_flag = True
		if 'U' in quality:
			reasons.append("미확정")
			matched_flag = True
		if not matched_flag:
			reasons.append("화질 정보 없음")
		
		# 리미티드 에디션
		if sale.get('is_limited_edition'):
			reasons.append("한정판")
		
		# 지역
		if sale.get('region_code') == 1:
			reasons.append("국내판")
		else:
			reasons.append("수입판")
		
		# 문장 형식으로 반환
		items = [r for r in reasons if r]
		if not items:
			return "관련 특성이 포함되었습니다."
		return f"당신이 선호하는 {', '.join(items)} 특성이 포함되었습니다."
