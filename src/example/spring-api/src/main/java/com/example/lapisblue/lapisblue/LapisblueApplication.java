package com.example.lapisblue.lapisblue;

import com.example.lapisblue.lapisblue.domain.Role;
import com.example.lapisblue.lapisblue.repository.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class LapisblueApplication {

	public static void main(String[] args) {
		SpringApplication.run(LapisblueApplication.class, args);
	}

    @Bean
    CommandLineRunner seedRoles(RoleRepository roleRepository) {
        return args -> {
            if (roleRepository.findByName("USER").isEmpty()) {
                Role user = new Role();
                user.setName("USER");
                roleRepository.save(user);
            }
            if (roleRepository.findByName("ADMIN").isEmpty()) {
                Role admin = new Role();
                admin.setName("ADMIN");
                roleRepository.save(admin);
            }
        };
    }
}
