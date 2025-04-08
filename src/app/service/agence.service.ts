import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Agence } from '../model/agence';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {
  addAgenURL : string;
  getAgenURL : string;
  updateAgenUrl : string;
  deleteAgenUrl : string;

  constructor(private http : HttpClient) { 
    this.addAgenURL = 'http://localhost:2000/agen/addAgence';
    this.getAgenURL = 'http://localhost:2000/agen/getAllAgence';
    this.updateAgenUrl = 'http://localhost:2000/agen/updateAgence';
    this.deleteAgenUrl = 'http://localhost:2000/agen/deleteAgenceById';
  }
  addAgence(agen : Agence): Observable<Agence> {
    return this.http.post<Agence>(this.addAgenURL,agen);
  }

  getAllAgence(): Observable<Agence[]>{
    return this.http.get<Agence[]>(this.getAgenURL);
  }
  updateAgence(agen :Agence) : Observable<Agence>{
    return this.http.put<Agence>(this.updateAgenUrl, agen);
  }

  deleteAgence(agen : Agence) : Observable<Agence> {
    return this.http.delete<Agence>(this.deleteAgenUrl+'/'+agen.id);
  }

}
