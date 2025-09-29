package com.example.lapisblue.lapisblue.service;

import com.example.lapisblue.lapisblue.DTO.ReviewRequest;
import com.example.lapisblue.lapisblue.domain.Review;
import com.example.lapisblue.lapisblue.domain.Sales;
import com.example.lapisblue.lapisblue.repository.ReviewRepository;
import com.example.lapisblue.lapisblue.repository.SalesRepository;
import org.springframework.beans.factory.annotation.Value;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.TransactionSynchronization;
import org.springframework.transaction.support.TransactionSynchronizationManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.io.*;
import java.nio.charset.StandardCharsets;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private static final Logger log = LoggerFactory.getLogger(ReviewService.class);
    private final ReviewRepository reviewRepository;
    private final SalesRepository salesRepository;

    @Value("${app.dataset.dir:}")
    private String appDatasetDirProp;

    @Value("${python.exec:}")
    private String pythonExecProp;

    @Transactional
    public void createOrUpdate(Integer userId, ReviewRequest req) {
        if (req == null || req.salesId() == null || req.rating() == null) {
            throw new IllegalArgumentException("Invalid review request");
        }
        // rating 범위 검증 (예: 0.0 ~ 5.0). 필요에 따라 조정하세요.
        if (req.rating() < 0.0f || req.rating() > 5.0f) {
            throw new IllegalArgumentException("Invalid rating value");
        }

        Sales sales = salesRepository.findById(req.salesId())
                .orElseThrow(() -> new IllegalArgumentException("Sales not found: " + req.salesId()));

        Review.ReviewId id = new Review.ReviewId(userId, req.salesId());
        Review review = reviewRepository.findById(id).orElseGet(() -> {
            Review r = new Review();
            r.setId(id);
            r.setSales(sales);
            return r;
        });
        review.setRating(req.rating());
        review.setReviewComment(req.reviewComment());
        
        log.info("Saving review: userId={}, salesId={}, rating={}", userId, req.salesId(), req.rating());
        reviewRepository.save(review);
        log.info("Review saved successfully");

        // 리뷰 저장 후 커밋이 끝난 다음(py-reco가 DB에서 리뷰를 조회 가능하도록) 호출
        Integer sid = req.salesId();
        if (TransactionSynchronizationManager.isSynchronizationActive()) {
            log.info("Register afterCommit hook for py-reco append (userId={}, salesId={})", userId, sid);
            TransactionSynchronizationManager.registerSynchronization(new TransactionSynchronization() {
                @Override
                public void afterCommit() {
                    log.info("TX committed. Triggering py-reco append via REST (userId={}, salesId={})", userId, sid);
                    triggerPyRecoAppend(userId, sid);
                }
            });
        } else {
            log.info("No active TX. Trigger py-reco append immediately (userId={}, salesId={})", userId, sid);
            triggerPyRecoAppend(userId, sid);
        }
    }

    @Transactional(readOnly = true)
    public List<Review> findBySalesId(Integer salesId) {
        return reviewRepository.findBySales_Id(salesId);
    }

    @Transactional(readOnly = true)
    public List<Review> findByUserId(Integer userId) {
        return reviewRepository.findById_UserId(userId);
    }

    private void triggerAppendConvertedRating(Integer userId, Integer salesId) {
        log.info("=== Python 스크립트 호출 시작 ===");
        log.info("Parameters: userId={}, salesId={}", userId, salesId);
        
        if (userId == null || salesId == null) {
            log.error("Skip append: missing userId or salesId (userId={}, salesId={})", userId, salesId);
            return;
        }

        // Ensure the Sales has a linked Movie; otherwise conversion cannot proceed
        try {
            var salesOpt = salesRepository.findById(salesId);
            if (salesOpt.isEmpty() || salesOpt.get().getMovie() == null) {
                log.warn("Skip append: Sales {} has no linked Movie (movie_id is null).", salesId);
                return;
            }
        } catch (Exception e) {
            log.warn("Could not verify Sales(Movie) linkage for salesId={}: {}", salesId, e.toString());
        }

        // Resolve dataset directory
        File datasetDir = resolveDatasetDir();
        log.info("Attempting to resolve dataset directory...");
        if (datasetDir == null || !datasetDir.isDirectory()) {
            log.error("Dataset directory not found. Set -Dapp.dataset.dir or APP_DATASET_DIR");
            log.error("Current working directory: {}", System.getProperty("user.dir"));
            return;
        }
        log.info("Dataset directory resolved: {}", datasetDir.getAbsolutePath());
        
        File scriptFile = new File(datasetDir, "append_single_converted_rating.py");
        if (!scriptFile.exists()) {
            log.error("Script not found: {}", scriptFile.getAbsolutePath());
            return;
        }
        log.info("Python script found: {}", scriptFile.getAbsolutePath());

        File ratingsFile = new File(datasetDir, "ml-latest-small/ratings.csv");
        log.info("Target ratings CSV: {}", ratingsFile.getAbsolutePath());

        // Capture effectively final references for async runner
        final File effectiveDatasetDir = datasetDir.getAbsoluteFile();
        final String scriptPath = scriptFile.getAbsolutePath();
        final String ratingsPath = ratingsFile.getAbsolutePath();

        // In Docker (Linux), use python3 only
        java.util.List<java.util.List<String>> candidateCmds = new java.util.ArrayList<>();
        String configuredPython = findPythonExecutable();
        if (configuredPython != null && !configuredPython.isBlank()) {
            candidateCmds.add(java.util.List.of(configuredPython, scriptPath, String.valueOf(userId), String.valueOf(salesId), ratingsPath));
        }
        candidateCmds.add(java.util.List.of("python3", scriptPath, String.valueOf(userId), String.valueOf(salesId), ratingsPath));
        candidateCmds.add(java.util.List.of("python", scriptPath, String.valueOf(userId), String.valueOf(salesId), ratingsPath));

        // Run synchronously for immediate feedback
        try {
            boolean success = false;
            log.info("Starting Python command execution with {} candidates", candidateCmds.size());
            
            for (int i = 0; i < candidateCmds.size(); i++) {
                java.util.List<String> cmd = candidateCmds.get(i);
                log.info("Trying Python command #{}: {}", i+1, String.join(" ", cmd));
                
                ProcessBuilder pb = new ProcessBuilder(cmd);
                pb.directory(effectiveDatasetDir);
                pb.redirectErrorStream(true);
                
                log.info("Working directory: {}", effectiveDatasetDir.getAbsolutePath());
                log.info("Starting process...");
                
                Process p = pb.start();
                StringBuilder out = new StringBuilder();
                try (BufferedReader r = new BufferedReader(new InputStreamReader(p.getInputStream(), StandardCharsets.UTF_8))) {
                    String line;
                    while ((line = r.readLine()) != null) {
                        out.append(line).append('\n');
                        log.info("Python output: {}", line); // 실시간 출력 로깅
                    }
                }
                
                int code = p.waitFor();
                log.info("Process finished with exit code: {}", code);
                
                if (code == 0) {
                    log.info("✓ Python script SUCCESS! (userId={}, salesId={}). Full output:\n{}", userId, salesId, out.toString());
                    success = true;
                    break;
                } else {
                    log.error("✗ Python command #{} FAILED (exitCode={}). Output:\n{}", i+1, code, out.toString());
                }
            }
            if (!success) {
                log.error("🚨 ALL PYTHON COMMANDS FAILED for userId={}, salesId={}", userId, salesId);
            }
        } catch (Exception e) {
            log.error("🚨 CRITICAL ERROR invoking Python append script: {}", e.toString());
            e.printStackTrace();
        }
        
        log.info("=== Python 스크립트 호출 종료 ===");
    }

    // Removed Java fallback appender to prevent incorrect raw rating writes

    private void triggerPyRecoAppend(Integer userId, Integer salesId) {
        int maxAttempts = 3;
        long backoffMs = 500L;
        Exception lastError = null;
        for (int attempt = 1; attempt <= maxAttempts; attempt++) {
            try {
                String base = System.getenv("PY_RECO_BASE");
                if (base == null || base.isBlank()) {
                    base = "http://py-reco:8000"; // docker-compose 서비스명
                }
                String url = base + "/append-rating?userId=" + userId + "&salesId=" + salesId;

                java.net.http.HttpClient client = java.net.http.HttpClient.newHttpClient();
                java.net.http.HttpRequest request = java.net.http.HttpRequest.newBuilder()
                        .uri(java.net.URI.create(url))
                        .POST(java.net.http.HttpRequest.BodyPublishers.noBody())
                        .build();
                java.net.http.HttpResponse<String> response = client.send(request, java.net.http.HttpResponse.BodyHandlers.ofString());
                log.info("py-reco append response (status={}, attempt={}): {}", response.statusCode(), attempt, response.body());
                if (response.statusCode() < 400) {
                    return; // 성공
                }
                lastError = new RuntimeException("py-reco http status=" + response.statusCode());
            } catch (Exception e) {
                lastError = e;
                log.warn("py-reco append attempt {} failed: {}", attempt, e.toString());
            }
            try { Thread.sleep(backoffMs); } catch (InterruptedException ignored) {}
            backoffMs *= 2; // exponential backoff
        }
        // 재시도 모두 실패: 로컬 파이썬 실행 시도 (변환 점수 유지), 자바 fallback 제거
        log.warn("py-reco append failed after retries. Trying local Python execution...");
        triggerAppendConvertedRating(userId, salesId);
    }

    // Removed Windows-specific branching; Docker uses Linux python3

    private File resolveDatasetDir() {
        // Docker: dataset is mounted at /data/dataset (see docker-compose)
        String configured = appDatasetDirProp;
        if (configured == null || configured.isBlank()) {
            configured = System.getenv("APP_DATASET_DIR");
        }
        if (configured == null || configured.isBlank()) {
            configured = "/data/dataset";
        }
        File f = new File(configured);
        if (f.isDirectory()) return f.getAbsoluteFile();
        log.error("Dataset directory not found at {}", f.getAbsolutePath());
        return null;
    }

    private String findPythonExecutable() {
        // Prefer property/env, fallback to python3 (Docker)
        String fromProp = pythonExecProp;
        if (fromProp == null || fromProp.isBlank()) fromProp = System.getProperty("python.exec");
        if (fromProp != null && !fromProp.isBlank()) return fromProp;
        String fromEnv = System.getenv("PYTHON");
        if (fromEnv != null && !fromEnv.isBlank()) return fromEnv;
        return "python3";
    }
}


