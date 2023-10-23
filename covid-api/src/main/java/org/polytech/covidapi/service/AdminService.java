package org.polytech.covidapi.service;

import java.util.List;

import org.polytech.covidapi.domain.Admin;
import org.polytech.covidapi.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    public void createAdmin(Admin admin){
        adminRepository.save(admin);
    }

    public void deleteAdmin(Integer id){
        Admin admin = adminRepository.findOneById(id);
        adminRepository.delete(admin);
    }

    public void updateAdmin(Admin admin, Integer id){
        Admin admindb = adminRepository.findOneById(id);
        admindb.setFname(admin.getFname());
        admindb.setLname(admin.getLname());
        admindb.setMail(admin.getMail());
        admindb.setPassword(admin.getPassword());
        admindb.setPhone(admin.getPhone());
        adminRepository.save(admindb);
    }

    public List<Admin> findAllByLName(String lname){
        return adminRepository.findAllBylname(lname);
    }

    public List<Admin> findAll(){
        return adminRepository.findAll();
    }

    public Admin findOneById(Integer admin_id){
        return adminRepository.findOneById(admin_id);
    }

    
}
