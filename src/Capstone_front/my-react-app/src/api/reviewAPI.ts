import apiFetch from "./apiFetch";

export interface ReviewRequest {
  salesId: number;
  rating: number;
  reviewComment?: string | null;
}

export interface ReviewResponse {
  userId: number | null;
  username: string | null;
  salesId: number | null;
  rating: number | null;
  reviewComment: string | null;
  createdAt: string | null;
}

// 리뷰 등록
export async function submitReview(review: ReviewRequest, token: string): Promise<void> {
  try {
    const response = await fetch('/api/reviews', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`서버 에러 (${response.status}): ${errorText}`);
    }

    // 응답 본문이 비어있을 수 있으므로 안전하게 처리
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const text = await response.text();
      if (text.trim()) {
        return JSON.parse(text);
      }
    }
    
    return;
  } catch (error) {
    throw error;
  }
}

// 특정 판매 아이템의 리뷰 목록 조회
export async function getReviewsBySalesId(salesId: number): Promise<ReviewResponse[]> {
  return await apiFetch(`/reviews?salesId=${encodeURIComponent(salesId)}`);
}

// 특정 사용자의 리뷰 목록 조회
export async function getReviewsByUserId(userId: number): Promise<ReviewResponse[]> {
  return await apiFetch(`/reviews?userId=${encodeURIComponent(userId)}`);
}
