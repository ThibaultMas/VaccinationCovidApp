package org.polytech.covidapi.security;

import java.util.Optional;

import org.polytech.covidapi.domain.User;
import org.polytech.covidapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;



@Component
public class UserInfoUserDetailsService implements UserDetailsService{

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String mail) throws UsernameNotFoundException{
        Optional<User> user = userRepository.findOneByMail(mail);
        return user.map(UserInfoUserDetails::new).orElseThrow(()->new UsernameNotFoundException("Utilisateur introuvable avec le mail "+mail));

    }

    public void addUserDetails(User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }


}
