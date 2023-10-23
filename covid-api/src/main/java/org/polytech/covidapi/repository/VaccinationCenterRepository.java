package org.polytech.covidapi.repository;

import java.util.List;
import org.polytech.covidapi.domain.VaccinationCenter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VaccinationCenterRepository extends JpaRepository<VaccinationCenter, Integer>{
    public List<VaccinationCenter> findAllByCityIgnoreCaseContaining(String city);
    public VaccinationCenter findOneById(Integer center_id);
    
}
