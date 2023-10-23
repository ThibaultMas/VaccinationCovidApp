package org.polytech.covidapi.service;

import java.util.List;

import org.polytech.covidapi.domain.VaccinationCenter;
import org.polytech.covidapi.repository.VaccinationCenterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VaccinationCenterService{
    @Autowired
    private VaccinationCenterRepository centerRepository;

    public void createCenter(VaccinationCenter center){
        centerRepository.save(center);
    }

    public void deleteCenter(Integer id){
        VaccinationCenter center = centerRepository.findOneById(id);
        centerRepository.delete(center);
    }

    public void updateCenter(VaccinationCenter center, Integer id){
        VaccinationCenter centerdb = centerRepository.findOneById(id);
        centerdb.setCity(center.getCity());
        centerdb.setName(center.getName());
        centerdb.setAddress(center.getAddress());
        centerdb.setPostal(center.getPostal());
        centerdb.setPhone(center.getPhone());
        centerRepository.save(centerdb);
    }

    public List<VaccinationCenter> findAllByCityIgnoreCaseContaining(String city){
        return centerRepository.findAllByCityIgnoreCaseContaining(city);
    }

    public List<VaccinationCenter> findAll(){
        return centerRepository.findAll();
    }

    public VaccinationCenter findOneById(Integer center_id){
        return centerRepository.findOneById(center_id);
    }


}