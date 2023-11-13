import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccinationCenterListComponent } from './vaccination-center-list/vaccination-center-list.component';
import { VaccinationCenterComponent } from './vaccination-center/vaccination-center.component';
import { PatientRegisteredComponent } from './patient-registered/patient-registered.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { VaccinationCentersDashboardComponent } from './vaccination-centers-dashboard/vaccination-centers-dashboard.component';
import { CreateVaccinationCenterComponent } from './create-vaccination-center/create-vaccination-center.component';
import { UpdateVaccinationCenterComponent } from './update-vaccination-center/update-vaccination-center.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { UpdateSuperadminComponent } from './update-superadmin/update-superadmin.component';
import { CreateSuperadminComponent } from './create-superadmin/create-superadmin.component';
import { VaccinationCenterAdminsdoctorsComponent } from './vaccination-center-adminsdoctors/vaccination-center-adminsdoctors.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { MycenterDashboardComponent } from './mycenter-dashboard/mycenter-dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: "/centers", pathMatch:'full'},
  {path: "centers", component: VaccinationCenterListComponent},
  {path: "centers/register/:id", component: VaccinationCenterComponent},
  {path: "registered", component: PatientRegisteredComponent},
  {path: "authentification", component: AuthentificationComponent},
  {path: "userdashboard/:id", component: UserDashboardComponent,
    children: [{path: "sadmincenters", component: VaccinationCentersDashboardComponent},
               {path: "updatecenter/:centerid", component: UpdateVaccinationCenterComponent},
               {path: "centeradminsdoctors/:centerid", component: VaccinationCenterAdminsdoctorsComponent},
               {path: "createcenter", component: CreateVaccinationCenterComponent},
               {path: "configuration", component: ConfigurationComponent},
               {path: "updatesuperadmin/:id", component: UpdateSuperadminComponent},
               {path: "createsuperadmin", component: CreateSuperadminComponent},
               {path: "createadmin/:centerid", component: CreateAdminComponent},
               {path: "updateadmin/:id/:centerid", component: UpdateAdminComponent},
               {path: "createdoctor/:centerid", component: CreateDoctorComponent},
               {path: "updatedoctor/:id/:centerid", component:UpdateDoctorComponent},
               {path:"admincenter/:id", component:MycenterDashboardComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
