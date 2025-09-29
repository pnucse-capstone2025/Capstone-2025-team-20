package com.example.lapisblue.lapisblue.DTO;

import com.example.lapisblue.lapisblue.domain.Movie;

import java.util.List;

public record PopularMovieResponse(
        Integer movieId,
        String title,
        String director,
        Double averageRating,
        Integer ratingCount,
        Double popularityScore,
        List<SalesResponse> salesInfo
) {
    public static PopularMovieResponse from(Movie movie, Double averageRating, Integer ratingCount, Double popularityScore, List<SalesResponse> salesInfo) {
        return new PopularMovieResponse(
                movie.getId(),
                movie.getTitle(),
                movie.getDirector(),
                averageRating,
                ratingCount,
                popularityScore,
                salesInfo
        );
    }
}
