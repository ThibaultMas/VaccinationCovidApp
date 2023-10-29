package org.polytech.covidapi.domain;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "super_admin")
public class SuperAdmin extends User{

    @OneToMany(mappedBy = "super_admin")
    @JsonManagedReference
    private List<VaccinationCenter> centers;

    
    public List<VaccinationCenter> getCenters() {
        return centers;
    }
    
    public void setCenters(List<VaccinationCenter> centers) {
        this.centers = centers;
    }


}
