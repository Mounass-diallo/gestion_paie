import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ModeDePaiement } from '../model/mode-de-paiement';
@Injectable({
  providedIn: 'root'
})
export class ModedepaieService {
  addModepaieURL : string;
  getModepaieURL : string;
  updateModepaieUrl : string;
  deleteModepaieUrl : string;

  constructor(private http : HttpClient) {

    this.addModepaieURL = 'http://localhost:2000/modepaie/addModepaiement';
    this.getModepaieURL = 'http://localhost:2000/modepaie/getAll';
    this.updateModepaieUrl = 'http://localhost:2000/modepaie/updateModepaiement';
    this.deleteModepaieUrl = 'http://localhost:2000/modepaie/deleteModepaiementById';

   }

   addModeDePaiement(modepaie : ModeDePaiement): Observable<ModeDePaiement> {
     return this.http.post<ModeDePaiement>(this.addModepaieURL,modepaie);
   }

   getAllModeDePaiement(): Observable<ModeDePaiement[]>{
     return this.http.get<ModeDePaiement[]>(this.getModepaieURL);
   }

   updateModeDePaiement(modepaie :ModeDePaiement) : Observable<ModeDePaiement>{
     return this.http.put<ModeDePaiement>(this.updateModepaieUrl, modepaie);
   }

   deleteModeDePaiement(modepaie : ModeDePaiement) : Observable<ModeDePaiement> {
     return this.http.delete<ModeDePaiement>(this.deleteModepaieUrl+'/'+modepaie.id);
   }
  }