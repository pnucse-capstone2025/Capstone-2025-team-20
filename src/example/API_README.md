## API Usage (JavaScript)

### Base
- **Base URL**: same-origin behind Nginx at `/api` (e.g., `/api/login`). If calling the Spring app directly: `http://localhost:8080/api/...`.
- **Auth**: Bearer JWT in `Authorization` header. `me`는 토큰 필요, `movies`는 공개.

### Small helper
```javascript
const BASE = '/api';

async function apiFetch(path, { method = 'GET', body, token } = {}) {
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  const maybeJson = text ? (() => { try { return JSON.parse(text); } catch { return text; } })() : null;
  if (!res.ok) {
    const message = typeof maybeJson === 'string' ? maybeJson : (maybeJson?.message || res.statusText);
    throw new Error(`${res.status} ${message}`);
  }
  return maybeJson;
}
```

### 1) Login
- POST `/api/login`
- Body: `{ usernameOrEmail: string, password: string }`
- 200: `{ accessToken: string }` / 401: empty body

```javascript
async function login(usernameOrEmail, password) {
  const data = await apiFetch('/login', {
    method: 'POST',
    body: { usernameOrEmail, password }
  });
  return data.accessToken; // JWT
}
```

### 2) Signup
- POST `/api/signup`
- Body: `{ username: string, email: string, password: string }`
- 200: "회원가입 성공" (text) / 400: error message (text)

```javascript
async function signup({ username, email, password }) {
  const result = await apiFetch('/signup', {
    method: 'POST',
    body: { username, email, password }
  });
  return result; // string
}
```

### 3) Me
- GET `/api/me`
- Header: `Authorization: Bearer <token>`
- 200: `{ userId, usernameOrEmail, username, email, role }`
- 401: "Missing Authorization header" | "Invalid token" | "User not found"

```javascript
async function getMe(token) {
  return await apiFetch('/me', { token });
}
```

### 4) Movies
DTO shape
```ts
type MovieResponse = {
  id: number;
  title: string;
  director: string;
  releaseDate: string;           // ISO LocalDateTime
  productionCompany: string;
  distributionCompany: string;
  runningTime: string;           // ISO LocalTime (e.g., "01:45:00")
};
```

- List: GET `/api/movies` → `MovieResponse[]`
```javascript
async function listMovies() {
  return await apiFetch('/movies');
}
```

- Detail: GET `/api/movies/{id}` → `MovieResponse` or 404
```javascript
async function getMovie(id) {
  return await apiFetch(`/movies/${id}`);
}
```

- Search: GET `/api/movies/search?query=...` → `MovieResponse[]`
```javascript
async function searchMovies(query) {
  const qs = new URLSearchParams({ query }).toString();
  return await apiFetch(`/movies/search?${qs}`);
}
```

### Popular Movies (인기순)
ratings.csv 데이터를 기반으로 인기순으로 정렬된 영화 목록과 해당 블루레이 판매 정보를 반환합니다.

DTO shape
```ts
type PopularMovieResponse = {
  movieId: number;
  title: string;
  director: string | null;
  averageRating: number;           // ratings.csv 기반 평균 평점
  ratingCount: number;             // 평점 개수
  popularityScore: number;         // 인기 점수 (평균평점 × log(평점개수 + 1))
  salesInfo: SalesResponse[];      // 해당 영화의 블루레이 판매 정보 (최저가 1개)
};
```

- Popular: GET `/api/movies/popular?limit=...` → `PopularMovieResponse[]`
```javascript
async function getPopularMovies(limit = 20) {
  const qs = limit ? `?limit=${encodeURIComponent(limit)}` : '';
  return await apiFetch(`/movies/popular${qs}`);
}
```

**특징:**
- 인기 점수 = `평균평점 × log(평점개수 + 1)`으로 계산
- 최소 10개 이상의 평점이 있는 영화만 포함
- 각 영화마다 가장 저렴한 블루레이 1개의 판매 정보 포함
- ratings.csv 파일의 실제 평점 데이터 기반

### Example flow
```javascript
(async () => {
  const token = await login('alice@example.com', 'secret123');
  const me = await getMe(token);
  const movies = await listMovies();
  const popularMovies = await getPopularMovies(10); // 인기 영화 상위 10개
  
  // 인기 영화 사용 예시
  popularMovies.forEach(movie => {
    console.log(`${movie.title}: ⭐${movie.averageRating.toFixed(1)} (${movie.ratingCount}명)`);
    if (movie.salesInfo.length > 0) {
      const sale = movie.salesInfo[0];
      console.log(`📀 ${sale.blurayTitle} - ${sale.price?.toLocaleString()}원 (${sale.siteName})`);
    }
  });
})();
```

### Notes
- Cross-origin에서 직접 호출 시 `BASE`를 `http://localhost:8080/api`처럼 API 오리진으로 설정.
- 시간 파싱 예시:
```javascript
const runMinutes = (t) => {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
};
```
- 토큰은 메모리 또는 `localStorage` 등에 보관 후 필요한 요청에만 첨부.

## Sales

### 엔드포인트
- GET `/api/sales?limit=<number>` → 판매 목록
- GET `/api/sales/{id}` → 판매 단건
- GET `/api/sales/search?query=<movieTitle>` → 영화 제목으로 판매 검색

### 응답 타입 (SalesResponse)
```ts
type SalesResponse = {
  id: number;
  movieId: number | null;
  siteName: string | null;          // yes24 | aladin | kyobo
  siteUrl: string | null;           // 외부 구매 링크
  price: number | null;             // 원화 정수
  quality: string | null;           // 한 글자 등급(ex. A/B 등)
  regionCode: string | null;        // 리전 코드(단일 문자)
  isLimitedEdition: boolean | null; // 한정판 여부
  imageLink: string | null;         // 상품 이미지 URL
  blurayTitle: string | null;       // 판매 타이틀(노출용)
};
```

