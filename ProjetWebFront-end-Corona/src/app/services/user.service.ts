import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User} from '../User';
import { DatePipe } from '@angular/common';

import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  private baseUrl = 'http://localhost:8082/api/utilisateurs/register';
  private baseUrl1 = 'http://localhost:8082/api/utilisateurs/login';
  islogin = false;
  admin = false;
  suser = false;
  choixmenu : string  = 'A';
  listData : User[];
  public dataForm:  FormGroup; 
  constructor(private http: HttpClient,private datePipe: DatePipe) { }
  login(username, password) {
     return this.http.post(`${this.baseUrl1}`,{username, password});
   }  
 
  getData(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
 
  createData(info: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, info);
  }
  
  updatedata(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
   
    return this.http.get(`${this.baseUrl}`);
  }
  transformDate(date){
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }
}
