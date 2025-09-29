package com.example.lapisblue.lapisblue.controller;

import com.example.lapisblue.lapisblue.DTO.MovieResponse;
import com.example.lapisblue.lapisblue.DTO.PopularMovieResponse;
import com.example.lapisblue.lapisblue.DTO.SalesResponse;
import com.example.lapisblue.lapisblue.domain.Movie;
import com.example.lapisblue.lapisblue.domain.Sales;
import com.example.lapisblue.lapisblue.repository.SalesRepository;
import com.example.lapisblue.lapisblue.service.MovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/movies")
@RequiredArgsConstructor
public class MovieController {

    private final MovieService movieService;
    private final SalesRepository salesRepository;

    @GetMapping
    public ResponseEntity<List<MovieResponse>> getMovies() {
        try {
            List<MovieResponse> movies = movieService.findAll().stream().map(MovieResponse::from).toList();
            return ResponseEntity.ok(movies);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(List.of());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<MovieResponse> getMovie(@PathVariable Integer id) {
        try{
            MovieResponse movie = MovieResponse.from(movieService.findById(id));
            return ResponseEntity.ok(movie);
        }catch (IllegalArgumentException e){
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/search")
    public ResponseEntity<List<MovieResponse>> searchMovies(@RequestParam String query) {
        try {
            List<Movie> movies = movieService.searchByTitle(query);
            List<MovieResponse> movieResponses = movies.stream().map(MovieResponse::from).toList();
            return ResponseEntity.ok(movieResponses);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(List.of());
        }
    }

    @GetMapping("/popular")
    public ResponseEntity<List<PopularMovieResponse>> getPopularMoviesWithSales(
            @RequestParam(defaultValue = "20") int limit) {
        try {
            // ratings.csv에서 인기순 영화 분석
            List<MovieService.MoviePopularity> popularities = movieService.getPopularMoviesFromRatings(limit);
            
            // 데이터베이스에서 해당 영화들의 정보 조회
            List<Integer> movieIds = popularities.stream()
                    .map(p -> p.movieId)
                    .collect(Collectors.toList());
            
            Map<Integer, Movie> movieMap = movieService.findAll().stream()
                    .filter(movie -> movieIds.contains(movie.getId()))
                    .collect(Collectors.toMap(Movie::getId, movie -> movie));
            
            // Sales 정보 조회
            List<Sales> allSales = salesRepository.findByMovieIdIn(movieIds);
            Map<Integer, List<SalesResponse>> salesMap = allSales.stream()
                    .filter(sales -> sales.getMovie() != null)
                    .collect(Collectors.groupingBy(
                            sales -> sales.getMovie().getId(),
                            Collectors.mapping(SalesResponse::from, Collectors.toList())
                    ));
            
            // PopularMovieResponse 생성
            List<PopularMovieResponse> response = popularities.stream()
                    .filter(popularity -> movieMap.containsKey(popularity.movieId))
                    .map(popularity -> {
                        Movie movie = movieMap.get(popularity.movieId);
                        List<SalesResponse> allSalesInfo = salesMap.getOrDefault(popularity.movieId, List.of());
                        // 최상위 1개의 블루레이 정보만 선택 (가격이 가장 낮은 것 우선)
                        List<SalesResponse> limitedSalesInfo = allSalesInfo.stream()
                                .sorted((a, b) -> {
                                    // 가격이 없는 경우 맨 뒤로
                                    if (a.price() == null && b.price() == null) return 0;
                                    if (a.price() == null) return 1;
                                    if (b.price() == null) return -1;
                                    return a.price().compareTo(b.price());
                                })
                                .limit(1)
                                .collect(Collectors.toList());
                        
                        return PopularMovieResponse.from(
                                movie,
                                popularity.averageRating,
                                popularity.ratingCount,
                                popularity.popularityScore,
                                limitedSalesInfo
                        );
                    })
                    .collect(Collectors.toList());
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(List.of());
        }
    }
}

