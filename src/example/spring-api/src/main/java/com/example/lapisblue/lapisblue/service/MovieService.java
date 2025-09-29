package com.example.lapisblue.lapisblue.service;

import com.example.lapisblue.lapisblue.domain.Movie;
import com.example.lapisblue.lapisblue.repository.MovieRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MovieService {

    private final MovieRepository movieRepository;

    @Transactional(readOnly = true)
    public List<Movie> findAll() {
        return movieRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Movie findById(Integer id) {
        return movieRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Movie not found: " + id));
    }

    @Transactional(readOnly = true)
    public Movie findWithAllById(Integer id) {
        return movieRepository.findWithAllById(id)
                .orElseThrow(() -> new IllegalArgumentException("Movie not found: " + id));
    }

    @Transactional(readOnly = true)
    public Movie findByTitle(String title) {
        return movieRepository.findByTitle(title)
                .orElseThrow(() -> new IllegalArgumentException("Movie not found: " + title));
    }

    @Transactional(readOnly = true)
    public List<Movie> searchByTitle(String query) {
        return movieRepository.findByTitleContainingIgnoreCase(query);
    }

    public static class MoviePopularity {
        public final Integer movieId;
        public final Double averageRating;
        public final Integer ratingCount;
        public final Double popularityScore;

        public MoviePopularity(Integer movieId, Double averageRating, Integer ratingCount) {
            this.movieId = movieId;
            this.averageRating = averageRating;
            this.ratingCount = ratingCount;
            // 인기 점수 = 평균평점 * log(평점개수 + 1)
            this.popularityScore = averageRating * Math.log(ratingCount + 1);
        }
    }

    public List<MoviePopularity> getPopularMoviesFromRatings(int limit) {
        String ratingsFilePath = "/data/ratings.csv";
        Map<Integer, List<Double>> movieRatings = new HashMap<>();
        
        try (BufferedReader br = new BufferedReader(new FileReader(ratingsFilePath))) {
            String line;
            boolean isFirstLine = true;
            
            while ((line = br.readLine()) != null) {
                if (isFirstLine) {
                    isFirstLine = false;
                    continue; // 헤더 스킵
                }
                
                String[] parts = line.split(",");
                if (parts.length >= 3) {
                    try {
                        Integer movieId = Integer.parseInt(parts[1]);
                        Double rating = Double.parseDouble(parts[2]);
                        
                        movieRatings.computeIfAbsent(movieId, k -> new ArrayList<>()).add(rating);
                    } catch (NumberFormatException e) {
                        // 잘못된 데이터 무시
                        continue;
                    }
                }
            }
        } catch (IOException e) {
            throw new RuntimeException("Failed to read ratings file", e);
        }
        
        // 각 영화의 평균 평점과 평점 개수 계산
        List<MoviePopularity> popularities = movieRatings.entrySet().stream()
                .filter(entry -> entry.getValue().size() >= 10) // 최소 10개 이상의 평점
                .map(entry -> {
                    Integer movieId = entry.getKey();
                    List<Double> ratings = entry.getValue();
                    Double averageRating = ratings.stream()
                            .mapToDouble(Double::doubleValue)
                            .average()
                            .orElse(0.0);
                    return new MoviePopularity(movieId, averageRating, ratings.size());
                })
                .sorted((a, b) -> Double.compare(b.popularityScore, a.popularityScore)) // 인기 점수 내림차순
                .limit(limit)
                .collect(Collectors.toList());
                
        return popularities;
    }
}

