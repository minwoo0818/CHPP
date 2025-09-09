package com.pairboardbackpj.controller;

import com.pairboardbackpj.domain.User;
import com.pairboardbackpj.domain.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class LoginController {

    private final UserRepository userRepository;

    // ✅ 회원가입
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        if (userRepository.findById(user.getId()).isPresent()) {
            return ResponseEntity.badRequest().body("이미 존재하는 아이디입니다.");
        }
        userRepository.save(user);
        return ResponseEntity.ok("회원가입 성공");
    }

    // ✅ 로그인
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        return userRepository.findByIdAndPassword(user.getId(), user.getPassword())
                .map(u -> ResponseEntity.ok("로그인 성공"))
                .orElse(ResponseEntity.badRequest().body("아이디 또는 비밀번호가 잘못되었습니다."));
    }
}