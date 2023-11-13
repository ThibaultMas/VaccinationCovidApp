import { Component, OnInit } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center-list/vaccination-center';
import { User } from '../authentification/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { VaccinationService } from '../vaccination.service';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.scss']
})
export class CreateDoctorComponent implements OnInit{

  center!: VaccinationCenter;
  selectedCenter?: VaccinationCenter;
  centers!: VaccinationCenter[];
  doctor: User = {
    id: 0,
    fname: '',
    lname: '',
    mail: '',
    password: '',
    phone: '',
    role:'doctor'
  }

  emptyfname?: boolean;
  emptylname?: boolean;
  emptymail?: boolean;
  emptypassword?: boolean;
  emptyphone?: boolean;
  emptycenter?: boolean;
  emptymsg?: string;
  DoctorCreated = false;

  constructor(private route:ActivatedRoute, private userService: UserService, private centerService: VaccinationService){}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get("centerid"));
      this.centerService.getCenterById(id).subscribe(resultCenter=>{
        this.center = resultCenter;
      })

      this.centerService.getAllVaccinationCenter().subscribe(resultCenters=>{
        this.centers = resultCenters;
      })
      
  }

  createDoctor(){
    if(this.doctor.fname != "" && this.doctor.lname != "" && this.doctor.mail != "" && this.doctor.password != "" && this.doctor.phone != "" && this.selectedCenter != undefined){
      this.userService.createDoctor(this.selectedCenter.id, this.doctor).subscribe();
      this.DoctorCreated = true;
    }

    else{
      if(this.doctor.fname == ""){
        this.emptyfname = true;
      }
      else{
        this.emptyfname = false;
      }

      if(this.doctor.lname == ""){
        this.emptylname = true;
      }
      else{
        this.emptylname = false;
      }
      
      if(this.doctor.mail == ""){
        this.emptymail = true;
      }
      else{
        this.emptymail = false;
      }

      if(this.doctor.password == ""){
        this.emptypassword = true;
      }
      else{
        this.emptypassword = false;
      }

      if(this.doctor.phone == ""){
        this.emptyphone = true;
      }
      else{
        this.emptyphone = false;
      }

      if(this.selectedCenter == undefined){
        this.emptycenter = true;
      }
      else{
        this.emptycenter = false;
      }
      this.emptymsg = "Veuillez remplir tous les champs pour créer le docteur";
    }
  }
}
