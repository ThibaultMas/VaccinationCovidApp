import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccinationCenterListComponent } from './vaccination-center-list/vaccination-center-list.component';
import { VaccinationCenterComponent } from './vaccination-center/vaccination-center.component';
import { PatientRegisteredComponent } from './patient-registered/patient-registered.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path: "centers", component: VaccinationCenterListComponent},
  {path: "centers/register/:id", component: VaccinationCenterComponent},
  {path: "registered", component: PatientRegisteredComponent},
  {path: "authentification", component: AuthentificationComponent},
  {path: "userdashboard/:id", component: UserDashboardComponent},
  {path: '', redirectTo: '/centers', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
