#!/usr/bin/env python3
import csv
import mysql.connector
import re
from datetime import datetime

# 데이터베이스 연결 설정
config = {
    'user': '?',
    'password': '?',
    'host': '?',
    'database': '?',
    'raise_on_warnings': True
}

def extract_year_from_title(title):
    """제목에서 연도를 추출합니다."""
    match = re.search(r'\((\d{4})\)', title)
    if match:
        year = int(match.group(1))
        clean_title = re.sub(r'\s*\(\d{4}\)', '', title).strip()
        return clean_title, year
    return title, None

def migrate_movies():
    try:
        # 데이터베이스 연결
        cnx = mysql.connector.connect(**config)
        cursor = cnx.cursor()
        
        # movies.csv 파일 읽기
        with open('./dataset/ml-latest-small/movies.csv', 'r', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)
            
            movies_data = []
            genres_data = []
            
            for row in reader:
                movie_id = int(row['movieId'])
                title_with_year = row['title']
                genres_str = row['genres']
                
                # 제목과 연도 분리
                clean_title, year = extract_year_from_title(title_with_year)
                
                # 연도가 있으면 release_date로 변환 (1월 1일로 가정)
                release_date = None
                if year:
                    try:
                        release_date = datetime(year, 1, 1)
                    except ValueError:
                        release_date = None
                
                # movies 테이블에 삽입할 데이터
                # id는 movieId와 동일하게 설정하되, auto_increment를 고려하여 직접 삽입
                movies_data.append((movie_id, clean_title, release_date))
                
                # genres 처리
                if genres_str and genres_str != '(no genres listed)':
                    genre_list = genres_str.split('|')
                    for genre in genre_list:
                        genre = genre.strip()
                        if genre:
                            genres_data.append((movie_id, genre))
            
            print(f"총 {len(movies_data)}개의 영화 데이터를 처리합니다.")
            
            print("영화 데이터 삽입 중...")
            
            # movies 테이블에 데이터 삽입 (원본 movieId를 그대로 사용)
            for i, (movie_id, title, release_date) in enumerate(movies_data):
                if (i + 1) % 1000 == 0:
                    print(f"  {i + 1}/{len(movies_data)} 영화 처리 중...")
                
                insert_movie_query = "INSERT INTO movies (id, title, release_date) VALUES (%s, %s, %s)"
                cursor.execute(insert_movie_query, (movie_id, title, release_date))
            
            print(f"{len(movies_data)}개의 영화가 삽입되었습니다.")
            
            # genres 테이블에 데이터 삽입 (원본 movieId 그대로 사용)
            if genres_data:
                insert_genre_query = """
                INSERT IGNORE INTO genres (movie_id, genre) 
                VALUES (%s, %s)
                """
                cursor.executemany(insert_genre_query, genres_data)
                print(f"{cursor.rowcount}개의 장르 데이터가 삽입되었습니다.")
            
            # 변경사항 커밋
            cnx.commit()
            print("데이터 마이그레이션이 완료되었습니다!")
            
    except mysql.connector.Error as err:
        print(f"데이터베이스 오류: {err}")
        cnx.rollback()
    except Exception as e:
        print(f"오류 발생: {e}")
        cnx.rollback()
    finally:
        if cursor:
            cursor.close()
        if cnx:
            cnx.close()

if __name__ == "__main__":
    migrate_movies()
