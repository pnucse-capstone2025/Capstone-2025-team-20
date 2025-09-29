package com.example.lapisblue.lapisblue.repository;

import com.example.lapisblue.lapisblue.domain.Recommendation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecommendationRepository extends JpaRepository<Recommendation, Recommendation.RecommendationId> {
    java.util.List<Recommendation> findById_UserId(Integer userId);
}


