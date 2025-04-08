import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Direction } from '../model/direction';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {
  addDirecURL : string;
  getDirecURL : string;
  updateDirecUrl : string;
  deleteDirecUrl : string;

  constructor(private http : HttpClient) { 
    this.addDirecURL = 'http://localhost:2000/direc/addDirection';
    this.getDirecURL = 'http://localhost:2000/direc/getAll';
    this.updateDirecUrl = 'http://localhost:2000/direc/updateDirection';
    this.deleteDirecUrl = 'http://localhost:2000/direc/deleteDirectionById';
  }
  addDirection(direc : Direction): Observable<Direction> {
    return this.http.post<Direction>(this.addDirecURL,direc);
  }

  getAllDirection(): Observable<Direction[]>{
    return this.http.get<Direction[]>(this.getDirecURL);
  }

  updateDirection(direc :Direction) : Observable<Direction>{
    return this.http.put<Direction>(this.updateDirecUrl, direc);
  }

  deleteDirection(direc : Direction) : Observable<Direction> {
    return this.http.delete<Direction>(this.deleteDirecUrl+'/'+direc.id);
  }
 
}
