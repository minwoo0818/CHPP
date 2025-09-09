package com.pairboardbackpj.service;

import com.pairboardbackpj.domain.User;
import com.pairboardbackpj.domain.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public void signup(String username, String rawPassword) {
        String encoded = passwordEncoder.encode(rawPassword);
        User user = new User();
        user.setUsername(username);
        user.setPassword(encoded);
        user.setRole("USER");
        userRepository.save(user);
    }
}
