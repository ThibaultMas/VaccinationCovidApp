import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../authentification/user';

@Component({
  selector: 'app-dashboard-sections',
  templateUrl: './dashboard-sections.component.html',
  styleUrls: ['./dashboard-sections.component.scss']
})
export class DashboardSectionsComponent implements OnInit {
  @Input() user?: User;
  @Output() displayed1 = new EventEmitter();
  @Output() displayed2 = new EventEmitter();
  @Output() displayed3 = new EventEmitter();
  @Output() displayed4 = new EventEmitter();

  constructor() {}

  public ngOnInit(): void {
      
  }

  hasRole(role: string) {
    return this.user?.role == role;
  }

  show1(){
    this.displayed1.emit();
  }

  show2(){
    this.displayed2.emit();
  }

  show3(){
    this.displayed3.emit();
  }

  show4(){
    this.displayed4.emit();
  }
  
}
