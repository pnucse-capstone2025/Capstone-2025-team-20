import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { getReviewsByUserId, ReviewResponse } from '../api/reviewAPI';
import { getSale } from '../api/salesAPI';
import { Product } from '../type/product';

export interface UserReviewWithProduct {
  review: ReviewResponse;
  product: Product;
}

// 사용자의 리뷰와 해당 상품 정보를 함께 가져오는 함수
const fetchUserReviewsWithProducts = async (
  userId: number,
  token: string
): Promise<UserReviewWithProduct[]> => {
  const reviews = await getReviewsByUserId(userId);
  const reviewsWithProducts: UserReviewWithProduct[] = [];

  for (const review of reviews) {
    if (review.salesId) {
      try {
        const product = await getSale(review.salesId);
        reviewsWithProducts.push({ review, product });
      } catch (error) {
        console.warn(`Sale ID ${review.salesId}를 가져올 수 없습니다:`, error);
      }
    }
  }

  return reviewsWithProducts;
};

// 사용자 리뷰 훅
export function useUserReviews(userId: number, token: string) {
  return useQuery({
    queryKey: ['userReviews', userId],
    queryFn: () => fetchUserReviewsWithProducts(userId, token),
    staleTime: 2 * 60 * 1000, // 2분
    gcTime: 5 * 60 * 1000, // 5분
    enabled: userId > 0 && !!token, // userId가 0보다 크고 token이 있을 때만 쿼리 실행
  });
}


