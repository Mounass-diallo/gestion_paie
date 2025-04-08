import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Echellon } from '../model/echellon';
@Injectable({
  providedIn: 'root'
})
export class EchellonService {
 
  addEchURL : string;
  getEchURL : string;
  updateEchUrl : string;
  deleteEchUrl : string;

  constructor(private http : HttpClient) {

    this.addEchURL = 'http://localhost:2000/ech/addEchellon';
    this.getEchURL = 'http://localhost:2000/ech/getAll';
    this.updateEchUrl = 'http://localhost:2000/ech/updateEchellon';
    this.deleteEchUrl = 'http://localhost:2000/ech/deleteEchellonById';

   }

   addEchellon(ech : Echellon): Observable<Echellon> {
     return this.http.post<Echellon>(this.addEchURL,ech);
   }

   getAllEchellon(): Observable<Echellon[]>{
     return this.http.get<Echellon[]>(this.getEchURL);
   }

   updateEchellon(ech :Echellon) : Observable<Echellon>{
     return this.http.put<Echellon>(this.updateEchUrl, ech);
   }

   deleteClasse(ech : Echellon) : Observable<Echellon> {
     return this.http.delete<Echellon>(this.deleteEchUrl+'/'+ech.id);
   }
  }