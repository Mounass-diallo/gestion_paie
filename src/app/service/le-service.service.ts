import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeService } from '../model/le-service';
@Injectable({
  providedIn: 'root'
})
export class LeServiceService {

  addLeservURL : string;
  getLeservURL : string;
  updateLeservUrl : string;
  deleteLeservUrl : string;

  constructor(private http : HttpClient) {

    this.addLeservURL = 'http://localhost:2000/serv/addLeService';
    this.getLeservURL = 'http://localhost:2000/serv/getAll';
    this.updateLeservUrl = 'http://localhost:2000/serv/updateLeService';
    this.deleteLeservUrl = 'http://localhost:2000/serv/deleteLeServiceById';

   }

   addLeService(serv : LeService): Observable<LeService> {
     return this.http.post<LeService>(this.addLeservURL,serv);
   }

   getAllLeService(): Observable<LeService[]>{
     return this.http.get<LeService[]>(this.getLeservURL);
   }

   updateLeService(serv :LeService) : Observable<LeService>{
     return this.http.put<LeService>(this.updateLeservUrl, serv);
   }

   deleteLeService(serv : LeService) : Observable<LeService> {
     return this.http.delete<LeService>(this.deleteLeservUrl+'/'+serv.id);
   }
  }