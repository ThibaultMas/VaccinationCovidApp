import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Booking } from './vaccination-center/booking';
import { VaccinationCenter } from './vaccination-center-list/vaccination-center';
import { User } from './authentification/user';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {

  constructor(private http: HttpClient) { }

  getAllVaccinationCenter(city?: string) : Observable<VaccinationCenter[]>{
    let params: { [key: string]: string } = {};
    if(city){
      params['city'] = city;
    }
    return this.http.get<VaccinationCenter[]>("/api/public/patient/readcenters", {
      params:params
    });
  }


  getCenterById(center_id: Number): Observable<VaccinationCenter> {
    return this.http.get<VaccinationCenter>("/api/public/center/"+center_id);
  }

  createBooking(center_id:Number, booking:Booking) : Observable<Booking>{
    return this.http.post<Booking>("/api/public/patient/pregister/"+center_id, booking, {headers: {'Content-Type': 'application/json'}});
  }

  createCenter(center:VaccinationCenter) : Observable<VaccinationCenter>{
    return this.http.post<VaccinationCenter>("/api/private/superadmin/createcenter", center, {headers: {'Content-Type': 'application/json'}});
  }

  updateCenter(center_id:Number, center:VaccinationCenter) : Observable<VaccinationCenter>{
    return this.http.put<VaccinationCenter>("/api/private/superadmin/updatecenter/"+center_id, center, {headers: {'Content-Type': 'application/json'}});
  }

  getAdminsByCenterId(center_id: number): Observable<User[]>{
    return this.http.get<User[]>("api/private/superadmin/readadmins/"+center_id);
  }

  getDoctorsByCenterId(center_id: number): Observable<User[]>{
    return this.http.get<User[]>("api/private/superadmin/readdoctors/"+center_id);
  }

  getAdminCenter(admin_id: Number) : Observable<VaccinationCenter>{
    return this.http.get<VaccinationCenter>("/api/private/admin/admincenter/"+admin_id);
  }


}
