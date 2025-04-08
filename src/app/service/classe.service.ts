import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classe } from '../model/classe';
@Injectable({
  providedIn: 'root'
})
export class ClasseService {


  addClasURL : string;
  getClasURL : string;
  updateClasUrl : string;
  deleteClasUrl : string;

  constructor(private http : HttpClient) {

    this.addClasURL = 'http://localhost:2000/clas/addClasse';
    this.getClasURL = 'http://localhost:2000/clas/getAll';
    this.updateClasUrl = 'http://localhost:2000/clas/updateClasse';
    this.deleteClasUrl = 'http://localhost:2000/clas/deleteClasseById';

   }

   addClasse(clas : Classe): Observable<Classe> {
     return this.http.post<Classe>(this.addClasURL,clas);
   }

   getAllClasse(): Observable<Classe[]>{
     return this.http.get<Classe[]>(this.getClasURL);
   }

   updateClasse(clas :Classe) : Observable<Classe>{
     return this.http.put<Classe>(this.updateClasUrl, clas);
   }

   deleteClasse(clas : Classe) : Observable<Classe> {
     return this.http.delete<Classe>(this.deleteClasUrl+'/'+clas.id);
   }
  }