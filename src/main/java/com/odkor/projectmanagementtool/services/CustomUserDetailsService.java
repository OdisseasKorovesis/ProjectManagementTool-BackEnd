package com.odkor.projectmanagementtool.services;

import com.odkor.projectmanagementtool.domain.User;
import com.odkor.projectmanagementtool.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user  = userRepository.findByUsername(username);

        if(user == null) {
            new UsernameNotFoundException("User not found");
        }

        return user;
    }

    @Transactional
    public User loadUseById(Long id) {
        User user = userRepository.getById(id);

        if(user == null) {
            new UsernameNotFoundException("User not found");
        }

        return user;
    }
}
