package com.example.lapisblue.lapisblue.controller;

import com.example.lapisblue.lapisblue.DTO.ReviewRequest;
import com.example.lapisblue.lapisblue.DTO.ReviewResponse;
import com.example.lapisblue.lapisblue.Util.JwtUtil;
import com.example.lapisblue.lapisblue.repository.UserRepository;
import com.example.lapisblue.lapisblue.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reviews")
@RequiredArgsConstructor
public class ReviewController {
    private final ReviewService reviewService;
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil = new JwtUtil(
            "VGhpcy1pcy1hLXN1cGVyLXNlY3JldC1zZWVkLWF0LWxlYXN0LTMyLWNoYXJzLWxvbmc=",
            900
    );

    @PostMapping
    public ResponseEntity<Void> createOrUpdate(
            @RequestHeader(value = "Authorization", required = false) String authorization,
            @RequestBody ReviewRequest req
    ) {
        if (authorization == null || !authorization.startsWith("Bearer ")) {
            return ResponseEntity.status(401).build();
        }
        String token = authorization.substring("Bearer ".length());
        String subject;
        try {
            var jws = jwtUtil.parse(token);
            subject = jws.getBody().getSubject();
        } catch (io.jsonwebtoken.JwtException e) {
            return ResponseEntity.status(401).build();
        }
        var userOpt = userRepository.findByUsername(subject)
                .or(() -> userRepository.findByEmail(subject));
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(401).build();
        }
        int userId = userOpt.get().getId();

        reviewService.createOrUpdate(userId, req);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<java.util.List<ReviewResponse>> list(
            @RequestParam(required = false) Integer salesId,
            @RequestParam(required = false) Integer userId
    ) {
        try {
            if (salesId != null) {
                var list = reviewService.findBySalesId(salesId);
                var userIds = list.stream()
                        .map(r -> r.getId() != null ? r.getId().getUserId() : null)
                        .filter(java.util.Objects::nonNull)
                        .collect(java.util.stream.Collectors.toSet());
                var users = userRepository.findAllById(userIds);
                var idToUsername = new java.util.HashMap<Integer, String>();
                for (var u : users) {
                    idToUsername.put(u.getId(), u.getUsername());
                }
                var withUsers = list.stream()
                        .map(r -> {
                            Integer uid = r.getId() != null ? r.getId().getUserId() : null;
                            String username = uid != null ? idToUsername.get(uid) : null;
                            return ReviewResponse.from(r, username);
                        })
                        .toList();
                return ResponseEntity.ok(withUsers);
            }
            if (userId != null) {
                var list = reviewService.findByUserId(userId);
                if (list == null || list.isEmpty()) {
                    return ResponseEntity.ok(null);
                }
                var username = userRepository.findById(userId).map(u -> u.getUsername()).orElse(null);
                var withUsers = list.stream().map(r -> ReviewResponse.from(r, username)).toList();
                return ResponseEntity.ok(withUsers);
            }
            return ResponseEntity.badRequest().build();
        } catch (Exception e) {
            return ResponseEntity.status(500).body(java.util.List.of());
        }
    }
}


