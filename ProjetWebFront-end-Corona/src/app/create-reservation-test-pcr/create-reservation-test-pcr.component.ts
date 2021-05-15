import { Component, OnInit } from '@angular/core';
import { ReservationTest } from '../reservation-test';
import { Laboratoire } from '../laboratoire';
import{ReservationTestService} from '../reservation-test.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl, CheckboxControlValueAccessor  } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {LaboratoireService} from '../services/laboratoire.service';
@Component({
  selector: 'app-create-reservation-test-pcr',
  templateUrl: './create-reservation-test-pcr.component.html',
  styleUrls: ['./create-reservation-test-pcr.component.css']
})
export class CreateReservationTestPCRComponent implements OnInit {
  reservationTestPCR : ReservationTest = new ReservationTest();
  reservationPCR : ReservationTest[];
  //laboratoire : Laboratoire[];
  //laboratoire: FormGroup;
  //reservation: FormGroup;
  //reservation : ReservationTest[];

 laboratoire : Laboratoire = new Laboratoire();
 liLabIdLab : number ;
 reservation : ReservationTest = new ReservationTest();



  public listLab = [];

  public isLoadingResults = false;

  constructor( 
    private http: HttpClient,
    private resTestService:ReservationTestService,
    private _router: Router,
    private resLabService:LaboratoireService) { }

  getAllListLab()
  {
   this.resTestService.getAllListLaboratoire().subscribe((data: any) => {
     this.laboratoire=data;
     this.listLab.push(data);
     console.log(this.laboratoire);
     this.isLoadingResults = false;
     });
  }
   


  saveReservation() {
    this.resTestService.saveReservation(this.reservationTestPCR).subscribe(data=>{
      console.log('response',data);
      this._router.navigate['/reservationTestPCR'];})
  }




  ngOnInit(): void {
   this.getAllListLab();
  }

  onSubmitForm() {
    
  }


}
