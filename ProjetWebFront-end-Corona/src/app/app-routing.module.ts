import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationTestPCRComponent } from './reservation-test-pcr/reservation-test-pcr.component';
import {CreateReservationTestPCRComponent} from './create-reservation-test-pcr/create-reservation-test-pcr.component';
import { HomeComponent } from './accueil/home/home.component';
import { CountriesComponent } from './accueil/countries/countries.component';
import {ViewGraphComponent} from './accueil/view-graph/view-graph.component';
import {InfoCovidComponent} from './accueil/info-covid/info-covid.component';
import { ProtegeComponent } from './protege/protege.component';
import {RegisterComponent}  from './user/register/register.component';
import {LoginComponent} from './user/login/login.component';
import {UserBoardComponent} from './user-board/user-board.component' ;
import {AdminBoardComponent} from './admin-board/admin-board.component';
import {CreateLaboratoireComponent} from './create-laboratoire/create-laboratoire.component';
import {ListLaboratoireComponent} from './list-laboratoire/list-laboratoire.component';
import {UpdateLaboratoireComponent} from './update-laboratoire/update-laboratoire.component';
import {LaboeratoiresDetailsComponent} from './laboeratoires-details/laboeratoires-details.component' ;
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path : 'reservationTestPCR', component : ReservationTestPCRComponent},
  {path : 'create-reservation-test-pcr', component : CreateReservationTestPCRComponent},
  {path : 'home' , component : HomeComponent},
  //{path : 'countries' , component :CountriesComponent },
  {path : 'protege', component :ProtegeComponent},
  {path : 'info-covid', component :InfoCovidComponent},
  {path : 'register', component :RegisterComponent},
{path: 'login', component: LoginComponent},
{path :'userBoard', component :UserBoardComponent},
{path : 'adminBoard', component : AdminBoardComponent},
{path : 'laboratoire',component : CreateLaboratoireComponent},
{path : 'laboratoires',component : ListLaboratoireComponent},
{path : 'laboratoire/:id', component : UpdateLaboratoireComponent },
{path : 'laboratoires-details/:id', component : LaboeratoiresDetailsComponent },
{path : '',component :ViewGraphComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
