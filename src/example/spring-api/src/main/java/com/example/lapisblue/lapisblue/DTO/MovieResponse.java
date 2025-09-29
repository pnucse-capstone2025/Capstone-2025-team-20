package com.example.lapisblue.lapisblue.DTO;

import com.example.lapisblue.lapisblue.domain.Movie;

import java.time.LocalDateTime;
import java.time.LocalTime;

public record MovieResponse(
        Integer id,
        String title,
        String director,
        LocalDateTime releaseDate,
        String productionCompany,
        String distributionCompany,
        LocalTime runningTime
) {
    public static MovieResponse from(Movie movie) {
        return new MovieResponse(
                movie.getId(),
                movie.getTitle(),
                movie.getDirector(),
                movie.getReleaseDate(),
                movie.getProductionCompany(),
                movie.getDistributionCompany(),
                movie.getRunningTime()
        );
    }
}
