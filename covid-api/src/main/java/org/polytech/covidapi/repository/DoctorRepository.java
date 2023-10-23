package org.polytech.covidapi.repository;

import java.util.List;

import org.polytech.covidapi.domain.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer>{
    public Doctor findOneById(Integer doctor_id);
    public List<Doctor> findAllBycenter_id(Integer center_id);
}
