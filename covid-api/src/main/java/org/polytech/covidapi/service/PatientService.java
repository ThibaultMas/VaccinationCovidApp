package org.polytech.covidapi.service;


import java.util.Collections;
import java.util.List;

import org.polytech.covidapi.domain.Admin;
import org.polytech.covidapi.domain.Patient;
import org.polytech.covidapi.repository.AdminRepository;
import org.polytech.covidapi.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class PatientService {
    @Autowired
    private PatientRepository patientRepository;
    @Autowired
    private AdminRepository adminRepository;

    public void save(Patient patient){
        patientRepository.save(patient);
    }

    public void deletePatient(Integer patient_id){
        Patient patient = patientRepository.findOneById(patient_id);
        patientRepository.delete(patient);
    }

    public void updatePatient(Patient patient, Integer id){
        Patient patientdb = patientRepository.findOneById(id);
        patientdb.setVaccinated(patient.getVaccinated());
        patientRepository.save(patientdb);
    }

    public List<Patient> findAllByLName(String lname){
        return patientRepository.findAllBylname(lname);
    }

    public List<Patient> findAllByCenterId(Integer center_id){
        return patientRepository.findAllBycenter_id(center_id);
    }

    public List<Patient> findAllByCenterIdAndLNameIgnoreCaseContaining(Integer center_id, String lname){
        return patientRepository.findAllBycenter_idAndLnameIgnoreCaseContaining(center_id, lname);
    }

    public List<Patient> findAll(){
        return patientRepository.findAll();
    }

    public Patient findOneById(Integer patient_id){
        return patientRepository.findOneById(patient_id);
    }

      public List<Patient> getAdminPatients(Integer admin_id){
        Admin admin = adminRepository.findOneById(admin_id);
        if(admin.getCenter() != null){
            return admin.getCenter().getPatients();
        }
        return Collections.emptyList();
    }

}
