import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  addEmpURL : string;
  getEmpURL : string;
  updateEmpUrl : string;
  deleteEmpUrl : string;
  getEmpByIdUrl :string;
  constructor(private http : HttpClient) {

    this.addEmpURL = 'http://localhost:2000/emp/addEmployee';
    this.getEmpURL = 'http://localhost:2000/emp/getAll';
    this.updateEmpUrl = 'http://localhost:2000/emp/updateEmployee';
    this.deleteEmpUrl = 'http://localhost:2000/emp/deleteEmployeeById';
    this.getEmpByIdUrl = 'http://localhost:2000/emp/getEmployeeByID';

   }

   addEmployee(emp : Employee): Observable<Employee> {
     return this.http.post<Employee>(this.addEmpURL,emp);
   }

   getAllEmployee(): Observable<Employee[]>{
     return this.http.get<Employee[]>(this.getEmpURL);
   }

   updateEmployee(emp :Employee) : Observable<Employee>{
     return this.http.put<Employee>(this.updateEmpUrl, emp);
   }

   deleteEmployee(emp : Employee) : Observable<Employee> {
     return this.http.delete<Employee>(this.deleteEmpUrl+'/'+emp.id);
   }
   getEmployeeById(id:number) : Observable<Employee[]> {
    return this.http.get<Employee[]>(this.getEmpByIdUrl+'/'+id);
  }
  

}

