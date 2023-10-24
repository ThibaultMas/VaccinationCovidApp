import { Component } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { VaccinationCenter } from '../vaccination-center-list/vaccination-center';
import { VaccinationService } from '../vaccination.service';

@Component({
  selector: 'app-create-vaccination-center',
  templateUrl: './create-vaccination-center.component.html',
  styleUrls: ['./create-vaccination-center.component.scss']
})
export class CreateVaccinationCenterComponent {

  usersIcon = faUsers;
  
  center: VaccinationCenter = {
    id: 0,
    name: '',
    address: '',
    city: '',
    postal: '',
    phone: ''
  }

  emptyname?: boolean;
  emptyaddress?: boolean;
  emptycity?: boolean;
  emptypostal?: boolean;
  emptyphone?: boolean;
  emptymsg?: string;
  centerCreated = false;

  constructor(private vaccinationService: VaccinationService){}

  createCenter(){
    if(this.center.name != "" && this.center.address != "" && this.center.city != "" && this.center.postal != "" && this.center.phone != ""){
      this.vaccinationService.createCenter(this.center).subscribe();
      this.centerCreated = true;
    }

    else{
      if(this.center.name == ""){
        this.emptyname = true;
      }
      else{
        this.emptyname = false;
      }

      if(this.center.address == ""){
        this.emptyaddress = true;
      }
      else{
        this.emptyaddress = false;
      }
      
      if(this.center.city == ""){
        this.emptycity = true;
      }
      else{
        this.emptycity = false;
      }

      if(this.center.postal == ""){
        this.emptypostal = true;
      }
      else{
        this.emptypostal = false;
      }

      if(this.center.phone == ""){
        this.emptyphone = true;
      }
      else{
        this.emptyphone = false;
      }
      this.emptymsg = "Veuillez remplir tous les champs pour créer le centre de vaccination";
    }
  }
  
}
