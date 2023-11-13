package org.polytech.covidapi.web;

import java.util.List;

import org.polytech.covidapi.domain.Admin;
import org.polytech.covidapi.domain.Doctor;
import org.polytech.covidapi.domain.Patient;
import org.polytech.covidapi.domain.VaccinationCenter;
import org.polytech.covidapi.repository.VaccinationCenterRepository;
import org.polytech.covidapi.service.AdminService;
import org.polytech.covidapi.service.DoctorService;
import org.polytech.covidapi.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/private/admin")
public class AdminController {
    @Autowired
    private PatientService patientService;
    @Autowired
    private DoctorService doctorService;
    @Autowired
    private AdminService adminService;
    @Autowired
    private VaccinationCenterRepository centerRepository;

    //Gestion des patients du centre de vaccination de l'admin (RD)
    
    @GetMapping(path ="/readpatients/{admin_id}")
    public List<Patient> getAllPatients(@PathVariable Integer admin_id){
         Admin admin= adminService.findOneById(admin_id);
         VaccinationCenter center = admin.getCenter();
         Integer center_id = center.getId();

         return patientService.findAllByCenterId(center_id);

    }

    @DeleteMapping(path = "/deletepatient/{admin_id}/{patient_id}")
    public void deletePatient(@PathVariable Integer admin_id, @PathVariable Integer patient_id){
        List<Patient> patients = patientService.getAdminPatients(admin_id);
        if(patients.contains(patientService.findOneById(patient_id))){
            System.out.println("Patient found for the given admin");
            patientService.deletePatient(patient_id);
        }
    }

    //Gestion des médecins du centre de vaccination de l'admin (CRUD)

    @PostMapping(path = "/createdoctor/{center_id}", consumes = {"application/json"})
    public void createDoctor(@RequestBody Doctor doctor, @PathVariable Integer center_id){
        VaccinationCenter center = centerRepository.findOneById(center_id);
        doctor.setCenter(center);
        doctor.setRole("doctor");
        doctorService.createDoctor(doctor);
    }

    @GetMapping(path = "/readdoctors/{admin_id}")
    public List<Doctor> getAllDoctors(@PathVariable Integer admin_id){
        Admin admin = adminService.findOneById(admin_id);
        VaccinationCenter center = admin.getCenter();
        Integer center_id = center.getId();

        return doctorService.findAllByCenterId(center_id);
    }

    @GetMapping(path= "/admincenter/{id}")
        public VaccinationCenter getAdminCenter(@PathVariable Integer id){
            return adminService.getAdminCenter(id);
        }

}