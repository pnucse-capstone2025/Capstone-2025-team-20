import { useSuspenseQuery } from "@tanstack/react-query";
import { Movie } from "../type/product";
import { getMovie } from "../api/movieAPI";


export function usegetMovie(id: number) {
  return useSuspenseQuery<Movie, Error>({
    queryKey: ["getMovie", id],
    queryFn: () => getMovie(id),
  });
}