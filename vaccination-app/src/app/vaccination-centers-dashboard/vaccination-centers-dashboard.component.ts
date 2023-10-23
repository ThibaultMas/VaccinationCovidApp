import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { VaccinationCenter } from '../vaccination-center-list/vaccination-center';
import { VaccinationService } from '../vaccination.service';

@Component({
  selector: 'app-vaccination-centers-dashboard',
  templateUrl: './vaccination-centers-dashboard.component.html',
  styleUrls: ['./vaccination-centers-dashboard.component.scss']
})
export class VaccinationCentersDashboardComponent implements OnInit {

  @Output() displayCreateCenter = new EventEmitter();

  searchIcon = faMagnifyingGlass;
  modifyIcon = faPen;
  usersIcon = faUsers;

  centers!: VaccinationCenter[];

  city?: string;

  constructor(private service: VaccinationService) {}

  ngOnInit(): void {
      this.getAllVaccinationCenter();
  }

  getAllVaccinationCenter(){
    this.service.getAllVaccinationCenter(this.city).subscribe(resultCenters=>{
      this.centers = resultCenters;
    })
  }

  showCreateCenter(){
    this.displayCreateCenter.emit();
  }
}
