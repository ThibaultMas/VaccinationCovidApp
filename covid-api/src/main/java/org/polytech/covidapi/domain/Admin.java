package org.polytech.covidapi.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="admin")
public class Admin extends User{


    @ManyToOne
    @JoinColumn(name = "center_id")
    @JsonBackReference
    private VaccinationCenter center;

    public VaccinationCenter getCenter() {
        return center;
    }

    public void setCenter(VaccinationCenter center) {
        this.center = center;
    }



}
