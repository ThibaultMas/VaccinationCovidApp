import { Component, OnInit } from '@angular/core';
import { User } from '../authentification/user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  user?: User;

  logoutIcon = faRightFromBracket;

  constructor(private route: ActivatedRoute, private userService: UserService) {}
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.userService.getUserById(id).subscribe(resultUser=>{
      this.user = resultUser;
    })
  }
  
}
