import { Component, OnInit } from '@angular/core';
import { User } from '../authentification/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-superadmin',
  templateUrl: './update-superadmin.component.html',
  styleUrls: ['./update-superadmin.component.scss']
})
export class UpdateSuperadminComponent implements OnInit {

  superAdmin?: User;

  superAdminUpdated = false;

  constructor(private route: ActivatedRoute, private userService: UserService){}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get("id"));
      this.userService.getUserById(id).subscribe(resultSuperAdmin=>{
        this.superAdmin = resultSuperAdmin;
      })
  }

  updateSuperAdmin(){
    if(this.superAdmin){
      this.userService.updateSuperAdmin(this.superAdmin.id, this.superAdmin).subscribe();
      this.superAdminUpdated = true;
    }
  }

}
