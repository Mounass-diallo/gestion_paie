import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departement } from '../model/departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  addDeparURL : string;
  getDeparURL : string;
  updateDeparUrl : string;
  deleteDeparUrl : string;

  constructor(private http : HttpClient) { 
    this.addDeparURL = 'http://localhost:2000/depar/addDepartement';
    this.getDeparURL = 'http://localhost:2000/depar/getAll';
    this.updateDeparUrl = 'http://localhost:2000/depar/updateDepartement';
    this.deleteDeparUrl = 'http://localhost:2000/depar/deleteDepartementById';
  }
  addDepartement(depar : Departement): Observable<Departement> {
    return this.http.post<Departement>(this.addDeparURL,depar);
  }

  getAllDepartement(): Observable<Departement[]>{
    return this.http.get<Departement[]>(this.getDeparURL);
  }

  updateDepartement(depar :Departement) : Observable<Departement>{
    return this.http.put<Departement>(this.updateDeparUrl, depar);
  }

  deleteDepartement(depar : Departement) : Observable<Departement> {
    return this.http.delete<Departement>(this.deleteDeparUrl+'/'+depar.id);
  }
 
}
