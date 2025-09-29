package com.example.lapisblue.lapisblue.repository;

import com.example.lapisblue.lapisblue.domain.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Review.ReviewId> {
    List<Review> findBySales_Id(Integer salesId);
    List<Review> findById_UserId(Integer userId);
}


