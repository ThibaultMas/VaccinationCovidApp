import { Component } from '@angular/core';
import { VaccinationService } from '../vaccination.service';
import { VaccinationCenter } from './vaccination-center';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vaccination-center-list',
  templateUrl: './vaccination-center-list.component.html',
  styleUrls: ['./vaccination-center-list.component.scss']
})
export class VaccinationCenterListComponent {

  centers!: VaccinationCenter[];
  
  selected?: VaccinationCenter;

  city?: string;

  searchIcon = faMagnifyingGlass;

  constructor(private service: VaccinationService) {}


  getAllVaccinationCenter(){
    this.service.getAllVaccinationCenter(this.city).subscribe(resultCenters=>{
      this.centers = resultCenters;
    })
  }

  isSpecialCenter(center: VaccinationCenter){
    return center.city == "Nancy";
  }

  selectCenter(center: VaccinationCenter){
    this.selected=center;
  }

  onDeleted(center: VaccinationCenter){
    delete this.selected;
    this.centers.splice(this.centers.indexOf(center), 1);
  }


}
