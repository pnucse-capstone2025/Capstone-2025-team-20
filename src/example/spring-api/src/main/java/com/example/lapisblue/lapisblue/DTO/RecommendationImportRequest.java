package com.example.lapisblue.lapisblue.DTO;

import java.util.List;

public record RecommendationImportRequest(
        Integer userId,
        List<Result> results
) {
    public record Result(
            Integer movieId,
            String movieTitle,
            Integer saleId,
            Float similarityScore,
            String reason
    ) {}
}


