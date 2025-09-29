import { Movie, PopularMovie } from "../type/product";
import apiFetch from "./apiFetch";

export async function listMovies(): Promise<Movie[]> {
  return await apiFetch("/movies");
}

export async function getMovie(id : number) : Promise<Movie> {
  return await apiFetch(`/movies/${id}`);
}


export async function searchMovies(query : string) {
  const qs = new URLSearchParams({ query }).toString();
  return await apiFetch(`/movies/search?${qs}`);
}

// 인기순 API
export async function getPopularMovies(limit: number = 10): Promise<PopularMovie[]> {
  return await apiFetch(`/movies/popular?limit=${limit}`);
}