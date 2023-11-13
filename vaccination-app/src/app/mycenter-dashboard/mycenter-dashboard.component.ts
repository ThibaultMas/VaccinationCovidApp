import { Component, OnInit } from '@angular/core';
import { faPlusCircle, faXmarkCircle, faPen } from '@fortawesome/free-solid-svg-icons';
import { User } from '../authentification/user';
import { VaccinationCenter } from '../vaccination-center-list/vaccination-center';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { VaccinationService } from '../vaccination.service';

@Component({
  selector: 'app-mycenter-dashboard',
  templateUrl: './mycenter-dashboard.component.html',
  styleUrls: ['./mycenter-dashboard.component.scss']
})
export class MycenterDashboardComponent implements OnInit{

    admin?: User;
    doctors?: User[];
    center?: VaccinationCenter;
    selected?: User;
    showModal: boolean = false;

    plusIcon = faPlusCircle;
    xIcon = faXmarkCircle;
    modifyIcon = faPen;

    constructor(private route: ActivatedRoute, private userService: UserService, private vaccinationService: VaccinationService){}

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get("id"));
        this.userService.getUserById(id).subscribe(resultAdmin=>{
          this.admin = resultAdmin;
        })
        this.userService.getDoctorsByAdminId(id).subscribe(resultDoctors=>{
          this.doctors = resultDoctors;
        });
        this.vaccinationService.getAdminCenter(id).subscribe(resultCenter=>{
          this.center = resultCenter;
        })
        
    }
}
