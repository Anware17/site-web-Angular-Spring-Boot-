import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ReservationTestPCRComponent } from './reservation-test-pcr/reservation-test-pcr.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateReservationTestPCRComponent } from './create-reservation-test-pcr/create-reservation-test-pcr.component';
import { NavbarComponent } from './accueil/navbar/navbar.component';
import { HomeComponent } from './accueil/home/home.component';
import { CountriesComponent } from './accueil/countries/countries.component';
import { DashboardCardComponent } from './accueil/dashboard-card/dashboard-card.component';
import { ViewGraphComponent } from './accueil/view-graph/view-graph.component';
import { InfoCovidComponent } from './accueil/info-covid/info-covid.component';
import { ChartsModule } from 'ng2-charts';
import { from } from 'rxjs';
import { ProtegeComponent } from './protege/protege.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { MatDialogModule,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { UserBoardComponent } from './user-board/user-board.component';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import { CreateLaboratoireComponent } from './create-laboratoire/create-laboratoire.component';
import { ListLaboratoireComponent } from './list-laboratoire/list-laboratoire.component';
import { UpdateLaboratoireComponent } from './update-laboratoire/update-laboratoire.component';
import { LaboeratoiresDetailsComponent } from './laboeratoires-details/laboeratoires-details.component';


//import { CountUpModule } from 'ngx-countup';
//import { GoogleChartsModule } from 'angular-google-charts';
//import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ReservationTestPCRComponent,
    CreateReservationTestPCRComponent,
    NavbarComponent,
    HomeComponent,
    CountriesComponent,
    DashboardCardComponent,
    ViewGraphComponent,
    InfoCovidComponent,
    ProtegeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    UserBoardComponent,
    AdminBoardComponent,
    CreateLaboratoireComponent,
    ListLaboratoireComponent,
    UpdateLaboratoireComponent,
    LaboeratoiresDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
   // GoogleChartsModule,
   // Ng2GoogleChartsModule,
    FormsModule,
    ChartsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    //CountUpModule
    
  ],
  providers: [ DatePipe,{ provide: MAT_DIALOG_DATA, useValue: {} ,},
    { provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
