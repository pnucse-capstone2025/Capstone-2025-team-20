export interface UserToken {
    accessToken: string
}

export interface MeResponse {
  userId: number;
  usernameOrEmail: string;
  username: string;
  email: string;
  role: string;
}

export type RecommendedItem = {
  movieId: number | null;
  movieTitle: string | null;
  saleId: number | null;
  similarityScore: number | null;
  reason: string;                // 예: "4K, Blu-ray, 3D, 35,000원"
};

export type RecommendationResponse = {
  userId: number;
  results: RecommendedItem[];
};