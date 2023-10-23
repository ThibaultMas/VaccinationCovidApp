package org.polytech.covidapi.service;

import org.polytech.covidapi.domain.SuperAdmin;
import org.polytech.covidapi.repository.SuperAdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SuperAdminService {
    @Autowired
    private SuperAdminRepository superAdminRepository;

    public void createSuperAdmin(SuperAdmin superAdmin){
        superAdminRepository.save(superAdmin);
    }
}
