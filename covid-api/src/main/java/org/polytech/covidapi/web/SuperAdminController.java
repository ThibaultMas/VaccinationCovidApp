package org.polytech.covidapi.web;

import java.util.List;

import org.polytech.covidapi.domain.Admin;
import org.polytech.covidapi.domain.Doctor;
import org.polytech.covidapi.domain.SuperAdmin;
import org.polytech.covidapi.domain.VaccinationCenter;
import org.polytech.covidapi.repository.VaccinationCenterRepository;
import org.polytech.covidapi.service.AdminService;
import org.polytech.covidapi.service.DoctorService;
import org.polytech.covidapi.service.SuperAdminService;
import org.polytech.covidapi.service.VaccinationCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/private/superadmin")
public class SuperAdminController {
    @Autowired
    private VaccinationCenterService centerService;
    @Autowired
    private VaccinationCenterRepository centerRepository;
    @Autowired
    private AdminService adminService;
    @Autowired
    private SuperAdminService superAdminService;
    @Autowired
    private DoctorService doctorService;

    //Gestion des centres de vaccination (CRUD)

    @GetMapping(path ="/readcenters")
    public List<VaccinationCenter> getAllCenters(String city){
        if(city == null){
           return centerService.findAll();
        }
        return centerService.findAllByCityIgnoreCaseContaining(city);
    }

    @PostMapping(path = "/createcenter", consumes = {"application/json"})
    public void createCenter(@RequestBody VaccinationCenter center){
        centerRepository.save(center);
    }

    @DeleteMapping(path = "/deletecenter/{id}")
    public void deleteCenter(@PathVariable Integer id){
        centerService.deleteCenter(id);
    }

    @PutMapping(path = "/updatecenter/{id}")
    public void updateCenter(@RequestBody VaccinationCenter center, @PathVariable Integer id){
        centerService.updateCenter(center, id);
    }

    //Gestion des administrateurs des centres (CRUD)
    
    @GetMapping(path ="/readadmins")
    public List<Admin> getAll(String lname){
        if(lname == null){
           return adminService.findAll();
        }
        return adminService.findAllByLName(lname);
    }

    @GetMapping(path ="/readadmins/{center_id}")
    public List<Admin> getCenterAdmins(@PathVariable Integer center_id){
       return adminService.findAllByCenterId(center_id);
    }

    @PostMapping(path = "/createadmin/{center_id}", consumes = {"application/json"})
    public void createAdmin(@RequestBody Admin admin, @PathVariable Integer center_id){
        VaccinationCenter center = centerRepository.findOneById(center_id);
        admin.setCenter(center);
        admin.setRole("admin");
        adminService.createAdmin(admin);
    }

    @DeleteMapping(path = "/deleteadmin/{id}")
    public void deleteAdmin(@PathVariable Integer id){
        adminService.deleteAdmin(id);
    }

    @PutMapping(path = "/updateadmin/{id}/{center_id}")
    public void updateAdmin(@RequestBody Admin admin, @PathVariable Integer id, @PathVariable Integer center_id){
        adminService.updateAdmin(admin, id, center_id);
    }

    //Gestion des médecins des centres

    @GetMapping(path ="/readdoctors/{center_id}")
    public List<Doctor> getCenterDoctors(@PathVariable Integer center_id){
       return doctorService.findAllByCenterId(center_id);
    }

    @PostMapping(path = "/createdoctor/{center_id}", consumes = {"application/json"})
    public void createDoctor(@RequestBody Doctor doctor, @PathVariable Integer center_id){
        VaccinationCenter center = centerRepository.findOneById(center_id);
        doctor.setCenter(center);
        doctor.setRole("doctor");
        doctorService.createDoctor(doctor);
    }

    @DeleteMapping(path = "/deletedoctor/{id}")
    public void deleteDoctor(@PathVariable Integer id){
        doctorService.deleteDoctor(id);
    }

    @PutMapping(path = "/updatedoctor/{id}/{center_id}")
    public void updateDoctor(@RequestBody Doctor doctor, @PathVariable Integer id, @PathVariable Integer center_id){
        doctorService.updateDoctor(doctor, id, center_id);
    }


    // Gestion des Super Admins

    @PostMapping(path = "/createsuperadmin", consumes = {"application/json"})
    public void createSuperAdmin(@RequestBody SuperAdmin superAdmin){
        superAdmin.setRole("superadmin");
        superAdminService.createSuperAdmin(superAdmin);
    }

    @GetMapping(path ="/readsuperadmins")
    public List<SuperAdmin> getAllSuperAdmins(){
         return superAdminService.findAll();
    }

    @DeleteMapping(path = "/deletesuperadmin/{id}")
    public void deleteSuperAdmin(@PathVariable Integer id){
        superAdminService.deleteSuperAdmin(id);
    }

    @PutMapping(path = "/updatesuperadmin/{id}")
    public void updateSuperAdmin(@RequestBody SuperAdmin superAdmin, @PathVariable Integer id){
        superAdminService.updateSuperAdmin(superAdmin, id);
    }


    
}


