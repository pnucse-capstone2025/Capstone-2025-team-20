import { Product } from "../type/product";
import apiFetch from "./apiFetch";

export async function listSales(limit?: number): Promise<Product[]> {
  const qs = limit ? `?limit=${encodeURIComponent(limit)}` : "";
  return await apiFetch(`/sales${qs}`);
}

export async function getSale(id: number): Promise<Product> {
  return await apiFetch(`/sales/${id}`);
}

export async function searchSales(query: string): Promise<Product[]> {
  const qs = new URLSearchParams({ query }).toString();
  return await apiFetch(`/sales/search?${qs}`);
}



// 추천 API
export async function runRecommendations(userId: number, token: string, topN: number = 5) {
  try {
    const response = await fetch('/api/recommendations/run', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ userId, topN })
    });
    
    if (!response.ok) {
      throw new Error(`추천 API 오류: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('추천 API 호출 실패:', error);
    throw error;
  }
}

