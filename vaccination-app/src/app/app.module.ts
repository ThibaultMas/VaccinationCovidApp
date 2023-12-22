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
import { UpdateVaccinationCenterComponent } from './update-vaccination-center/update-vaccination-center.component';
import { UpdateSuperadminComponent } from './update-superadmin/update-superadmin.component';
import { CreateSuperadminComponent } from './create-superadmin/create-superadmin.component';
import { VaccinationCenterAdminsdoctorsComponent } from './vaccination-center-adminsdoctors/vaccination-center-adminsdoctors.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';

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
    CreateVaccinationCenterComponent,
    UpdateVaccinationCenterComponent,
    UpdateSuperadminComponent,
    CreateSuperadminComponent,
    VaccinationCenterAdminsdoctorsComponent,
    CreateAdminComponent,
    CreateDoctorComponent,
    UpdateAdminComponent,
    UpdateDoctorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    CommonModule

  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'fr-FR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
