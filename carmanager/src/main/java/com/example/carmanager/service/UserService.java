package com.example.carmanager.service;



import com.example.carmanager.model.User;
import com.example.carmanager.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Registration logic
    public User registerUser(User user) {
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            throw new RuntimeException("Username already exists.");
        }
        return userRepository.save(user); // Save to DB
    }

    // Login logic
    public User loginUser(String username, String password) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found."));
        if (!user.getPassword().equals(password)) {
            throw new RuntimeException("Invalid credentials.");
        }
        return user;
    }
}
