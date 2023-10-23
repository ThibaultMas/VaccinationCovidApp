import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { VaccinationCenterComponent } from './vaccination-center/vaccination-center.component';
import { VaccinationCenterListComponent } from './vaccination-center-list/vaccination-center-list.component';
import { HttpClientModule} from '@angular/common/http';
import { PatientRegisteredComponent } from './patient-registered/patient-registered.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { DashboardSectionsComponent } from './dashboard-sections/dashboard-sections.component';
import { VaccinationCentersDashboardComponent } from './vaccination-centers-dashboard/vaccination-centers-dashboard.component';
import { MycenterDashboardComponent } from './mycenter-dashboard/mycenter-dashboard.component';
import { PlanningComponent } from './planning/planning.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateVaccinationCenterComponent } from './create-vaccination-center/create-vaccination-center.component';

@NgModule({
  declarations: [
    AppComponent,
    VaccinationCenterComponent,
    VaccinationCenterListComponent,
    PatientRegisteredComponent,
    AuthentificationComponent,
    UserDashboardComponent,
    DashboardSectionsComponent,
    VaccinationCentersDashboardComponent,
    MycenterDashboardComponent,
    PlanningComponent,
    ConfigurationComponent,
    CreateVaccinationCenterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
