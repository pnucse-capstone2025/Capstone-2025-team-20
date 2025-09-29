package com.example.lapisblue.lapisblue.service;

import com.example.lapisblue.lapisblue.DTO.RecommendationImportRequest;
import com.example.lapisblue.lapisblue.domain.Recommendation;
import com.example.lapisblue.lapisblue.repository.RecommendationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class RecommendationService {
    private final RecommendationRepository recommendationRepository;

    @Transactional
    public void importResults(RecommendationImportRequest req) {
        if (req == null || req.userId() == null || req.results() == null) {
            throw new IllegalArgumentException("Invalid import request");
        }
        for (var r : req.results()) {
            var id = new Recommendation.RecommendationId(req.userId(), r.movieId());
            var entity = recommendationRepository.findById(id).orElseGet(() -> {
                var e = new Recommendation();
                e.setId(id);
                return e;
            });
            entity.setSaleId(r.saleId());
            entity.setSimilarity(r.similarityScore());
            entity.setReason(r.reason());
            recommendationRepository.save(entity);
        }
    }
}


