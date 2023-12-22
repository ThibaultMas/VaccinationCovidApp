package org.polytech.covidapi.web;

import org.polytech.covidapi.domain.Patient;
import org.polytech.covidapi.domain.VaccinationCenter;
import org.polytech.covidapi.service.DoctorService;
import org.polytech.covidapi.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/private/doctor")

public class DoctorController {
    @Autowired
    private PatientService patientService;
    @Autowired
    private DoctorService doctorService;

    @PutMapping(path = "/updatepatientstatus/{id}")
    public void updateDoctor(@RequestBody Patient patient, @PathVariable Integer id){
        patientService.updatePatient(patient, id);
    }

    @GetMapping(path= "/doctorcenter/{id}")
        public VaccinationCenter getDoctorCenter(@PathVariable Integer id){
            return doctorService.getDoctorCenter(id);
        }
}
