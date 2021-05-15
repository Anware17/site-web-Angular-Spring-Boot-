import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Laboratoire } from '../laboratoire';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LaboratoireService {
  private baseURL = "http://localhost:8082/api/v1/laboratoire";
  constructor(private httpClient: HttpClient) { }


  getLabByNom(nom: String): Observable<Laboratoire>{
    return this.httpClient.get<Laboratoire>(`${this.baseURL}/${nom}`);
  }


   getLaboratoiresList(): Observable<Laboratoire[]>{
    return this.httpClient.get<Laboratoire[]>(`${this.baseURL}`);
  }

  createLaboratoire(laboratoire: Laboratoire): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, laboratoire);
  }

  getLaboratoireById(idLab: number): Observable<Laboratoire>{
    return this.httpClient.get<Laboratoire>(`${this.baseURL}/${idLab}`);
  }

  updateLaboratoire(idLab: number, laboratoire: Laboratoire): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${idLab}`, laboratoire);
  }

  deleteLaboratoire(idLab: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idLab}`);
  }
}
