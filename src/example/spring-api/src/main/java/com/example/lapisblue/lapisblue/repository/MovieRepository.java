package com.example.lapisblue.lapisblue.repository;

import com.example.lapisblue.lapisblue.domain.Movie;
import org.springframework.data.jpa.repository.*;

import java.util.List;
import java.util.Optional;

public interface MovieRepository extends JpaRepository<Movie, Integer> {
    Optional<Movie> findWithAllById(Integer id);
    Optional<Movie> findByTitle(String title);
    List<Movie> findByTitleContainingIgnoreCase(String title);
}
