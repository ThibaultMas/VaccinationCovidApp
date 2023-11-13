import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../authentification/user';
import { faPlusCircle, faXmarkCircle, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  superadmins!: User[];
  showModal: boolean = false;
  selected?: User;

  plusIcon = faPlusCircle;
  xIcon = faXmarkCircle;
  modifyIcon = faPen;

  constructor(private service: UserService){}

  ngOnInit(): void {
      this.service.getSuperAdmins().subscribe(resultSuperAdmins=>{
        this.superadmins = resultSuperAdmins;
      })
  }

  deleteSuperAdmin(aSuperAdmin: User){
    this.selected = aSuperAdmin;
    this.showModal = true;
  }

  confirmDelete(){
    this.service.deleteSuperAdmin(this.selected!.id).subscribe();
    this.superadmins.splice(this.superadmins.indexOf(this.selected!), 1)
    this.showModal = false;
  }

  cancelDelete(){
    this.showModal = false;
  }

}
