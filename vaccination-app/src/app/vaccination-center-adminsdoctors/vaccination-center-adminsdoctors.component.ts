import { Component, OnInit } from '@angular/core';
import { User } from '../authentification/user';
import { faPlusCircle, faXmarkCircle, faPen } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { VaccinationService } from '../vaccination.service';
import { VaccinationCenter } from '../vaccination-center-list/vaccination-center';

@Component({
  selector: 'app-vaccination-center-adminsdoctors',
  templateUrl: './vaccination-center-adminsdoctors.component.html',
  styleUrls: ['./vaccination-center-adminsdoctors.component.scss']
})
export class VaccinationCenterAdminsdoctorsComponent implements OnInit{

  admins?: User[];
  doctors?: User[];
  center?: VaccinationCenter;
  selected?: User;
  showModalA: boolean = false;
  showModalD: boolean = false;

  plusIcon = faPlusCircle;
  xIcon = faXmarkCircle;
  modifyIcon = faPen;

  constructor(private route: ActivatedRoute, private userService: UserService, private vaccinationService: VaccinationService){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("centerid"));
    this.vaccinationService.getAdminsByCenterId(id).subscribe(resultAmdins=>{
      this.admins = resultAmdins;
    })
    this.vaccinationService.getDoctorsByCenterId(id).subscribe(resultDoctors=>{
      this.doctors = resultDoctors;
    })
    this.vaccinationService.getCenterById(id).subscribe(resultCenter=>{
      this.center = resultCenter;
    })
  }

  deleteAdmin(aAdmin: User){
    this.selected = aAdmin;
    this.showModalA = true;
  }

  deleteDoctor(aDoctor: User){
    this.selected = aDoctor;
    this.showModalD = true;
  }

  cancelAdminDelete(){
    this.showModalA = false;
  }

  cancelDoctorDelete(){
    this.showModalD = false;
  }

  confirmAdminDelete(){
    this.userService.deleteAdmin(this.selected!.id).subscribe();
    this.admins?.splice(this.admins.indexOf(this.selected!), 1);
    this.showModalA=false
  }

  confirmDoctorDelete(){
    this.userService.deleteDoctor(this.selected!.id).subscribe();
    this.doctors?.splice(this.doctors.indexOf(this.selected!), 1);
    this.showModalD=false
  }


}
