package org.polytech.covidapi.web;

import java.util.List;

import org.polytech.covidapi.domain.Doctor;
import org.polytech.covidapi.domain.Patient;
import org.polytech.covidapi.domain.VaccinationCenter;
import org.polytech.covidapi.service.DoctorService;
import org.polytech.covidapi.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/private/doctor")

public class DoctorController {
    @Autowired
    private DoctorService doctorService;
    @Autowired
    private PatientService patientService;

    @GetMapping(path = "/readpatients/{doctor_id}/{patient_lname}")
    public List<Patient> getPatientsByName(@PathVariable Integer doctor_id, @PathVariable String patient_lname){
        Doctor doctor = doctorService.findOneById(doctor_id);
        VaccinationCenter center = doctor.getCenter();
        Integer center_id = center.getId();
        return patientService.findAllByCenterIdAndLName(center_id, patient_lname);
    }

    @PutMapping(path = "/updatepatientstatus/{id}/{vaccinated}")
    public void updatePatient(@PathVariable Integer id, @PathVariable boolean vaccinated){
        patientService.updatePatient(id, vaccinated);
    }
}
