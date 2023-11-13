import { Component, OnInit } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center-list/vaccination-center';
import { User } from '../authentification/user';
import { VaccinationService } from '../vaccination.service';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.scss']
})
export class UpdateDoctorComponent implements OnInit{

  center!: VaccinationCenter;
  selectedCenter!: VaccinationCenter;
  centers!: VaccinationCenter[];
  doctor?: User

  
  doctorUpdated = false;

  constructor(private route:ActivatedRoute, private centerService: VaccinationService, private userService: UserService){}

  ngOnInit(): void {
      const center_id = Number(this.route.snapshot.paramMap.get("centerid"));
      const id = Number(this.route.snapshot.paramMap.get("id"));
      this.userService.getUserById(id).subscribe(resultDoctor=>{
        this.doctor = resultDoctor;
      })
      this.centerService.getCenterById(center_id).subscribe(resultCenter=>{
        this.center = resultCenter;
      })

      this.centerService.getAllVaccinationCenter().subscribe(resultCenters=>{
        this.centers = resultCenters;
      })

      this.selectedCenter = this.center;
      

  }

  updateDoctor(){
    if(this.doctor){
      this.userService.updateDoctor(this.doctor.id, this.selectedCenter.id, this.doctor).subscribe()
      this.doctorUpdated = true;
    }
  }
}
