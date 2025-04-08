import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Corps } from '../model/corps';
@Injectable({
  providedIn: 'root'
})
export class CorpsService {

  addCoURL : string;
  getCoURL : string;
  updateCoUrl : string;
  deleteCoUrl : string;

  constructor(private http : HttpClient) {

    this.addCoURL = 'http://localhost:2000/co/addCorp';
    this.getCoURL = 'http://localhost:2000/co/getAll';
    this.updateCoUrl = 'http://localhost:2000/co/updateCorp';
    this.deleteCoUrl = 'http://localhost:2000/co/deleteCorpById';

   }

   addCorps(co : Corps): Observable<Corps> {
     return this.http.post<Corps>(this.addCoURL,co);
   }

   getAllCorps(): Observable<Corps[]>{
     return this.http.get<Corps[]>(this.getCoURL);
   }

   updateCorps(co :Corps) : Observable<Corps>{
     return this.http.put<Corps>(this.updateCoUrl, co);
   }

   deleteCorps(co : Corps) : Observable<Corps> {
     return this.http.delete<Corps>(this.deleteCoUrl+'/'+co.id);
   }
  }