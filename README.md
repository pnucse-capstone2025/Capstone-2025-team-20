# Blu-ray Recommendation Web Service

## 1. 프로젝트 배경

### 1.1 국내외 시장 현황 및 문제점
- 블루레이는 DVD를 대체하는 고화질 저장 매체로, 수집 가치(화질, 음질, 부가영상, 패키징 등) 때문에 전 세계적으로 활성화되어 있으나 국내에서는 인지도가 낮습니다.
- 현재 국내 블루레이 관련 서비스는 부족하며, 이용자들은 해외 사이트나 여러 판매처를 직접 탐색해야 원하는 정보를 얻을 수 있습니다.
- 기존 판매 사이트들은 단순한 상품 나열 또는 판매량 기반 추천에 그치며, 맞춤형 추천이나 에디션별 체계적 정보 제공이 미흡합니다.

### 1.2 필요성과 기대효과
- 블루레이 접근성 향상 및 국내 시장 활성화 기여
- 웹 크롤링 + LLM 기반 정제를 통해 정형화된 데이터 제공
- 개인화된 추천 시스템으로 탐색 효율성 및 사용자 만족도 증대
- 다양한 에디션, 스펙(4K, 리마스터, 한정판 등)을 통합 제공하여 정보 파편화 문제 해결

## 2. 개발 목표

### 2.1 목표 및 세부 내용
- 블루레이 판매 정보 크롤링 및 정제
- 개인화 추천 알고리즘(행렬분해 + 콘텐츠 기반 필터링) 구현
- 웹 서비스 형태로 사용자 친화적인 UI 제공

### 2.2 기존 서비스 대비 차별성
- 단순 판매 정보 제공 → 개인화 추천 시스템 도입
- 분산된 정보 → 통합된 데이터베이스 구축
- LLM 기반 데이터 정제 및 자동화 → 지속적인 최신 정보 반영

### 2.3 사회적 가치 도입 계획
- 국내 블루레이 시장의 정보 접근성 개선
- 문화 콘텐츠 소비 다양성 확대

## 3. 시스템 설계

### 3.1 시스템 구성도
[Client] → [Nginx Reverse Proxy] → [Spring Boot API] → [MySQL DB] → [Python 추천 모듈 (py-reco)]
  <img width="1508" height="899" alt="image" src="https://github.com/user-attachments/assets/02762976-700d-4805-8bc5-5492fff3c81a" />


### 3.2 사용 기술
- **Frontend:** React (Vite)
- **Backend:** Spring Boot, JPA, MySQL
- **Infra:** Docker, AWS EC2, Nginx Reverse Proxy
- **AI/LLM:** OpenAI GPT-3.5-turbo
- **Crawler:** Python (Requests, BeautifulSoup, ThreadPoolExecutor)

## 4. 개발 결과

### 4.1 전체 시스템 흐름도
- 회원가입/로그인 (JWT 기반)
- 리뷰 혹은 초기 선호영화 설정
- 개인화 추천 실행
- 영화 검색 및 상세 조회
- 블루레이 판매 정보 통합 조회

### 4.2 기능 설명 및 주요 기능 명세서
- **회원 관리:** JWT 기반 인증/인가
- **검색 기능:** 영화/블루레이 통합 검색, 필터링 지원
- **리뷰 기능:** 평점, 코멘트 저장 및 조회
- **추천 기능:** MF + 콘텐츠 기반 하이브리드 추천
- **관리자 기능:** 데이터 임포트 및 추천 실행 관리

### 4.3 디렉토리 구조
```plaintext
root  
 ├── frontend/ (React, Vite)  
 ├── dataset/ (추천알고리즘 및 데이터파일)  
 ├── example/  
   ├── spring-api/ (스프링 API)  
   ├── static (정적 파일)  
   └── docker-compose.yml (도커 실행 파일)  
 ├── files  
 └── README.md
```


### 4.4 산업체 멘토링 의견 및 반영 사항
- 초기: 단순 검색 중심 → 추천 시스템 강화
- 확장성: EC2 + Docker 기반 배포 → 수평 확장성 확보
- 사용자 친화성: UI 개선 및 상세 필터링 기능 추가

## 5. 설치 및 실행 방법

### 5.1 설치절차 및 실행 방법
```bash

# 전체 서비스 (Docker)
docker-compose up -d --build

#무비렌즈 데이터셋
https://github.com/user-attachments/files/22620930/ml-latest-small.zip
해당 파일을 압축 해제해서 아래 위치에 넣기
src/dataset

# 접속 주소
[localhost:static/](http://168.107.44.229:8081/static/)
```
[ml-latest-small.zip](https://github.com/user-attachments/files/22620930/ml-latest-small.zip)

### 5.2 오류 발생 시 해결 방법

- **DB 연결 오류**
  - MySQL 포트(3306)가 열려 있는지 확인
  - `docker-compose` 재실행:
    ```bash
    docker-compose down
    docker-compose up -d --build
    ```
  - 백엔드 `application.yml` 또는 환경변수에서 DB 설정 확인

- **CORS 문제**
  - Nginx 설정에서 프록시 경로 확인
    ```nginx
    location /api/ {
        proxy_pass http://spring-api:8080/api/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
    ```
  - 프론트엔드 요청 URL과 백엔드 엔드포인트 일치 여부 확인

- **포트 충돌**
  - 기본 포트: Backend: 8080, py-reco API: 8000, Web 접속: 8081
  - 필요 시 다른 포트로 변경 후 실행

---

## 6. 소개 자료 및 시연 영상

### 6.1 프로젝트 소개 자료
- [25전기 졸업과제 포스터_라피스블루.pdf](https://github.com/user-attachments/files/22612382/25._.pdf)
- [25전기 캡스톤 발표 자료_라피스 블루.pdf](https://github.com/user-attachments/files/22612387/25._.pdf)




### 6.2 시연 영상
- [2025 전기 졸업과제 20 라피스블루](https://www.youtube.com/watch?v=MDDWl_jW8FQ)

---

## 7. 팀 구성

### 7.1 팀원별 소개 및 역할 분담
- **박덕형:** 벡엔드 개발, 추천 알고리즘(컨텐츠 기반 필터) 구현, MovieLens 데이터셋 처리, 크롤링 대상 사이트 선별 및 정제
- **박태준:** 벡엔드 개발, 추천 알고리즘(행렬분해) 구현,   NGINX 및 서버 인프라 구축, 데이터 베이스 구축
- **안형찬:** 프론트엔드 개발, UI/UX 설계, 데이터 크롤링 및 정제, 프롬프트 엔지니어링 

### 7.2 팀원 별 참여 후기
- 협업을 통한 Git/GitHub 활용 능력 향상
- 대규모 데이터 처리와 API 설계 경험 축적
- 문제 해결 과정에서 LLM 활용 능력 강화

---

## 8. 참고 문헌 및 출처
- Bellman, R. Introduction to Matrix Analysis. McGraw-Hill, 1970.
- MovieLens Dataset
- Yes24, Aladin, Kyobo Bookstore 블루레이 상품 페이지
