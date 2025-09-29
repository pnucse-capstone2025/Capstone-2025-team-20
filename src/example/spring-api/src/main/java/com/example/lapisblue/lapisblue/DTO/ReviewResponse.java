package com.example.lapisblue.lapisblue.DTO;

import com.example.lapisblue.lapisblue.domain.Review;

import java.time.Instant;

public record ReviewResponse(
        Integer userId,
        String username,
        Integer salesId,
        Float rating,
        String reviewComment,
        Instant createdAt
) {
    public static ReviewResponse from(Review r) {
        if (r == null) return new ReviewResponse(null, null, null, null, null, null);
        Integer uid = (r.getId() != null) ? r.getId().getUserId() : null;
        Integer sid = (r.getId() != null) ? r.getId().getSalesId() : null;
        // username을 위해선 사용자 조회가 필요하므로 Service/Controller에서 주입하는 오버로드도 제공 가능
        return new ReviewResponse(
                uid,
                null,
                sid,
                r.getRating(),
                r.getReviewComment(),
                r.getCreatedAt()
        );
    }

    public static ReviewResponse from(Review r, String username) {
        if (r == null) return new ReviewResponse(null, null, null, null, null, null);
        Integer uid = (r.getId() != null) ? r.getId().getUserId() : null;
        Integer sid = (r.getId() != null) ? r.getId().getSalesId() : null;
        return new ReviewResponse(
                uid,
                username,
                sid,
                r.getRating(),
                r.getReviewComment(),
                r.getCreatedAt()
        );
    }
}


