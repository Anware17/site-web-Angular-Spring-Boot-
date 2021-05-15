import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Laboratoire } from './laboratoire';
import {ReservationTest} from './reservation-test' ;
import { catchError, tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ReservationTestService {

  private baseURL ="http://localhost:8082/api/v1/reservation_testpcr";
  private LaboURL ="http://localhost:8082/api/v1/laboratoire";

  constructor(private httpClient: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getReservationsList() : Observable<ReservationTest[]>{
    return this.httpClient.get<ReservationTest[]>(`${this.baseURL}`);
    
  }

  getAllListLaboratoire(): Observable<Laboratoire[]> {
    return this.httpClient.get<Laboratoire[]>(`${this.LaboURL}`)
      .pipe(
        tap(cases => console.log('fetched Laboratoire')),
        catchError(this.handleError('getMessages', []))
      );
  }
  getReservationListByID(id: number): Observable<ReservationTest[]>{
    const url = `${this.baseURL}/${id}`;
    return this.httpClient.get<ReservationTest[]>(url).pipe(
      tap(_ => console.log(`fetched ReservationTest id=${id}`)),
      catchError(this.handleError<ReservationTest[]>(`getReservationTests id=${id}`))
    );
  }
  
  saveReservation(reservationtTest : ReservationTest): Observable<ReservationTest> {
    return this.httpClient.post<ReservationTest>(this.baseURL,reservationtTest) ;

  }



}
