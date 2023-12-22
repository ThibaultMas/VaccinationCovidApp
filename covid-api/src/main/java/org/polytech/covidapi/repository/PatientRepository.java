package org.polytech.covidapi.repository;

import java.util.List;

import org.polytech.covidapi.domain.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer> {
    public List<Patient> findAllBylname(String lname);
    public List<Patient> findAllBycenter_id(Integer center_id);
    public List<Patient> findAllBycenter_idAndLnameIgnoreCaseContaining(Integer center_id, String lname);
    public Patient findOneById(Integer id);
}
