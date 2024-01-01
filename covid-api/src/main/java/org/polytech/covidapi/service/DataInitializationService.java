package org.polytech.covidapi.service;

import org.polytech.covidapi.domain.Admin;
import org.polytech.covidapi.domain.Doctor;
import org.polytech.covidapi.domain.SuperAdmin;
import org.polytech.covidapi.domain.VaccinationCenter;
import org.polytech.covidapi.repository.AdminRepository;
import org.polytech.covidapi.repository.DoctorRepository;
import org.polytech.covidapi.repository.SuperAdminRepository;
import org.polytech.covidapi.repository.VaccinationCenterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;

@Service
public class DataInitializationService {
    
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    SuperAdminRepository superAdminRepository;
    @Autowired
    VaccinationCenterRepository centerRepository;
    @Autowired
    AdminRepository adminRepository;
    @Autowired
    DoctorRepository doctorRepository;

    @PostConstruct
    public void createDefaultSuperAdmin() {
        System.out.println("Creation du super admin par défaut...");
        SuperAdmin superAdmin = new SuperAdmin();
        superAdmin.setFname("Karl");
        superAdmin.setLname("Durand");
        superAdmin.setMail("default.superadmin@app.fr");
        superAdmin.setPassword(passwordEncoder.encode("defaultsuperadmin"));
        superAdmin.setPhone("0606030303 ");
        superAdmin.setRole("superadmin");
        superAdminRepository.save(superAdmin);
    }

    @PostConstruct
    public void createDefaultCenter() {
        System.out.println("Creation d'un centre de vaccination par défaut...");
        VaccinationCenter center = new VaccinationCenter();
        center.setCity("Dombasle sur Meurthe");
        center.setName("Salle des sports");
        center.setAddress("115 Av. du Général Leclerc");
        center.setPostal("54110");
        center.setPhone("0102030405");
        centerRepository.save(center);
    }

    @PostConstruct
    public void createDefaultAdmin() {
        System.out.println("Creation d'un admin par défaut...");
        Admin admin = new Admin();
        admin.setFname("Serge");
        admin.setLname("Lagrange");
        admin.setMail("default.admin@app.fr");
        admin.setPassword(passwordEncoder.encode("defaultadmin"));
        admin.setPhone("0808080808 ");
        admin.setRole("admin");
        VaccinationCenter center = centerRepository.findOneById(1);
        admin.setCenter(center);
        adminRepository.save(admin);
    }

    @PostConstruct
    public void createDefaultDoctor() {
        System.out.println("Creation d'un docteur par défaut...");
        Doctor doctor = new Doctor();
        doctor.setFname("Florence");
        doctor.setLname("Lair");
        doctor.setMail("default.doctor@app.fr");
        doctor.setPassword(passwordEncoder.encode("defaultdoctor"));
        doctor.setPhone("0104070808 ");
        doctor.setRole("doctor");
        VaccinationCenter center = centerRepository.findOneById(1);
        doctor.setCenter(center);
        doctorRepository.save(doctor);
    }
}
