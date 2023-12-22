import { Component, OnInit } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center-list/vaccination-center';
import { ActivatedRoute } from '@angular/router';
import { VaccinationService } from '../vaccination.service';
import { UserService } from '../user.service';
import { User } from '../authentification/user';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Booking } from '../vaccination-center/booking';
import { DatePipe } from '@angular/common';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss'],
  providers: [DatePipe]
})
export class PlanningComponent implements OnInit{
  
  center?: VaccinationCenter;
  user?: User;
  patients?: Booking[];
  patient_lname?: string;
  selectedDate: Date = new Date();
  searchIcon = faMagnifyingGlass;

  checkIcon = faCheck;

  constructor(private route: ActivatedRoute, private vaccinationService: VaccinationService, private userService: UserService, private datePipe: DatePipe){}

  ngOnInit(): void{
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.userService.getUserById(id).subscribe(resultUser=>{
      this.user = resultUser;

      if(this.user.role == 'admin'){
        this.vaccinationService.getAdminCenter(this.user.id).subscribe(resultCenter=>{
          this.center = resultCenter;
        })
      }
  
      if(this.user.role == 'doctor'){
        this.vaccinationService.getDoctorCenter(this.user.id).subscribe(resultCenter=>{
          this.center = resultCenter;
        })
      }
    })

  }

  getPatients(){
    if(this.center){
      this.vaccinationService.getBookingByCenter(this.center?.id, this.patient_lname).subscribe(resultPatients=>{
        this.patients = resultPatients;
        const formattedDate = this.datePipe.transform(this.selectedDate, "dd/MM/yyyy")!;
        this.patients = resultPatients.filter(patient => this.isBookingOnDate(patient, formattedDate));
      })
    }
  }

  isBookingOnDate(booking: Booking, selectedDate: string): boolean {
    return booking.registration_date === selectedDate;
  }

  updatePatient(aPatient: Booking){
    aPatient.vaccinated = !aPatient.vaccinated;
    this.vaccinationService.updatePatient(aPatient.id, aPatient).subscribe();
  }


}