### 사용 예시
```javascript
// 목록
async function listSales(limit) {
  const qs = limit ? `?limit=${encodeURIComponent(limit)}` : '';
  return await apiFetch(`/sales${qs}`);
}

// 단건
async function getSale(id) {
  return await apiFetch(`/sales/${id}`);
}

// 검색 (영화 제목 기준 부분일치)
async function searchSalesByMovieTitle(query) {
  const qs = new URLSearchParams({ query }).toString();
  return await apiFetch(`/sales/search?${qs}`);
}
```

### 비고
- 검색은 영화 제목(`movie.title`)에 대해 대소문자 무시 부분일치로 동작합니다.
- 목록은 `limit`로 상한을 줄 수 있습니다.
- 리스트 UI 노출 시에는 `blurayTitle`이 있으면 이를 우선적으로 제목으로 사용하세요. 이미지가 있으면 `imageLink`를 썸네일로 사용할 수 있습니다.


## Recommendations

### 개요
- 추천은 DB 저장 없이 실시간으로 생성한 결과를 반환합니다.
- 호출 흐름: 클라이언트 → `POST /api/recommendations/run` (Spring) → Spring이 파이썬 서비스(py-reco)의 `GET /run?userId&topN`을 호출 → JSON 결과를 그대로 반환.

### 엔드포인트 (Spring)
- POST `/api/recommendations/run`
  - Header: `Authorization: Bearer <token>`
  - Body: `{ userId: number, topN?: number }` (topN 기본값 20)
  - 200: 아래 JSON 페이로드
  - 401: 인증 실패
  - 500: 내부 오류(파이썬 서비스 오류 포함)

응답 스키마
```ts
type RecommendationRunResponse = {
  userId: number;
  results: Array<{
    movieId: number | null;
    movieTitle: string | null;
    saleId: number | null;
    similarityScore: number | null;
    reason: string;                // 예: "4K, Blu-ray, 3D, 35,000원"
  }>;
};
```

### 파이썬 서비스(py-reco)
- GET `/run?userId=<id>&topN=<n>`
  - 내부에서 `recommender.py`의 JSON 출력 루틴을 재사용해 안정적인 JSON을 반환합니다.
  - 직접 호출이 필요한 경우(로컬 테스트): `http://<py-reco-host>:8000/run?userId=612&topN=5`

### 사용 예시 (프런트)
```javascript
async function runRecommendations(userId, token, topN = 5) {
  return await apiFetch('/recommendations/run', {
    method: 'POST',
    token,
    body: { userId, topN }
  });
}

// 응답 처리 예시
(async () => {
  const token = localStorage.getItem('accessToken');
  const userId = Number(localStorage.getItem('userId')) || 612;
  const payload = await runRecommendations(userId, token, 5);
  const list = payload.results || [];
  // list[0]?.reason, list[0]?.saleId 등으로 UI 업데이트
})();
```

### 주의사항
- 인증 프록시(Nginx) 사용 시 `Authorization` 헤더 전달 설정 필요.
- Docker 구성에서는 Spring이 `PY_RECO_BASE`를 통해 py-reco를 호출합니다(기본 `http://py-reco:8000`).


## Reviews

### 개요
- 사용자가 블루레이 판매 아이템(sales)에 대해 평점과 코멘트를 남깁니다.
- 평점은 0.5 ~ 5.0 범위, 0.5 간격의 실수입니다.

### 엔드포인트
- POST `/api/reviews`
  - Header: `Authorization: Bearer <token>` (필수)
  - Body(JSON):
    ```json
    {
      "salesId": 123,
      "rating": 4.5,
      "reviewComment": "아트웍 좋고 화질 만족"
    }
    ```
    - `userId`는 토큰에서 추출되어 서버에서 자동 매핑됩니다.
  - 응답: 200 OK (empty body)
  - 오류: 401(인증 실패), 400(잘못된 입력), 500(서버 오류)

- GET `/api/reviews?salesId=<id>`
  - 특정 판매 아이템에 대한 리뷰 목록
  - 응답 타입: `ReviewResponse[]`

- GET `/api/reviews?userId=<id>`
  - 특정 사용자의 리뷰 목록
  - 응답 타입: `ReviewResponse[]`

### 응답 타입 (ReviewResponse)
```ts
type ReviewResponse = {
  userId: number | null;
  username: string | null;    // salesId로 조회 시 username 매핑됨
  salesId: number | null;
  rating: number | null;      // 0.5 ~ 5.0
  reviewComment: string | null;
  createdAt: string | null;   // ISO-8601
};
```

### 사용 예시
```javascript
// 등록
async function submitReview({ token, salesId, rating, reviewComment }) {
  return await apiFetch('/reviews', {
    method: 'POST',
    token,
    body: { salesId, rating, reviewComment }
  });
}

// 판매 아이템 리뷰 조회
async function listReviewsBySalesId(salesId) {
  return await apiFetch(`/reviews?salesId=${encodeURIComponent(salesId)}`);
}

// 사용자 리뷰 조회
async function listReviewsByUserId(userId) {
  return await apiFetch(`/reviews?userId=${encodeURIComponent(userId)}`);
}
```

### 검증/제약
- POST `/api/reviews`:
  - `salesId`와 `rating`은 필수
  - `rating` 범위: 0.0 ≤ rating ≤ 5.0 (권장: 0.5 간격)
  - 동일 `(userId, salesId)`에 대해 재호출 시 업데이트 동작(upsert)


