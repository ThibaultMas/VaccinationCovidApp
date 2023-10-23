import { Component } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-vaccination-center',
  templateUrl: './create-vaccination-center.component.html',
  styleUrls: ['./create-vaccination-center.component.scss']
})
export class CreateVaccinationCenterComponent {

  usersIcon = faUsers;
}
