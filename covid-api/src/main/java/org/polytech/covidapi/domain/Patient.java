package org.polytech.covidapi.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="patient")
public class Patient {
   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   private Integer id;
   private String fname;
   private String lname;
   private String mail;
   private String phone;
   private String registration_date;
   @Column(columnDefinition = "boolean default false")
   private Boolean vaccinated = false;
   
   @ManyToOne
   @JoinColumn(name = "center_id")
   @JsonBackReference
   private VaccinationCenter center;
   

public String getFname() {
    return fname;
}
public void setFname(String fname) {
    this.fname = fname;
}
public String getLname() {
    return lname;
}
public void setLname(String lname) {
    this.lname = lname;
}
public String getMail() {
    return mail;
}
public void setMail(String mail) {
    this.mail = mail;
}
public String getPhone() {
    return phone;
}
public void setPhone(String phone) {
    this.phone = phone;
}

public VaccinationCenter getCenter() {
    return center;
}
public void setCenter(VaccinationCenter center) {
    this.center = center;
}
public Integer getId() {
    return id;
}
public void setId(Integer id) {
    this.id = id;
}
public Boolean getVaccinated() {
    return vaccinated;
}
public void setVaccinated(Boolean vaccinated) {
    this.vaccinated = vaccinated;
}
public String getRegistration_date() {
    return registration_date;
}
public void setRegistration_date(String registration_date) {
    this.registration_date = registration_date;
}
}
