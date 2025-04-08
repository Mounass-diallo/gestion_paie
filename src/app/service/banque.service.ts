
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Banque } from '../model/banque';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BanqueService {

  addBanURL : string;
  getBanURL : string;
  updateBanUrl : string;
  deleteBanUrl : string;

  constructor(private http : HttpClient) {

    this.addBanURL = 'http://localhost:2000/ban/addBanque';
    this.getBanURL = 'http://localhost:2000/ban/getAll';
    this.updateBanUrl = 'http://localhost:2000/ban/updateBanque';
    this.deleteBanUrl = 'http://localhost:2000/ban/deleteBanqueById';

   }

   addBanque(ban : Banque): Observable<Banque> {
     return this.http.post<Banque>(this.addBanURL,ban);
   }

   getAllBanque(): Observable<Banque[]>{
     return this.http.get<Banque[]>(this.getBanURL);
   }

   updateBanque(ban :Banque) : Observable<Banque>{
     return this.http.put<Banque>(this.updateBanUrl, ban);
   }

   deleteBanque(ban : Banque) : Observable<Banque> {
     return this.http.delete<Banque>(this.deleteBanUrl+'/'+ban.id);
   }
  }