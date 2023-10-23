package org.polytech.covidapi.domain;


import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="vaccination_center")
public class VaccinationCenter {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String name;
    private String city;
    private String address;
    private String postal;
    private String phone;

    @OneToMany(mappedBy = "center")
    @JsonManagedReference
    private List<Patient> patients;

    @ManyToOne
    @JoinColumn(name = "super_admin_id")
    @JsonBackReference
    private SuperAdmin super_admin;

    @OneToMany(mappedBy = "center")
    @JsonManagedReference
    private List<Admin> admins;

    @OneToMany(mappedBy = "center")
    @JsonManagedReference
    private List<Doctor> doctors;


    public List<Patient> getPatients() {
        return patients;
    }
    public void setPatients(List<Patient> patients) {
        this.patients = patients;
    }
    public Integer getId() {
        return id;
    }
    public String getCity() {
        return city;
    }
    public String getAddress() {
        return address;
    }
    public String getPhone() {
        return phone;
    }
    public void setId(Integer center_id) {
        this.id = center_id;
    }
    public void setCity(String city) {
        this.city = city;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public SuperAdmin getSuper_admin() {
        return super_admin;
    }
    public void setSuper_admin(SuperAdmin super_admin) {
        this.super_admin = super_admin;
    }
    public List<Admin> getAdmins() {
        return admins;
    }
    public void setAdmins(List<Admin> admins) {
        this.admins = admins;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public List<Doctor> getDoctors() {
        return doctors;
    }
    public void setDoctors(List<Doctor> doctors) {
        this.doctors = doctors;
    }
    public String getPostal() {
        return postal;
    }
    public void setPostal(String postal) {
        this.postal = postal;
    }

  

   
}
