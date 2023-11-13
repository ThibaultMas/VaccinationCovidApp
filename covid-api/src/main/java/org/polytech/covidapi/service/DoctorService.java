package org.polytech.covidapi.service;

import java.util.Collections;
import java.util.List;

import org.polytech.covidapi.domain.Admin;
import org.polytech.covidapi.domain.Doctor;
import org.polytech.covidapi.domain.VaccinationCenter;
import org.polytech.covidapi.repository.AdminRepository;
import org.polytech.covidapi.repository.DoctorRepository;
import org.polytech.covidapi.repository.VaccinationCenterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DoctorService {
    @Autowired
    private DoctorRepository doctorRepository;
    @Autowired
    private AdminRepository adminRepository;
    @Autowired
    private VaccinationCenterRepository centerRepository;

    public void createDoctor(Doctor doctor){
        doctorRepository.save(doctor);
    }

    public void deleteDoctor(Integer id){
        Doctor doctor = doctorRepository.findOneById(id);
        doctorRepository.delete(doctor);
    }
    
    public void updateDoctor(Doctor doctor, Integer id, Integer center_id){
        Doctor doctordb = doctorRepository.findOneById(id);
        VaccinationCenter center = centerRepository.findOneById(center_id);
        doctordb.setFname(doctor.getFname());
        doctordb.setLname(doctor.getLname());
        doctordb.setMail(doctor.getMail());
        doctordb.setPassword(doctor.getPassword());
        doctordb.setPhone(doctor.getPhone());
        doctordb.setCenter(center);
        doctorRepository.save(doctordb);
    }

    public Doctor findOneById(Integer id){
        return doctorRepository.findOneById(id);
    }

    public List<Doctor> findAll(){
        return doctorRepository.findAll();
    }

    public List<Doctor> findAllByCenterId(Integer center_id){
        return doctorRepository.findAllBycenter_id(center_id);
    }

    public List<Doctor> getAdminDoctors(Integer admin_id){
        Admin admin = adminRepository.findOneById(admin_id);
        if(admin.getCenter() != null){
            return admin.getCenter().getDoctors();
        }
        return Collections.emptyList();
    }


}
