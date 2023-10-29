import { Component } from '@angular/core';
import { User } from '../authentification/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-superadmin',
  templateUrl: './create-superadmin.component.html',
  styleUrls: ['./create-superadmin.component.scss']
})
export class CreateSuperadminComponent {

  superAdmin: User = {
    id: 0,
    fname: '',
    lname: '',
    mail: '',
    password: '',
    phone: '',
    role:'superadmin'
  }

  emptyfname?: boolean;
  emptylname?: boolean;
  emptymail?: boolean;
  emptypassword?: boolean;
  emptyphone?: boolean;
  emptymsg?: string;
  superAdminCreated = false;

  constructor(private service: UserService){}

  createSuperAdmin(){
    if(this.superAdmin.fname != "" && this.superAdmin.lname != "" && this.superAdmin.mail != "" && this.superAdmin.password != "" && this.superAdmin.phone != ""){
      this.service.createSuperAdmin(this.superAdmin).subscribe();
      this.superAdminCreated = true;
    }

    else{
      if(this.superAdmin.fname == ""){
        this.emptyfname = true;
      }
      else{
        this.emptyfname = false;
      }

      if(this.superAdmin.lname == ""){
        this.emptylname = true;
      }
      else{
        this.emptylname = false;
      }
      
      if(this.superAdmin.mail == ""){
        this.emptymail = true;
      }
      else{
        this.emptymail = false;
      }

      if(this.superAdmin.password == ""){
        this.emptypassword = true;
      }
      else{
        this.emptypassword = false;
      }

      if(this.superAdmin.phone == ""){
        this.emptyphone = true;
      }
      else{
        this.emptyphone = false;
      }
      this.emptymsg = "Veuillez remplir tous les champs pour créer le super administrateur";
    }
  }
}
