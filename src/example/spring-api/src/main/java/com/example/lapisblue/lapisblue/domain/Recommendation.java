package com.example.lapisblue.lapisblue.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.Instant;
import java.util.Objects;

@Entity
@Table(name = "recommendations")
@Getter
@Setter
public class Recommendation {

    @EmbeddedId
    private RecommendationId id;

    @Column(name = "sale_id")
    private Integer saleId;

    @Column(name = "similarity")
    private Float similarity;

    @Column(name = "reason", columnDefinition = "TEXT")
    private String reason;

    @Column(name = "created_at", nullable = false, updatable = false, insertable = false)
    private Instant createdAt;

    @Embeddable
    @Getter
    @Setter
    public static class RecommendationId implements Serializable {
        @Column(name = "user_id")
        private Integer userId;
        @Column(name = "movie_id")
        private Integer movieId;

        public RecommendationId() {}

        public RecommendationId(Integer userId, Integer movieId) {
            this.userId = userId;
            this.movieId = movieId;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            RecommendationId that = (RecommendationId) o;
            return Objects.equals(userId, that.userId) && Objects.equals(movieId, that.movieId);
        }

        @Override
        public int hashCode() {
            return Objects.hash(userId, movieId);
        }
    }
}


