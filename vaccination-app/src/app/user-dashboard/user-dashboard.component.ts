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

  displayComponent1 = false;
  displayComponent2 = false;
  displayComponent3 = false;
  displayComponent4 = false;
  displayCreateCenter = false;

  logoutIcon = faRightFromBracket;

  constructor(private route: ActivatedRoute, private userService: UserService) {}
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.userService.getUserById(id).subscribe(resultUser=>{
      this.user = resultUser;
    })
  }

  showComponent1(){
    this.hideComponents();
    if(this.displayComponent1 == false){
      this.displayComponent1 = !this.displayComponent1;
    }
  }

  showComponent2(){
    this.hideComponents();
    if(this.displayComponent2 == false){
      this.displayComponent2 = !this.displayComponent2;
    }
  }

  showComponent3(){
    this.hideComponents();
    if(this.displayComponent3 == false){
      this.displayComponent3 = !this.displayComponent3;
    }
  }

  showComponent4(){
    this.hideComponents();
    if(this.displayComponent4 == false){
      this.displayComponent4 = !this.displayComponent4;
    }
  }

  showCreateCenter(){
    this.displayComponent1 = false;
    if(this.displayCreateCenter == false){
      this.displayCreateCenter = !this.displayCreateCenter;
    }
    
  }

  hideComponents(){
    this.displayComponent1 = this.displayComponent2 = this.displayComponent3
    = this.displayComponent4 = this.displayCreateCenter = false;
  }
  
}
