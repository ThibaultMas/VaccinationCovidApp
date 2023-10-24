import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit{

  user?: User;

  mail?: string;
  password?: string;

  mailerror?: boolean;
  passworderror?: boolean;
  errormsg?: string; 

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
     
  }

  logIn(){
    if(this.mail && this.password){
      this.errormsg = "";
      this.userService.getUserByMail(this.mail).subscribe(resultUser =>{
        this.user = resultUser;
        console.log(this.user);
        if(this.user){
          if(this.user.password == this.password){
            this.router.navigate(['userdashboard', this.user.id]);
          }
          
          else{
            this.errormsg = "Mot de passe incorrect"
          }
        }
  
        else {
          this.errormsg = "Aucun administrateur ou médecin ayant cet email n'a été trouvé";
        }
      })

    }

    else{
      if(this.mail == null){
        this.mailerror = true;
      }
      else{
        this.mailerror = false;
      }

      if(this.password == null){
        this.passworderror = true;
      }
      else{
        this.passworderror = false;
      }
      this.errormsg = "Veuillez remplir tous les champs pour vous connecter";
    }
  }


}
