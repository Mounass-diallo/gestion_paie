import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeDePaie } from '../model/type-de-paie';
@Injectable({
  providedIn: 'root'
})
export class TypepaieService {


  addTypeURL : string;
  getTypeURL : string;
  updateTypeUrl : string;
  deleteTypeUrl : string;

  constructor(private http : HttpClient) {

    this.addTypeURL = 'http://localhost:2000/type/addTypepaie';
    this.getTypeURL = 'http://localhost:2000/type/getAll';
    this.updateTypeUrl = 'http://localhost:2000/type/updateTypepaie';
    this.deleteTypeUrl = 'http://localhost:2000/type/deleteTypepaieById';

   }

   addTypePaie(type : TypeDePaie): Observable<TypeDePaie> {
     return this.http.post<TypeDePaie>(this.addTypeURL,type);
   }

   getAllTypePaie(): Observable<TypeDePaie[]>{
     return this.http.get<TypeDePaie[]>(this.getTypeURL);
   }

   updateTypePaie(type :TypeDePaie) : Observable<TypeDePaie>{
     return this.http.put<TypeDePaie>(this.updateTypeUrl, type);
   }

   deleteTypePaie(Type : TypeDePaie) : Observable<TypeDePaie> {
     return this.http.delete<TypeDePaie>(this.deleteTypeUrl+'/'+Type.id);
   }
  }