import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contrat } from '../model/contrat';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  addConURL : string;
  getConURL : string;
  updateConUrl : string;
  deleteConUrl : string;
  constructor(private http : HttpClient) {
    this.addConURL = 'http://localhost:2000/con/addContrat';
    this.getConURL = 'http://localhost:2000/con/getAll';
    this.updateConUrl = 'http://localhost:2000/con/updateContrat';
    this.deleteConUrl = 'http://localhost:2000/con/deleteContratById';
   }
   addContrat(con : Contrat): Observable<Contrat> {
    return this.http.post<Contrat>(this.addConURL,con);
  }

  getAllContrat(): Observable<Contrat[]>{
    return this.http.get<Contrat[]>(this.getConURL);
  }

  updateContrat(con :Contrat) : Observable<Contrat>{
    return this.http.put<Contrat>(this.updateConUrl, con);
  }

  deleteContrat(con : Contrat) : Observable<Contrat> {
    return this.http.delete<Contrat>(this.deleteConUrl+'/'+con.id);
  }
}
