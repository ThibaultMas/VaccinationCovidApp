package org.polytech.covidapi.repository;

import org.polytech.covidapi.domain.SuperAdmin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SuperAdminRepository extends JpaRepository<SuperAdmin, Integer> {
    
}
