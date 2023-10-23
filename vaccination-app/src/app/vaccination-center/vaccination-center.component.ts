import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VaccinationService } from '../vaccination.service';
import { Booking } from './booking';
import { VaccinationCenter } from '../vaccination-center-list/vaccination-center';

@Component({
  selector: 'app-vaccination-center',
  templateUrl: './vaccination-center.component.html',
  styleUrls: ['./vaccination-center.component.scss']
})
export class VaccinationCenterComponent implements OnInit {

  @Input() center?: VaccinationCenter;
  @Output() deleted = new EventEmitter<VaccinationCenter>();

  booking: Booking = {
    id: 0,
    fname: '',
    lname: '',
    mail: '',
    phone: '',
    registration_date: ''
  };

  emptyfname?: boolean;
  emptylname?: boolean;
  emptymail?: boolean;
  emptyphone?: boolean;
  emptydate?: boolean;
  emptymsg?: string;

  constructor(private route: ActivatedRoute, private vaccinationService: VaccinationService, private router: Router) {}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get("id"));
      this.vaccinationService.getCenterById(id).subscribe(resultCenter=>{
        this.center = resultCenter;
      })
  }

  clearName(){
    if(this.center){
      this.center.name = "";
    }
  }
  
  delete(){
    this.deleted.emit(this.center);
  }

  saveBooking(){
    if(this.center){
      if(this.booking.fname != "" && this.booking.lname != "" && this.booking.mail != "" && this.booking.phone != "" && this.booking.registration_date != ""){
        this.vaccinationService.createBooking(this.center.id, this.booking).subscribe();
        this.router.navigate(['registered'])
      }

      else{
        if(this.booking.fname == ""){
          this.emptyfname = true;
        }
        else{
          this.emptyfname = false;
        }

        if(this.booking.lname == ""){
          this.emptylname = true;
        }
        else{
          this.emptylname = false;
        }
        
        if(this.booking.mail == ""){
          this.emptymail = true;
        }
        else{
          this.emptymail = false;
        }

        if(this.booking.phone == ""){
          this.emptyphone = true;
        }
        else{
          this.emptyphone = false;
        }

        if(this.booking.registration_date == ""){
          this.emptydate = true;
        }
        else{
          this.emptydate = false;
        }
        this.emptymsg = "Veuillez remplir tous les champs pour finaliser votre enregistrement";
      }
    }
  }

}
