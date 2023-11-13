import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../authentification/user';

@Component({
  selector: 'app-dashboard-sections',
  templateUrl: './dashboard-sections.component.html',
  styleUrls: ['./dashboard-sections.component.scss']
})
export class DashboardSectionsComponent implements OnInit {
  @Input() user!: User;

  constructor() {}

  public ngOnInit(): void {
      
  }

  hasRole(role: string) {
    return this.user?.role == role;
  }
  
}
