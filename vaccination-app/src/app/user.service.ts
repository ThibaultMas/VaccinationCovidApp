import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './authentification/user';
import { VaccinationCenter } from './vaccination-center-list/vaccination-center';
import { Booking } from './vaccination-center/booking';

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

  createAdmin(center_id:Number, admin: User): Observable<User>{
    return this.http.post<User>("/api/private/superadmin/createadmin/"+center_id, admin, {headers: {'Content-Type': 'application/json'}});
  }

  deleteAdmin(id: number): Observable<User>{
    return this.http.delete<User>("/api/private/superadmin/deleteadmin/"+id);
  }

  updateAdmin(id:Number, center_id:Number, admin: User) : Observable<User>{
    return this.http.put<User>("/api/private/superadmin/updateadmin/"+id+"/"+center_id, admin, {headers: {'Content-Type': 'application/json'}})
  }

  createDoctor(center_id:Number, doctor: User): Observable<User>{
    return this.http.post<User>("/api/private/superadmin/createdoctor/"+center_id, doctor, {headers: {'Content-Type': 'application/json'}});
  }

  deleteDoctor(id: number): Observable<User>{
    return this.http.delete<User>("/api/private/superadmin/deletedoctor/"+id);
  }

  updateDoctor(id:Number, center_id:Number, doctor: User) : Observable<User>{
    return this.http.put<User>("/api/private/superadmin/updatedoctor/"+id+"/"+center_id, doctor, {headers: {'Content-Type': 'application/json'}})
  }

  getDoctorsByAdminId(id: Number) : Observable<User[]>{
    return this.http.get<User[]>("api/private/admin/readdoctors/"+id);
  }


}
