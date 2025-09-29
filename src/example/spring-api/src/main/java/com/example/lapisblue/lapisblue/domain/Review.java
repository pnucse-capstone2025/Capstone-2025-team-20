package com.example.lapisblue.lapisblue.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.Instant;
import java.util.Objects;

@Entity
@Table(name = "reviews")
@Getter
@Setter
public class Review {

    @EmbeddedId
    private ReviewId id;

    @MapsId("salesId")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sales_id")
    private Sales sales;

    @Column(name = "rating", nullable = false)
    private Float rating;

    @Column(name = "review_comment", columnDefinition = "TEXT")
    private String reviewComment;

    @Column(name = "created_at", nullable = false, updatable = false)
    private Instant createdAt;

    @PrePersist
    private void onCreate() {
        if (this.createdAt == null) {
            this.createdAt = Instant.now();
        }
    }

    @Embeddable
    @Getter
    @Setter
    public static class ReviewId implements Serializable {
        @Column(name = "user_id")
        private Integer userId;
        @Column(name = "sales_id")
        private Integer salesId;

        public ReviewId() {}

        public ReviewId(Integer userId, Integer salesId) {
            this.userId = userId;
            this.salesId = salesId;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            ReviewId reviewId = (ReviewId) o;
            return Objects.equals(userId, reviewId.userId) && Objects.equals(salesId, reviewId.salesId);
        }

        @Override
        public int hashCode() {
            return Objects.hash(userId, salesId);
        }
    }
}


