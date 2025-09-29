import { useQuery } from '@tanstack/react-query';
import { runRecommendations, getSale } from '../api/salesAPI';
import { Product } from '../type/product';
import { RecommendationResponse } from '../type/user';

// 타입 정의
export interface ProductWithReason {
  product: Product;
  reason: string | null;
}

// 추천 결과를 Product와 reason으로 변환하는 함수
const convertRecommendationsToProducts = async (
  recommendations: RecommendationResponse,
  token: string
): Promise<ProductWithReason[]> => {
  const results: ProductWithReason[] = [];
  
  for (const item of recommendations.results) {
    if (item.saleId) {
      try {
        const product = await getSale(item.saleId);
        results.push({
          product,
          reason: item.reason || null
        });
      } catch (error) {
        console.warn(`Sale ID ${item.saleId}를 가져올 수 없습니다:`, error);
      }
    }
  }
  
  return results;
};

// 무한 스크롤을 위한 추천상품 훅 (초기 5개 로딩)
export function useInfiniteRecommendations(
  userId: number | null,
  token: string | null
) {
  return useQuery<{ recommendations: RecommendationResponse; productsWithReasons: ProductWithReason[] }, Error>({
    queryKey: ['infiniteRecommendations', userId],
    queryFn: async () => {
      if (!userId || !token) {
        throw new Error('사용자 ID 또는 토큰이 없습니다');
      }
      
      const recommendations = await runRecommendations(userId, token, 5);
      const productsWithReasons = await convertRecommendationsToProducts(recommendations, token);
      
      return {
        recommendations,
        productsWithReasons
      };
    },
    enabled: !!userId && !!token,
    staleTime: 5 * 60 * 1000, // 5분
    gcTime: 10 * 60 * 1000, // 10분
  });
}
