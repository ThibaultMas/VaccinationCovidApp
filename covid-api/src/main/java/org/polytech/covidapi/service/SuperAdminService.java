package org.polytech.covidapi.service;

import java.util.List;

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

    public List<SuperAdmin> findAll(){
        return superAdminRepository.findAll();
    }

    public void deleteSuperAdmin(Integer id){
        SuperAdmin superAdmin = superAdminRepository.findOneById(id);
        superAdminRepository.delete(superAdmin);
    }

    public void updateSuperAdmin(SuperAdmin superAdmin, Integer id){
        SuperAdmin superAdmindb = superAdminRepository.findOneById(id);
        superAdmindb.setFname(superAdmin.getFname());
        superAdmindb.setLname(superAdmin.getLname());
        superAdmindb.setMail(superAdmin.getMail());
        superAdmindb.setPassword(superAdmin.getPassword());
        superAdmindb.setPhone(superAdmin.getPhone());
        superAdminRepository.save(superAdmindb);
    }

}
