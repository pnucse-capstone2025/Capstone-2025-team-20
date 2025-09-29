# MovieLens 데이터셋 사용 가이드

이 폴더는 MovieLens 추천 시스템 프로젝트에서 사용하는 데이터셋을 저장하는 곳입니다.

## 📥 데이터셋 다운로드

### 1. MovieLens 데이터셋 다운로드

1. [MovieLens 데이터셋 페이지](https://grouplens.org/datasets/movielens/)에 접속
2. **ml-latest-small.zip** 파일 다운로드
3. 압축을 해제하여 `ml-latest-small/` 폴더에 저장

```bash
# 현재 위치: /Users/ptj/Documents/Capstone/dataset/
# ml-latest-small.zip 파일을 이 폴더에 다운로드 후 압축 해제
unzip ml-latest-small.zip
```

### 2. 폴더 구조 확인

다운로드 후 다음과 같은 구조가 되어야 합니다:

```
dataset/
├── ml-latest-small/
│   ├── movies.csv           # 영화 정보 (9,742개 영화)
│   ├── ratings.csv          # 사용자 평점 데이터 (100,836개 평점)
│   ├── tags.csv             # 태그 데이터 (3,683개 태그)
│   ├── links.csv            # 외부 링크 정보
│   └── README.txt           # 데이터셋 상세 설명
└── README.md                # 이 파일
```

## 📊 데이터셋 정보

### 기본 통계
- **사용자 수**: 610명
- **영화 수**: 9,742개
- **평점 수**: 100,836개
- **태그 수**: 3,683개
- **평점 범위**: 0.5 ~ 5.0 (0.5 단위)
- **기간**: 1996년 3월 ~ 2018년 9월

### 파일별 설명

#### movies.csv
- **컬럼**: movieId, title, genres
- **내용**: 영화 ID, 제목, 장르 정보
- **장르**: Action, Adventure, Animation, Children's, Comedy, Crime, Documentary, Drama, Fantasy, Film-Noir, Horror, Musical, Mystery, Romance, Sci-Fi, Thriller, War, Western

#### ratings.csv
- **컬럼**: userId, movieId, rating, timestamp
- **내용**: 사용자 ID, 영화 ID, 평점, 타임스탬프
- **평점**: 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0

#### tags.csv
- **컬럼**: userId, movieId, tag, timestamp
- **내용**: 사용자가 생성한 영화 태그
- **예시**: "funny", "classic", "horror", "romance"

#### links.csv
- **컬럼**: movieId, imdbId, tmdbId
- **내용**: IMDB, TMDB 외부 링크 정보

## 🚀 코드 실행

데이터셋이 준비되면 다음 명령어로 추천 시스템을 실행할 수 있습니다:

```bash
# 프로젝트 루트 디렉토리에서
python user_based_collaborative_filtering.py
```

## ⚠️ 주의사항

1. **데이터셋 크기**: ml-latest-small는 개발용 데이터셋입니다
2. **라이선스**: 연구 목적으로만 사용 가능 (상업적 사용 금지)
3. **데이터 정확성**: 데이터의 정확성을 보장하지 않음
4. **버전**: 데이터셋이 시간에 따라 변경될 수 있음

## 📚 참고 자료

- [MovieLens 공식 페이지](https://grouplens.org/datasets/movielens/)
- [데이터셋 상세 설명](https://files.grouplens.org/datasets/movielens/ml-latest-small-README.html)
- [GroupLens 연구 그룹](https://grouplens.org/)

## 🔧 문제 해결

### 데이터셋을 찾을 수 없다는 오류가 발생하는 경우
1. `ml-latest-small` 폴더가 `dataset/` 폴더 안에 있는지 확인
2. 파일명이 정확한지 확인 (대소문자 구분)
3. 파일 권한 확인

### 메모리 부족 오류가 발생하는 경우
1. 더 작은 데이터셋 사용 고려
2. 코드에서 데이터 샘플링 적용
3. 시스템 메모리 확인

---

**참고**: 이 데이터셋은 교육 및 연구 목적으로만 사용되어야 하며, 상업적 목적으로 사용할 수 없습니다.
