#!/usr/bin/env python3
"""
단일 리뷰(user_id, sales_id)를 영화 평점으로 변환하여 ml-latest-small/ratings.csv에 추가
사용법:
  python append_single_converted_rating.py <user_id> <sales_id>
"""

import sys
import os
import pandas as pd
from datetime import datetime
from bluray_rating_converter import BlurayRatingConverter


def append_single_converted_rating(user_id: int, sales_id: int, ratings_csv_path: str) -> int:
    converter = BlurayRatingConverter(verbose=True)  # verbose 모드로 변경하여 디버깅 정보 출력
    print(f"DEBUG: Converting review for user_id={user_id}, sales_id={sales_id}")
    
    try:
        result = converter.convert_review_to_movie_rating(user_id, sales_id)
        print(f"DEBUG: Conversion result: {result}")
        
        if not result:
            print("변환 실패 또는 데이터 없음")
            print("DEBUG: 가능한 원인:")
            print("1. 데이터베이스에 해당 user_id, sales_id 조합의 리뷰가 없음")
            print("2. 데이터베이스 연결 실패")
            print("3. sales에 연결된 movie_id가 없음")
            return 1
    except Exception as e:
        print(f"ERROR: Exception during conversion: {e}")
        import traceback
        traceback.print_exc()
        return 1

    movie_id = result.get('movie_id')
    converted_rating = result.get('converted_movie_rating')
    ts = int(datetime.utcnow().timestamp())

    # ratings.csv가 없으면 헤더 포함하여 생성
    if not os.path.exists(ratings_csv_path):
        df_new = pd.DataFrame([
            {
                'userId': user_id,
                'movieId': movie_id,
                'rating': converted_rating,
                'timestamp': ts,
            }
        ])
        # 디렉토리 보장
        os.makedirs(os.path.dirname(ratings_csv_path), exist_ok=True)
        df_new.to_csv(ratings_csv_path, index=False)
        print(f"새 ratings.csv 생성 및 1행 추가: {ratings_csv_path}")
        return 0

    # 기존 파일에 안전하게 추가
    try:
        df_existing = pd.read_csv(ratings_csv_path)
    except Exception:
        # 손상된 경우 재생성
        df_existing = pd.DataFrame(columns=['userId','movieId','rating','timestamp'])

    df_append = pd.DataFrame([
        {
            'userId': user_id,
            'movieId': movie_id,
            'rating': converted_rating,
            'timestamp': ts,
        }
    ])

    df_out = pd.concat([df_existing, df_append], ignore_index=True)
    df_out.to_csv(ratings_csv_path, index=False)
    print(f"추가 완료: userId={user_id}, movieId={movie_id}, rating={converted_rating}")
    return 0


def main():
    print("=== append_single_converted_rating.py 시작 ===")
    print(f"Arguments: {sys.argv}")
    
    if len(sys.argv) < 3:
        print("사용법: python append_single_converted_rating.py <user_id> <sales_id> [ratings_csv_path]")
        sys.exit(2)

    try:
        user_id = int(sys.argv[1])
        sales_id = int(sys.argv[2])
        print(f"Parameters: user_id={user_id}, sales_id={sales_id}")
        
        # 기본 경로는 프로젝트의 ml-latest-small/ratings.csv
        ratings_csv_path = sys.argv[3] if len(sys.argv) > 3 else os.path.join('ml-latest-small', 'ratings.csv')
        print(f"Target CSV path: {ratings_csv_path}")

        code = append_single_converted_rating(user_id, sales_id, ratings_csv_path)
        print(f"=== 스크립트 종료 (exit code: {code}) ===")
        sys.exit(code)
    except Exception as e:
        print(f"MAIN ERROR: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)


if __name__ == '__main__':
    main()


