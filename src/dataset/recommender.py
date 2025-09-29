from matrix_factorization_recommender import get_user_recommendations
from content_based_filtering import SalesBasedFiltering
import time
import json

def main(user_id=612, top_n=20, json_output=False):
    """개인화가 강화된 SVDRecommender 사용 예제"""
    print("개인화가 강화된 SVDRecommender를 활용한 영화 추천 예제")
    print("="*90)
    
    # 사용자 ID는 인자로 전달
    
    print(f"\n사용자 {user_id}의 개인화된 추천 영화:")
    
    try:
        # 속도 측정 시작
        print(f"\n⏱️  추천 시스템 성능 측정:")
        print("-" * 50)
        
        # 개인화 점수를 포함한 추천 영화 가져오기
        print("추천 계산 중...")
        recommendation_start = time.time()
        
        recommendations = get_user_recommendations(
            user_id, 
            n_recommendations=100, 
            random_seed=293,
            diversity_factor=0.3,  # 30% 다양성 적용
            include_personalized_score=True,
            verbose=True  # 상세 시간 측정 활성화
        )
        
        recommendation_time = time.time() - recommendation_start
        
        # 성능 결과 출력
        print(f"\n📈 성능 측정 결과:")
        print(f"  추천 계산 시간: {recommendation_time:.3f}초")
        print(f"  추천 영화 수: {len(recommendations) if recommendations else 0}개")
        print("-" * 50)
        
        if recommendations:
            print(f"\n📋 영화 추천 결과 (상위 20개):")
            print(f"{'순위':<4} {'영화 ID':<8} {'예상 평점':<8} {'개인화 점수':<10} {'평균 평점':<8} {'영화 제목':<35}")
            print("-" * 100)
            
            # 상위 20개만 출력 (너무 많으면 화면이 지저분함)
            display_count = min(20, len(recommendations))
            for i, (movie_id, title, predicted_rating, personalized_score, avg_rating) in enumerate(recommendations[:display_count], 1):
                # 제목이 너무 길면 줄임
                display_title = title[:32] + "..." if len(title) > 35 else title
                print(f"{i:<4} {movie_id:<8} {predicted_rating:<8.2f} {personalized_score:<10.2f} {avg_rating:<8.2f} {display_title:<35}")
                
            if len(recommendations) > 20:
                print(f"\n... 총 {len(recommendations)}개 중 상위 20개만 표시됨")

            # 🆕 Content-based Filtering 블루레이 추천 시스템 연동
            print(f"\n🔄 Content-based Filtering으로 각 영화의 최적 블루레이를 찾는 중...")
            bluray_start = time.time()
            
            try:
                # Content-based filtering 시스템 초기화
                from content_based_filtering import SalesBasedFiltering
                
                # SalesBasedFiltering 객체 생성 및 특성 행렬 구성 (데이터베이스에서 직접 로드)
                sbf = SalesBasedFiltering()  # 데이터베이스 직접 연동
                sbf.load_data()  # 데이터베이스 reviews 테이블에서 평점 데이터 로드
                sbf.create_sales_feature_matrix(min_df=2, use_log_tf=True)  # Sales 메타데이터 TF-IDF 행렬 생성
                
                print(f"✅ Content-based filtering 시스템 초기화 완료")
                
                # Content-based filtering으로 추천받은 영화들의 최적 블루레이 찾기 (상위 20개만)
                bluray_results = sbf.find_best_sales_for_movies(recommendations, user_id, top_n=top_n)
                
                # JSON 출력 모드 또는 Spring 전송
                if json_output:
                    payload = {
                        'userId': user_id,
                        'results': [
                            {
                                'movieId': r.get('movie_id'),
                                'movieTitle': r.get('movie_title'),
                                'saleId': (r.get('best_sale') or {}).get('id') if r.get('best_sale') else None,
                                'similarityScore': r.get('similarity_score', 0.0),
                                'reason': r.get('reason', '')
                            } for r in (bluray_results or [])
                        ]
                    }
                    try:
                        print(">>>JSON_START>>>")
                        print(json.dumps(payload, ensure_ascii=False))
                        print(">>>JSON_END>>>")
                    except Exception as je:
                        print(f"JSON 출력 오류: {je}")
                # Spring POST 전송은 제거됨 (service.py의 API를 통해 Pull 방식 사용 권장)
                
                bluray_time = time.time() - bluray_start
                print(f"\n⏱️  Content-based 블루레이 추천 시간: {bluray_time:.3f}초")
                
            except Exception as e:
                print(f"Content-based 블루레이 추천 중 오류 발생: {e}")
                print("영화 추천 결과만 표시됩니다.")
                import traceback
                traceback.print_exc()
                
        else:
            print("추천할 영화가 없습니다.")
            
    except Exception as e:
        print(f"오류 발생: {e}")
    
    print()


if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--user-id", type=int, default=612)
    parser.add_argument("--top-n", type=int, default=20)
    parser.add_argument("--json", action="store_true")
    args = parser.parse_args()
    main(user_id=args.user_id, top_n=args.top_n, json_output=args.json)
