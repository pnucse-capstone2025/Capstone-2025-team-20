[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/nRcUn8vA)
# Template for Capstone
이 레파지토리는 학생들이 캡스톤 프로젝트 결과물을 위한 레파지토리 생성시에 참고할 내용들을 담고 있습니다.
1. 레파지토리 생성
2. 레파지토리 구성
3. 레파지토리 제출 
4. README.md 가이드라인
5. README.md 작성팁

---

## 1. 레파지토리 생성
- [https://classroom.github.com/a/nRcUn8vA](https://classroom.github.com/a/nRcUn8vA)
- 위 Github Classroom 링크에 접속해 본인 조의 github 레파지토리를 생성하세요.

<img width="700" alt="깃헙 클래스룸 레포 생성" src="https://github.com/user-attachments/assets/34ca1f43-c2cd-4880-a39e-0dafd889c35f" />

- 레포지토리 생성 시 팀명은 `TEAM-{조 번호}` 형식으로 생성하세요.
- 예를 들어, 2025년도 3조의 팀명은 `TEAM-03` 입니다.
- 이 경우 `Capstone2025-team-03`이란 이름으로 레파지토리가 생성됩니다.

---

## 2. 레파지토리 구성
- 레파지토리 내에 README.md 파일 생성하고 아래의 가이드라인과 작성팁을 참고하여 README.md 파일을 작성하세요. (이 레파지토리의 SAMPLE_README.md 참조)
- 레파지토리 내에 docs 디렉토리를 생성하고 docs 디렉토리 내에는 과제 수행 하면서 작성한 각종 보고서, 발표자료를 올려둡니다. (이 레파지토리의 docs 디렉토리 참조)
- 그 밖에 레파지토리의 폴더 구성은 과제 결과물에 따라 자유롭게 구성하되 가급적 코드의 목적이나 기능에 따라 디렉토리를 나누어 구성하세요.

---

## 3. 레파지토리 제출 

- **`[주의]` 레파지토리 제출**은 해당 레파지토리의 ownership을 **학과 계정**으로 넘기는 것이므로 되돌릴 수 없습니다.
- **레파지토리 제출** 전, 더 이상 수정 사항이 없는지 다시 한번 확인하세요.
- github 레파지토리에서 Settings > General > Danger zone > Transfer 클릭
  <img src="https://github.com/user-attachments/assets/cb2361d4-e07e-4b5d-9116-aa80dddd8a8b" alt="소유주 변경 경로" width="500" />
  
- [ Specify an organization or username ]에 'PNUCSE'를 입력하고 확인 메세지를 입력하세요.
  <img src="https://github.com/user-attachments/assets/7c63955d-dcfe-4ac3-bdb6-7d2620575f3a" alt="소유주 변경" width="400" />

---

## 4. README.md 가이드 라인
- README 파일 작성시에 아래의 5가지 항목의 내용은 필수적으로 포함해야 합니다.
- 아래의 항목이외에 프로젝트의 이해를 돕기 위한 내용을 추가해도 됩니다.
- SAMPLE_README.md 이 단순한 형태의 예제이니 참고하세요.

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
[Client] → [Nginx Reverse Proxy] → [Spring Boot API] → [MySQL DB]
↘ [Python 추천 모듈 (py-reco)]
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
root
├── frontend/ (React, Vite)
├── backend/ (Spring Boot)
├── py-reco/ (추천 알고리즘 모듈)
├── docker-compose.yml
└── README.md


### 4.4 산업체 멘토링 의견 및 반영 사항
- 초기: 단순 검색 중심 → 추천 시스템 강화
- 확장성: EC2 + Docker 기반 배포 → 수평 확장성 확보
- 사용자 친화성: UI 개선 및 상세 필터링 기능 추가

## 5. 설치 및 실행 방법

### 5.1 설치절차 및 실행 방법
```bash
# 프론트엔드 실행
npm install
npm run dev

# 백엔드 실행
cd backen
./mvnw spring-boot:run

# 추천 모듈 실행
cd py-reco
python app.py

# 전체 서비스 (Docker)
docker-compose up -d
```

### 5.2 오류 발생 시 해결 방법

- **DB 연결 오류**
  - MySQL 포트(3306)가 열려 있는지 확인
  - `docker-compose` 재실행:
    ```bash
    docker-compose down
    docker-compose up -d
    ```
  - 백엔드 `application.yml` 또는 환경변수에서 DB 설정 확인

- **LLM API 에러**
  - OpenAI API Key가 올바르게 설정되어 있는지 확인
    ```bash
    export OPENAI_API_KEY="your_api_key_here"
    ```
  - 추천 모듈(py-reco) 실행 시 환경변수 적용 여부 확인

- **CORS 문제**
  - Nginx 설정에서 프록시 경로 확인
    ```nginx
    location /api/ {
        proxy_pass http://backend:8080/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
    ```
  - 프론트엔드 요청 URL과 백엔드 엔드포인트 일치 여부 확인

- **포트 충돌**
  - 기본 포트: Frontend: 3000, Backend: 8080, Reco API: 8000
  - 필요 시 다른 포트로 변경 후 실행
    ```bash
    # 예: 프론트엔드 포트 변경
    npm run dev -- --port 3001
    ```

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
- Bellman, R. Introduction to Matrix Analysis. McGraw-Hill, 1979.
- Park, K. et al. "Analysis of Delay-Bandwidth Normalization..." Journal of KIISE, 2007.
- MovieLens Dataset
- Yes24, Aladin, Kyobo Bookstore 블루레이 상품 페이지


```markdown
### 1. 프로젝트 배경
#### 1.1. 국내외 시장 현황 및 문제점
> 시장 조사 및 기존 문제점 서술

#### 1.2. 필요성과 기대효과
> 왜 이 프로젝트가 필요한지, 기대되는 효과 등

### 2. 개발 목표
#### 2.1. 목표 및 세부 내용
> 전체적인 개발 목표, 주요 기능 및 기획 내용

#### 2.2. 기존 서비스 대비 차별성 
> 유사 서비스 비교 및 차별점 부각

#### 2.3. 사회적 가치 도입 계획 
> 프로젝트의 공공성, 지속 가능성, 환경 보호 등
### 3. 시스템 설계
#### 3.1. 시스템 구성도
> 이미지 혹은 텍스트로 시스템 아키텍쳐 작성
>
#### 3.2. 사용 기술
> 프론트엔드, 백엔드, API 등 구체 기술 스택

### 4. 개발 결과
#### 4.1. 전체 시스템 흐름도
> 기능 흐름 설명 및 도식화 가능
>
#### 4.2. 기능 설명 및 주요 기능 명세서
> 주요 기능에 대한 상세 설명, 각 기능의 입력/출력 및 설명
>
#### 4.3. 디렉토리 구조
>
#### 4.4. 산업체 멘토링 의견 및 반영 사항
> 멘토 피드백과 적용한 사례 정리

### 5. 설치 및 실행 방법
>
#### 5.1. 설치절차 및 실행 방법
> 설치 명령어 및 준비 사항, 실행 명령어, 포트 정보 등
#### 5.2. 오류 발생 시 해결 방법
> 선택 사항, 자주 발생하는 오류 및 해결책 등

### 6. 소개 자료 및 시연 영상
#### 6.1. 프로젝트 소개 자료
> PPT 등
#### 6.2. 시연 영상
> 영상 링크 또는 주요 장면 설명

### 7. 팀 구성
#### 7.1. 팀원별 소개 및 역할 분담
>
#### 7.2. 팀원 별 참여 후기
> 개별적으로 느낀 점, 협업, 기술적 어려움 극복 사례 등

### 8. 참고 문헌 및 출처

```

## 5. README.md 작성팁 
* 마크다운 언어를 이용해 README.md 파일을 작성할 때 참고할 수 있는 마크다운 언어 문법을 공유합니다.  
* 다양한 예제와 보다 자세한 문법은 [이 문서](https://www.markdownguide.org/basic-syntax/)를 참고하세요.

### 5.1. 헤더 Header
```
# This is a Header 1
## This is a Header 2
### This is a Header 3
#### This is a Header 4
##### This is a Header 5
###### This is a Header 6
####### This is a Header 7 은 지원되지 않습니다.
```
<br />

### 5.2. 인용문 BlockQuote
```
> This is a first blockqute.
>	> This is a second blockqute.
>	>	> This is a third blockqute.
```
> This is a first blockqute.
>	> This is a second blockqute.
>	>	> This is a third blockqute.
<br />

### 5.3. 목록 List
* **Ordered List**
```
1. first
2. second
3. third  
```
1. first
2. second
3. third
<br />

* **Unordered List**
```
* 하나
  * 둘

+ 하나
  + 둘

- 하나
  - 둘
```
* 하나
  * 둘

+ 하나
  + 둘

- 하나
  - 둘
<br />

### 5.4. 코드 CodeBlock
* 코드 블럭 이용 '``'
```
여러줄 주석 "```" 이용
"```
#include <stdio.h>
int main(void){
  printf("Hello world!");
  return 0;
}
```"

단어 주석 "`" 이용
"`Hello world`"

* 큰 따움표(") 없이 사용하세요.
``` 
<br />

### 5.5. 링크 Link
```
[Title](link)
[부산대학교 정보컴퓨터공학부](https://cse.pusan.ac.kr/cse/index..do)

<link>
<https://cse.pusan.ac.kr/cse/index..do>
``` 
[부산대학교 정보컴퓨터공학부](https://cse.pusan.ac.kr/cse/index..do)

<https://cse.pusan.ac.kr/cse/index..do>
<br />

### 5.6. 강조 Highlighting
```
*single asterisks*
_single underscores_
**double asterisks**
__double underscores__
~~cancelline~~
```
*single asterisks* <br />
_single underscores_ <br />
**double asterisks** <br />
__double underscores__ <br />
~~cancelline~~  <br />
<br />

### 5.7. 이미지 Image
```
<img src="image URL" width="600px" title="Title" alt="Alt text"></img>
![Alt text](image URL "Optional title")
```
- 웹에서 작성한다면 README.md 내용 안으로 이미지를 드래그 앤 드롭하면 이미지가 생성됩니다.
- 웹이 아닌 로컬에서 작성한다면, github issue에 이미지를 드래그 앤 드롭하여 image url 을 얻을 수 있습니다. (URL만 복사하고 issue는 제출 안 함.)
  <img src="https://github.com/user-attachments/assets/0fe3bff1-7a2b-4df3-b230-cac4ef5f6d0b" alt="이슈에 image 올림" width="600" />
  <img src="https://github.com/user-attachments/assets/251c6d42-b36b-4ad4-9cfa-fa2cc67a9a50" alt="image url 복사" width="600" />


### 5.8. 유튜브 영상 추가
```markdown
[![영상 이름](유튜브 영상 썸네일 URL)](유튜브 영상 URL)
[![부산대학교 정보컴퓨터공학부 소개](http://img.youtube.com/vi/zh_gQ_lmLqE/0.jpg)](https://www.youtube.com/watch?v=zh_gQ_lmLqE)    
```
[![부산대학교 정보컴퓨터공학부 소개](http://img.youtube.com/vi/zh_gQ_lmLqE/0.jpg)](https://www.youtube.com/watch?v=zh_gQ_lmLqE)    

- 이때 유튜브 영상 썸네일 URL은 유투브 영상 URL로부터 다음과 같이 얻을 수 있습니다.

- `Youtube URL`: https://www.youtube.com/watch?v={동영상 ID}
- `Youtube Thumbnail URL`: http://img.youtube.com/vi/{동영상 ID}/0.jpg 
- 예를 들어, https://www.youtube.com/watch?v=zh_gQ_lmLqE 라고 하면 썸네일의 주소는 http://img.youtube.com/vi/zh_gQ_lmLqE/0.jpg 이다.

