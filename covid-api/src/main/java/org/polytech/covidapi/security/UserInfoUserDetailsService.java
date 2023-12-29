package org.polytech.covidapi.security;

import java.util.Optional;

import org.polytech.covidapi.domain.SuperAdmin;
import org.polytech.covidapi.domain.User;
import org.polytech.covidapi.repository.SuperAdminRepository;
import org.polytech.covidapi.repository.UserRepository;
import org.polytech.covidapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;


import jakarta.annotation.PostConstruct;

@Component
public class UserInfoUserDetailsService implements UserDetailsService{

    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private SuperAdminRepository superAdminRepository;
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

    @PostConstruct
    public void createDefaultSuperAdmin() {
        if((userService.findOneByMail("default.superadmin@app.fr")).isEmpty()){
            System.out.println("Creation du super admin par défaut...");
            SuperAdmin superAdmin = new SuperAdmin();
            superAdmin.setFname("Karl");
            superAdmin.setLname("Durand");
            superAdmin.setMail("default.superadmin@app.fr");
            superAdmin.setPassword(passwordEncoder.encode("defaultsuperadmin"));
            superAdmin.setPhone("0606030303 ");
            superAdmin.setRole("superadmin");
            superAdminRepository.save(superAdmin);
        }
    
        
  
    }


}
