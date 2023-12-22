package org.polytech.covidapi.web;

import java.util.List;

import org.polytech.covidapi.domain.Patient;
import org.polytech.covidapi.domain.VaccinationCenter;
import org.polytech.covidapi.repository.VaccinationCenterRepository;
import org.polytech.covidapi.service.PatientService;
import org.polytech.covidapi.service.VaccinationCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/public/patient")
public class PatientController {
    @Autowired
    private PatientService patientService;
    @Autowired
    private VaccinationCenterService centerService;
    @Autowired
    private VaccinationCenterRepository centerRepository;

    @GetMapping(path = "/readcenters")
    public List<VaccinationCenter> getAll(@RequestParam(name = "city", required = false) String city){
        if(city == null){
           return centerService.findAll();
        }
        return centerService.findAllByCityIgnoreCaseContaining(city);
    }

    @GetMapping(path = "/center/{id}")
    public VaccinationCenter getCenterById(@PathVariable Integer id){
        return centerService.findOneById(id);
    }

    @PostMapping(path = "/pregister/{id}", consumes = {"application/json"})
        public void register(@PathVariable Integer id, @RequestBody Patient patient){
            VaccinationCenter center = centerRepository.findOneById(id);
            patient.setCenter(center);
            patientService.save(patient);
        }
}
