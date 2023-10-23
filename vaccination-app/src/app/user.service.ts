import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './authentification/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserByMail(mail: string): Observable<User>{
    return this.http.get<User>("/api/private/auth/usermail/"+mail);
  }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>("/api/private/auth/userid/"+id);
  }

}
