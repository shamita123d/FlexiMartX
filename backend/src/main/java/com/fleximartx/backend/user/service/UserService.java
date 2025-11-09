package com.fleximartx.backend.user.service;


import com.fleximartx.backend.user.entity.User;
import com.fleximartx.backend.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository repo;
    public UserService(UserRepository repo) { this.repo = repo; }

    public List<User> getAllUsers() { return repo.findAll(); }
    public User saveUser(User user) { return repo.save(user); }
}
