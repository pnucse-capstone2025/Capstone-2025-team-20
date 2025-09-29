package com.example.lapisblue.lapisblue.service;

import com.example.lapisblue.lapisblue.DTO.SignupRequest;
import com.example.lapisblue.lapisblue.domain.Role;
import com.example.lapisblue.lapisblue.domain.User;
import com.example.lapisblue.lapisblue.domain.UserRoles;
import com.example.lapisblue.lapisblue.domain.UserRolesId;
import com.example.lapisblue.lapisblue.repository.RoleRepository;
import com.example.lapisblue.lapisblue.repository.UserRepository;
import com.example.lapisblue.lapisblue.repository.UserRolesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final UserRolesRepository userRoleRepository;
    private final PasswordEncoder passwordEncoder; // BCryptPasswordEncoder

    public void verifyLogin(String usernameOrEmail, String rawPassword) {
        User user = userRepository.findByUsername(usernameOrEmail)
                .or(() -> userRepository.findByEmail(usernameOrEmail))
                .orElseThrow(() -> new IllegalArgumentException("자격 증명이 올바르지 않습니다."));

        if (!passwordEncoder.matches(rawPassword, user.getPasswordHash())) {
            throw new IllegalArgumentException("자격 증명이 올바르지 않습니다.");
        }
    }

    public void registerUser(SignupRequest request) {
        if (userRepository.existsByUsername(request.username())) {
            throw new IllegalArgumentException("이미 존재하는 사용자명입니다.");
        }
        if (userRepository.existsByEmail(request.email())) {
            throw new IllegalArgumentException("이미 존재하는 이메일입니다.");
        }

        User user = new User();
        user.setUsername(request.username());
        user.setEmail(request.email());
        user.setPasswordHash(passwordEncoder.encode(request.password()));

        userRepository.save(user);

        Role role = roleRepository.findByName("USER").orElseThrow(() -> new IllegalArgumentException("Role not found"));

        UserRoles userRole = new UserRoles();
        userRole.setId(new UserRolesId(user.getId(), role.getId()));
        userRole.setUser(user);
        userRole.setRole(role);
        userRoleRepository.save(userRole);
    }
}
