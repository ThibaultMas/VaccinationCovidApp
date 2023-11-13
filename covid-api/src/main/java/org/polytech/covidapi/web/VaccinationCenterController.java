package org.polytech.covidapi.web;

import java.util.List;

import org.polytech.covidapi.domain.VaccinationCenter;
import org.polytech.covidapi.service.VaccinationCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VaccinationCenterController {
    @Autowired
    private VaccinationCenterService centerService;

    @GetMapping(path = "/api/public/centers")
    public List<VaccinationCenter> getAll(String city){
            if(city == null){
                return centerService.findAll();
            }
            return centerService.findAllByCityIgnoreCaseContaining(city);
        }
    
    @GetMapping(path= "/api/public/center/{id}")
        public VaccinationCenter getCenter(@PathVariable Integer id){
            return centerService.findOneById(id);
        }
    
    
    
    @PostMapping(path = "/api/public/createcenter", consumes = {"application/json"})
        public void createCenter(@RequestBody VaccinationCenter center){
            centerService.createCenter(center);
        }

}
