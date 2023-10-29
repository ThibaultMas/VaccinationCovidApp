package org.polytech.covidapi.repository;

import java.util.List;

import org.polytech.covidapi.domain.SuperAdmin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SuperAdminRepository extends JpaRepository<SuperAdmin, Integer> {
    public List<SuperAdmin> findAll();
    public SuperAdmin findOneById(Integer id);
}
