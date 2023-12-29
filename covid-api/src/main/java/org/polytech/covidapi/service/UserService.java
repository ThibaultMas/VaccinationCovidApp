package org.polytech.covidapi.service;

import java.util.Optional;

import org.polytech.covidapi.domain.User;
import org.polytech.covidapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public Optional <User> findOneByMail(String mail){
        return userRepository.findOneByMail(mail);
    }

    public User findOneById(Integer id){
        return userRepository.findOneById(id);
    }

}
