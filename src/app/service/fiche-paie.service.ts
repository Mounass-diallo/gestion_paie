import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FichePaie } from '../model/fiche-paie';

@Injectable({
  providedIn: 'root'
})
export class FichePaieService {
  
  addFpURL : string;
  getFpURL : string;
  updateFpUrl : string;
  deleteFpUrl : string;

  constructor(private http : HttpClient) {
    this.addFpURL = 'http://localhost:2000/fp/addFichePaie';
    this.getFpURL = 'http://localhost:2000/fp/getAll';
    this.updateFpUrl = 'http://localhost:2000/fp/updateFichePaie';
    this.deleteFpUrl = 'http://localhost:2000/fp/deleteFichePaieById';
   }
   addFichePaie(fp : FichePaie): Observable<FichePaie> {
    return this.http.post<FichePaie>(this.addFpURL,fp);
  }

  getAllFichePaie(): Observable<FichePaie[]>{
    return this.http.get<FichePaie[]>(this.getFpURL);
  }

  updateFichePaie(fp :FichePaie) : Observable<FichePaie>{
    return this.http.put<FichePaie>(this.updateFpUrl, fp);
  }

  deleteFichePaie(fp : FichePaie) : Observable<FichePaie> {
    return this.http.delete<FichePaie>(this.deleteFpUrl+'/'+fp.id);
  }
  public getlistContratsByEmp(matricule:string){
    // const param: HttpParams = new HttpParams();
    // param.append("matricule", "2233456789")
    return this.http.get(`${this.getFpURL}/listContratsByEmp/${matricule}`)
    
  }
}
