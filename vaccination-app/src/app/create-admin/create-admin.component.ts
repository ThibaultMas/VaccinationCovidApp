import { Component, OnInit } from '@angular/core';
import { User } from '../authentification/user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { VaccinationService } from '../vaccination.service';
import { VaccinationCenter } from '../vaccination-center-list/vaccination-center';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.scss']
})
export class CreateAdminComponent implements OnInit{
  center!: VaccinationCenter;
  selectedCenter?: VaccinationCenter;
  centers!: VaccinationCenter[];
  admin: User = {
    id: 0,
    fname: '',
    lname: '',
    mail: '',
    password: '',
    phone: '',
    role:'admin'
  }

  emptyfname?: boolean;
  emptylname?: boolean;
  emptymail?: boolean;
  emptypassword?: boolean;
  emptyphone?: boolean;
  emptycenter?: boolean;
  emptymsg?: string;
  AdminCreated = false;

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

  createAdmin(){
    if(this.admin.fname != "" && this.admin.lname != "" && this.admin.mail != "" && this.admin.password != "" && this.admin.phone != "" && this.selectedCenter != undefined){
      this.userService.createAdmin(this.selectedCenter.id, this.admin).subscribe();
      this.AdminCreated = true;
    }

    else{
      if(this.admin.fname == ""){
        this.emptyfname = true;
      }
      else{
        this.emptyfname = false;
      }

      if(this.admin.lname == ""){
        this.emptylname = true;
      }
      else{
        this.emptylname = false;
      }
      
      if(this.admin.mail == ""){
        this.emptymail = true;
      }
      else{
        this.emptymail = false;
      }

      if(this.admin.password == ""){
        this.emptypassword = true;
      }
      else{
        this.emptypassword = false;
      }

      if(this.admin.phone == ""){
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
      this.emptymsg = "Veuillez remplir tous les champs pour créer l'administrateur";
    }
  }
}
