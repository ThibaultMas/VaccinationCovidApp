package org.polytech.covidapi.repository;

import java.util.List;

import org.polytech.covidapi.domain.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {
    public List<Admin> findAllBylname(String lname);
    public Admin findOneById(Integer admin_id);
}
