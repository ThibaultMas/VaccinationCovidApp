package org.polytech.covidapi.web;

import org.polytech.covidapi.domain.User;
import org.polytech.covidapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/private/auth")
public class AuthentificationController {
    @Autowired
    private UserService userService;

    @GetMapping(path="/usermail/{mail}")
    public User getUserByMail(@PathVariable String mail){
        return userService.findOneByMail(mail);
    }

    @GetMapping(path="/userid/{id}")
    public User getUserByMail(@PathVariable Integer id){
        return userService.findOneById(id);
    }
}
