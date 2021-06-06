package com.odkor.projectmanagementtool.services;

import com.odkor.projectmanagementtool.domain.User;
import com.odkor.projectmanagementtool.exceptions.UsernameAlreadyExistsException;
import com.odkor.projectmanagementtool.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User saveUser(User newUser) {

        try {
            newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
            newUser.setUsername(newUser.getUsername());
            newUser.setConfirmPassword("");
            return userRepository.save(newUser);

        } catch (Exception ex) {
            throw new UsernameAlreadyExistsException("Username " + newUser.getUsername() + " already exists.");
        }
    }
}
