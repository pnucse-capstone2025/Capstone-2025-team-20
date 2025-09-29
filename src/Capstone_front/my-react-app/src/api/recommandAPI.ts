
import { RecommendedItem, RecommendationResponse } from "../type/user";
import apiFetch from "./apiFetch";

export async function getRecommendedItem(userId: number, topN = 5): Promise<RecommendationResponse> {
  return await apiFetch("/recommendations/run", {
  method: "POST",
  body: JSON.stringify({ userId, topN }),  // ✅ 문자열로 변환
  headers: { "Content-Type": "application/json" }, // 필수!
});
}