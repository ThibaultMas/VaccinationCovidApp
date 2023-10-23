package org.polytech.covidapi.repository;

import org.polytech.covidapi.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    public User findOneByMail(String mail);
    public User findOneById(Integer id);
}
