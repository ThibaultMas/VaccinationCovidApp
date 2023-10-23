import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Booking } from './vaccination-center/booking';
import { VaccinationCenter } from './vaccination-center-list/vaccination-center';

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


  getCenterById(id: Number): Observable<VaccinationCenter> {
    return this.http.get<VaccinationCenter>("/api/public/center/"+id);
  }

  createBooking(id:Number, booking:Booking) : Observable<Booking>{
    return this.http.post<Booking>("/api/public/patient/pregister/"+id, booking, {headers: {'Content-Type': 'application/json'}});
  }
}
