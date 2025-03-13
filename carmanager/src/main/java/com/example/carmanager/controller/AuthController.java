package com.example.carmanager.controller;

import com.example.carmanager.model.User;
import com.example.carmanager.model.LoginRequest;
import com.example.carmanager.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    // Registration endpoint
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        try {
            User registeredUser = userService.registerUser(user);

            // Remove password before sending response
            registeredUser.setPassword(null);

            return ResponseEntity.ok(registeredUser);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // Login endpoint
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            User user = userService.loginUser(loginRequest.getUsername(), loginRequest.getPassword());

            // Remove password before sending response
            user.setPassword(null);

            return ResponseEntity.ok(user);
        } catch (RuntimeException e) {
            return ResponseEntity.status(401).body(e.getMessage()); // Unauthorized error
        }
    }
}
