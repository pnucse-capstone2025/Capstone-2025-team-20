package com.example.lapisblue.lapisblue.repository;

import com.example.lapisblue.lapisblue.domain.UserRoles;
import com.example.lapisblue.lapisblue.domain.UserRolesId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRolesRepository extends JpaRepository<UserRoles, UserRolesId> {}
