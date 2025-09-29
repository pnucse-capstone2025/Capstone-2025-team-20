package com.example.lapisblue.lapisblue.controller;

import com.example.lapisblue.lapisblue.DTO.SignupRequest;
import com.example.lapisblue.lapisblue.Util.JwtUtil;
import com.example.lapisblue.lapisblue.repository.UserRepository;
import com.example.lapisblue.lapisblue.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class LoginController {

    private final AuthService authService;
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil = new JwtUtil(
            // demo secret (Base64). replace with env var/config in production
            "VGhpcy1pcy1hLXN1cGVyLXNlY3JldC1zZWVkLWF0LWxlYXN0LTMyLWNoYXJzLWxvbmc=",
            900
    );

    public static record LoginRequest(String usernameOrEmail, String password) {}

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            authService.verifyLogin(request.usernameOrEmail(), request.password());
            String token = jwtUtil.generate(request.usernameOrEmail(), java.util.Map.of("role", "USER"));
            return ResponseEntity.ok(java.util.Map.of("accessToken", token));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @GetMapping("/me")
    public ResponseEntity<?> me(@RequestHeader(value = "Authorization", required = false) String authorization) {
        try {
            if (authorization == null || !authorization.startsWith("Bearer ")) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Missing Authorization header");
            }
            String token = authorization.substring("Bearer ".length());
            var jws = jwtUtil.parse(token);
            String subject = jws.getBody().getSubject();
            Object role = jws.getBody().get("role");

            var userOpt = userRepository.findByUsername(subject)
                    .or(() -> userRepository.findByEmail(subject));
            if (userOpt.isEmpty()) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found");
            }
            var user = userOpt.get();
            return ResponseEntity.ok(java.util.Map.of(
                    "userId", user.getId(),
                    "usernameOrEmail", subject,
                    "username", user.getUsername(),
                    "email", user.getEmail(),
                    "role", role
            ));
        } catch (io.jsonwebtoken.JwtException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid token");
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody SignupRequest request) {
        try {
            authService.registerUser(request);
            return ResponseEntity.ok("회원가입 성공");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
