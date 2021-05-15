import { Component, OnInit } from '@angular/core';
import { ReservationTestService } from 'src/app/reservation-test.service';
import { ReservationTest } from  '../reservation-test' ;
@Component({
  selector: 'app-reservation-test-pcr',
  templateUrl: './reservation-test-pcr.component.html',
  styleUrls: ['./reservation-test-pcr.component.css']
})
export class ReservationTestPCRComponent implements OnInit {

  rendezVous: ReservationTest[] ;
  public listRes = [];
  constructor(private reservationTestService: ReservationTestService) { }

  ngOnInit(): void {
    this.getReservationsList();
    this.getReservationByID(1);
  }

  
  private getReservationsList(){
    this.reservationTestService.getReservationsList().subscribe(data => {
    this.rendezVous = data ;
    console.log(this.rendezVous);

  });
}
getReservationByID(id: number) {
  this.reservationTestService.getReservationListByID(id).subscribe((data: any) => {
    this.rendezVous=data;
    this.listRes.push(data);
    console.log(this.rendezVous);
    //this.isLoadingResults = false;
    }); 
}


}
