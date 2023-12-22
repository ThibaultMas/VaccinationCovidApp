package org.polytech.covidapi.service;

import java.util.List;

import org.polytech.covidapi.domain.Admin;
import org.polytech.covidapi.domain.VaccinationCenter;
import org.polytech.covidapi.repository.AdminRepository;
import org.polytech.covidapi.repository.VaccinationCenterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;
    @Autowired
    private VaccinationCenterRepository centerRepository;

    public void createAdmin(Admin admin){
        adminRepository.save(admin);
    }

    public void deleteAdmin(Integer id){
        Admin admin = adminRepository.findOneById(id);
        adminRepository.delete(admin);
    }

    public void updateAdmin(Admin admin, Integer id, Integer center_id){
        Admin admindb = adminRepository.findOneById(id);
        VaccinationCenter center = centerRepository.findOneById(center_id); 
        admindb.setFname(admin.getFname());
        admindb.setLname(admin.getLname());
        admindb.setMail(admin.getMail());
        admindb.setPassword(admin.getPassword());
        admindb.setPhone(admin.getPhone());
        admindb.setCenter(center);
        adminRepository.save(admindb);
    }

    public List<Admin> findAllByLName(String lname){
        return adminRepository.findAllBylname(lname);
    }

    public List<Admin> findAllByCenterId(Integer center_id){
        return adminRepository.findAllBycenter_id(center_id);
    }

    public List<Admin> findAll(){
        return adminRepository.findAll();
    }

    public Admin findOneById(Integer admin_id){
        return adminRepository.findOneById(admin_id);
    }

    public VaccinationCenter getAdminCenter(Integer admin_id){
        Admin admin = adminRepository.findOneById(admin_id);
        if(admin.getCenter() != null){
            return admin.getCenter();
        }
        
        return null;
    }
    
    
}
