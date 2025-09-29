import { useSuspenseQuery } from "@tanstack/react-query";
import { RecommendedItem } from "../type/user";
import { getRecommendedItem } from "../api/recommandAPI.ts";

async function fetchRecommendedSaleIds(userId: number, topN = 10): Promise<number[]> {
  const recommended: RecommendedItem = await getRecommendedItem(userId, topN);

  // saleId만 추출
  const saleIds = recommended.results
    .map((r) => r.saleId)
    .filter((id): id is number => id !== null);

  return saleIds;
}

// React Query hook 예시
export function useRecommendedSaleIds(userId: number, topN = 10) {
  return useSuspenseQuery<number[], Error>({
    queryKey: ["recommendedSaleIds", userId, topN],
    queryFn: () => fetchRecommendedSaleIds(userId, topN),
  });
}
