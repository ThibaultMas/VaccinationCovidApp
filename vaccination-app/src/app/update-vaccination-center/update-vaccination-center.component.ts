import { Component, OnInit } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { VaccinationCenter } from '../vaccination-center-list/vaccination-center';
import { VaccinationService } from '../vaccination.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-vaccination-center',
  templateUrl: './update-vaccination-center.component.html',
  styleUrls: ['./update-vaccination-center.component.scss']
})
export class UpdateVaccinationCenterComponent implements OnInit {
  usersIcon = faUsers;
  
  center?: VaccinationCenter;

  centerUpdated = false;

  constructor(private route: ActivatedRoute, private vaccinationService: VaccinationService){}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get("id"));
      this.vaccinationService.getCenterById(id).subscribe(resultCenter=>{
        this.center = resultCenter;
      })
  }

    updateCenter(){
      if(this.center){
        this.vaccinationService.updateCenter(this.center.id, this.center).subscribe();
        this.centerUpdated = true;
      }

  }
}
