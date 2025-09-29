package com.example.lapisblue.lapisblue.Util;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable()); // REST 테스트 시 편의상 비활성(운영 정책에 맞게)
        http.cors(cors -> cors.configurationSource(corsConfigurationSource())); // CORS 활성화
        http.authorizeHttpRequests(reg -> reg
                // 여기 공개 경로 열기: 정적/헬스/로그인/회원가입 등
                .requestMatchers("/api/**", "/assets/**", "/", "/error").permitAll()
                .anyRequest().authenticated()
        );

        // 1) 기본 폼 로그인 유지(기본 /login 사용)
        // http.formLogin(form -> form.permitAll());

        // 2) 커스텀 로그인 페이지 경로 사용 시
        // http.formLogin(form -> form
        //   .loginPage("/my-login").permitAll()
        // );

        // 3) 폼 로그인 완전 비활성(REST 401 응답 원하면)
        // http.formLogin(form -> form.disable());

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        // 허용할 origin 설정 (개발용: 모든 origin 허용)
        configuration.setAllowedOriginPatterns(Arrays.asList("*"));

        // 허용할 HTTP 메서드
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));

        // 허용할 헤더
        configuration.setAllowedHeaders(Arrays.asList("*"));

        // 인증 정보 허용 (쿠키, Authorization 헤더 등)
        configuration.setAllowCredentials(true);

        // Preflight 요청 캐시 시간 (초)
        configuration.setMaxAge(3600L);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }
}

