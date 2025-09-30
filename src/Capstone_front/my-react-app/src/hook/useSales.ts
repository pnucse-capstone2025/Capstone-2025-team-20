// src/hooks/useSales.ts
import { useSuspenseQuery, useQuery } from "@tanstack/react-query";
import { getSale, listSales, searchSales } from "../api/salesAPI";
import { PopularMovie, Product } from "../type/product";
import { getPopularMovies } from "../api/movieAPI";

export function useListSales(limit?: number) {
  return useSuspenseQuery<Product[], Error>({
    queryKey: ["listSales", limit],
    queryFn: () => listSales(limit),
  });
}

export function useGetSale(id: number) {
  return useSuspenseQuery<Product, Error>({
    queryKey: ["getSale", id],
    queryFn: () => getSale(id),
  });
}

export function useSearchSale(query: string) {
  return useQuery<Product[], Error>({
    queryKey: ["SearchSale", query],
    queryFn: () => searchSales(query),
    enabled: query.trim().length > 0,
    staleTime: 5 * 60 * 1000,
  });
}

export function usePopularSales(limit?: number) {
  return useSuspenseQuery<Product[], Error>({
    queryKey: ["PopularSales", limit],
    queryFn: async () => {
      const popularMovies = await getPopularMovies(limit);
      // PopularMovie salesInfo 를 추출
      const allProducts = popularMovies.flatMap(movie => movie.salesInfo);
      return allProducts;
    },
    staleTime: 5 * 60 * 1000, // 5분간 캐시 유지
  });
}

// 무한 스크롤을 위한 훅
export function useInfinitePopularSales(_initialLimit: number = 20) {
  return useSuspenseQuery<Product[], Error>({
    queryKey: ["InfinitePopularSales"],
    queryFn: async () => {
      // 더 많은 영화를 가져와서 충분한 데이터 확보
      const popularMovies = await getPopularMovies(100);
      // PopularMovie salesInfo 를 추출
      const allProducts = popularMovies.flatMap(movie => movie.salesInfo);
      return allProducts;
    },
    staleTime: 5 * 60 * 1000, // 5분간 캐시 유지
  });
}
