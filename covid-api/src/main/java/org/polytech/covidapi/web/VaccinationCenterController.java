package org.polytech.covidapi.web;

import java.util.List;

import org.polytech.covidapi.domain.Patient;
import org.polytech.covidapi.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VaccinationCenterController {
    @Autowired
    private PatientService patientService;

    @GetMapping(path ="/api/private/readpatients/{center_id}")
    public List<Patient> getPatientsByName(@PathVariable Integer center_id, @RequestParam(name="lname", required = false) String patient_lname){

         if(patient_lname == null){
            return patientService.findAllByCenterId(center_id);
         }
         return patientService.findAllByCenterIdAndLNameIgnoreCaseContaining(center_id, patient_lname);

    }

}
