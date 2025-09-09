package com.pairboardbackpj.domain.repository;

import com.pairboardbackpj.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByIdAndPassword(String id, String password);
    Optional<User> findById(String id);
}
