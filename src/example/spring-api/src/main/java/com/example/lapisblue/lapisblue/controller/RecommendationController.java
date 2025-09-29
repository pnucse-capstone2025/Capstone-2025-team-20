package com.example.lapisblue.lapisblue.controller;

import com.example.lapisblue.lapisblue.DTO.RecommendationImportRequest;
import com.example.lapisblue.lapisblue.DTO.RecommendationRunRequest;
import com.example.lapisblue.lapisblue.Util.JwtUtil;
import com.example.lapisblue.lapisblue.service.RecommendationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/recommendations")
@RequiredArgsConstructor
public class RecommendationController {
    private final RecommendationService recommendationService;
    private final com.example.lapisblue.lapisblue.repository.RecommendationRepository recommendationRepository;
    private final JwtUtil jwtUtil = new JwtUtil(
            "VGhpcy1pcy1hLXN1cGVyLXNlY3JldC1zZWVkLWF0LWxlYXN0LTMyLWNoYXJzLWxvbmc=",
            900
    );

    @PostMapping("/import")
    public ResponseEntity<Void> importResults(
            @RequestHeader(value = "Authorization", required = false) String authorization,
            @RequestBody RecommendationImportRequest req
    ) {
        if (authorization == null || !authorization.startsWith("Bearer ")) {
            return ResponseEntity.status(401).build();
        }
        String token = authorization.substring("Bearer ".length());
        try {
            jwtUtil.parse(token);
        } catch (io.jsonwebtoken.JwtException e) {
            return ResponseEntity.status(401).build();
        }

        recommendationService.importResults(req);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/run")
    public ResponseEntity<String> run(
            @RequestHeader(value = "Authorization", required = false) String authorization,
            @RequestBody RecommendationRunRequest req
    ) {
        if (authorization == null || !authorization.startsWith("Bearer ")) {
            return ResponseEntity.status(401).body("Unauthorized");
        }
        String token = authorization.substring("Bearer ".length());
        try {
            jwtUtil.parse(token);
        } catch (io.jsonwebtoken.JwtException e) {
            return ResponseEntity.status(401).body("Invalid token");
        }

        int userId = (req != null && req.userId() != null) ? req.userId() : 612;
        int topN = (req != null && req.topN() != null) ? req.topN() : 20;

        String base = System.getenv().getOrDefault("PY_RECO_BASE", "http://py-reco:8000");
        String[] candidates = new String[] {
                base,
                "http://localhost:8000",
                "http://127.0.0.1:8000"
        };
        Exception lastEx = null;
        for (String cand : candidates) {
            String url = cand + "/run?userId=" + userId + "&topN=" + topN;
            try {
                java.net.http.HttpClient client = java.net.http.HttpClient.newBuilder()
                        .connectTimeout(java.time.Duration.ofSeconds(3))
                        .build();
                java.net.http.HttpRequest httpReq = java.net.http.HttpRequest.newBuilder()
                        .uri(java.net.URI.create(url))
                        .GET()
                        .build();
                java.net.http.HttpResponse<String> resp = client.send(httpReq, java.net.http.HttpResponse.BodyHandlers.ofString());
                if (resp.statusCode() == 200) {
                    return ResponseEntity.ok(resp.body());
                }
                lastEx = new RuntimeException("py-reco error: " + resp.statusCode() + "\n" + resp.body());
            } catch (Exception e) {
                lastEx = e;
            }
        }
        return ResponseEntity.status(500).body("HTTP call error: " + (lastEx != null ? lastEx.getMessage() : "unknown"));
    }

    @GetMapping
    public ResponseEntity<java.util.List<java.util.Map<String, Object>>> listByUser(
            @RequestParam Integer userId
    ) {
        var list = recommendationRepository.findById_UserId(userId);
        var result = new java.util.ArrayList<java.util.Map<String, Object>>();
        for (var r : list) {
            var m = new java.util.HashMap<String, Object>();
            if (r.getId() != null) {
                m.put("userId", r.getId().getUserId());
                m.put("movieId", r.getId().getMovieId());
            }
            m.put("saleId", r.getSaleId());
            m.put("similarity", r.getSimilarity());
            m.put("reason", r.getReason());
            result.add(m);
        }
        return ResponseEntity.ok(result);
    }
}


