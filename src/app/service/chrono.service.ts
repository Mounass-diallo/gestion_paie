import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chrono } from '../model/chrono';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChronoService {

  addChURL : string;
  getChURL : string;
  updateChUrl : string;
  deleteChUrl : string;

  constructor(private http : HttpClient) {

    this.addChURL = 'http://localhost:2000/ch/addChrono';
    this.getChURL = 'http://localhost:2000/ch/getAll';
    this.updateChUrl = 'http://localhost:2000/ch/updateChrono';
    this.deleteChUrl = 'http://localhost:2000/ch/deleteChronoById';

   }

   addChrono(ch : Chrono): Observable<Chrono> {
     return this.http.post<Chrono>(this.addChURL,ch);
   }

   getAllChrono(): Observable<Chrono[]>{
     return this.http.get<Chrono[]>(this.getChURL);
   }

   updateChrono(ch :Chrono) : Observable<Chrono>{
     return this.http.put<Chrono>(this.updateChUrl, ch);
   }

   deleteChrono(ch : Chrono) : Observable<Chrono> {
     return this.http.delete<Chrono>(this.deleteChUrl+'/'+ch.id);
   }
  }