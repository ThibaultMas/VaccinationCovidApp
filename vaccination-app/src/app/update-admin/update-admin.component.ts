import { Component, OnInit } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center-list/vaccination-center';
import { User } from '../authentification/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { VaccinationService } from '../vaccination.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.scss']
})
export class UpdateAdminComponent implements OnInit{

  center!: VaccinationCenter;
  selectedCenter!: VaccinationCenter;
  centers!: VaccinationCenter[];
  admin?: User

  
  adminUpdated = false;

  constructor(private route:ActivatedRoute, private centerService: VaccinationService, private userService: UserService){}

  ngOnInit(): void {
      const center_id = Number(this.route.snapshot.paramMap.get("centerid"));
      const id = Number(this.route.snapshot.paramMap.get("id"));
      this.userService.getUserById(id).subscribe(resultAdmin=>{
        this.admin = resultAdmin;
      })
      this.centerService.getCenterById(center_id).subscribe(resultCenter=>{
        this.center = resultCenter;
      })

      this.centerService.getAllVaccinationCenter().subscribe(resultCenters=>{
        this.centers = resultCenters;
      })

      this.selectedCenter = this.center;
      

  }

  updateAdmin(){
    if(this.admin){
      this.userService.updateAdmin(this.admin.id, this.selectedCenter.id, this.admin).subscribe()
      this.adminUpdated = true;
    }
  }
  
  
}
