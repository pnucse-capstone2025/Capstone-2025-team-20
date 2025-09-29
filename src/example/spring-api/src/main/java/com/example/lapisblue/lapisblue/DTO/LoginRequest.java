package com.example.lapisblue.lapisblue.DTO;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record LoginRequest(
        @NotBlank(message = "아이디 또는 이메일은 필수입니다.")
        String usernameOrEmail,

        @NotBlank(message = "비밀번호는 필수입니다.")
        @Size(min = 6, max = 100, message = "비밀번호는 6~100자여야 합니다.")
        String password
) {}
