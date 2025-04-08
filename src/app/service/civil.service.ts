import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Civil } from '../model/civil';

@Injectable({
  providedIn: 'root'
})
export class CivilService {
  addCivURL : string;
  getCivURL : string;
  updateCivUrl : string;
  deleteCivUrl : string;

  
  

  constructor(private http : HttpClient) {
    this.addCivURL = 'http://localhost:2000/civ/addCivil';
    this.getCivURL = 'http://localhost:2000/civ/getAll';
    this.updateCivUrl = 'http://localhost:2000/civ/updateCivil';
    this.deleteCivUrl = 'http://localhost:2000/civ/deleteCivilById';
  }
  addCivil(civ : Civil): Observable<Civil> {
    return this.http.post<Civil>(this.addCivURL,civ);
  }

  getAllCivil(): Observable<Civil[]>{
    return this.http.get<Civil[]>(this.getCivURL);
  }

  updateCivil(civ :Civil) : Observable<Civil>{
    return this.http.put<Civil>(this.updateCivUrl, civ);
  }

  deleteCivil(civ : Civil) : Observable<Civil> {
    return this.http.delete<Civil>(this.deleteCivUrl+'/'+civ.id);
  }
   }

