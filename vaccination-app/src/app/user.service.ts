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

  getSuperAdmins() : Observable<User[]>{
    return this.http.get<User[]>("api/private/superadmin/readsuperadmins");
  }

  deleteSuperAdmin(id: number): Observable<User>{
    return this.http.delete<User>("/api/private/superadmin/deletesuperadmin/"+id);
  }

  updateSuperAdmin(id:Number, superAdmin: User) : Observable<User>{
    return this.http.put<User>("/api/private/superadmin/updatesuperadmin/"+id, superAdmin, {headers: {'Content-Type': 'application/json'}})
  }

  createSuperAdmin(superAdmin: User): Observable<User>{
    return this.http.post<User>("/api/private/superadmin/createsuperadmin", superAdmin, {headers: {'Content-Type': 'application/json'}});
  }

}
