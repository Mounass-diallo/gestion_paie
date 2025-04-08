import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Civil } from 'src/app/model/civil';
import { Employee } from 'src/app/model/employee';
import { CivilService } from 'src/app/service/civil.service';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  empDetail !: FormGroup;
  empObj : Employee = new Employee();
  empList : Employee[] = [];
  civList : Civil[] = [];

  constructor(
              private formBuilder : FormBuilder, 
              private empService : EmployeeService, 
              private civService : CivilService,
              private route:Router
    ) { }

  ngOnInit(): void {
    this.getAllCivil();
    this.getAllEmployee();

    this.empDetail = this.formBuilder.group({
      id : [''],
      name : [''],
      email : [''],
      matricule: [''],
      numeroCNI: [''],
      civilId:[''],
      
      
    });    

  }

  addEmployee() {
    console.log(this.empDetail);
    this.empObj.id = this.empDetail.value.id;
    this.empObj.name = this.empDetail.value.name;
    this.empObj.email = this.empDetail.value.email;
    this.empObj.matricule = this.empDetail.value.matricule;
    this.empObj.numeroCNI = this.empDetail.value.numeroCNI;
    this.empObj.civilId = this.empDetail.value.civilId;
   

    this.empService.addEmployee(this.empObj).subscribe(res=>{
        console.log(res);
        this.getAllEmployee();
    },err=>{
        console.log(err);
    });

  }

  getAllEmployee() {
    this.empService.getAllEmployee().subscribe(res=>{
        this.empList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }
  getAllCivil() {
    this.civService.getAllCivil().subscribe(res=>{
        this.civList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editEmployee(emp : Employee) {
    this.empDetail.controls['id'].setValue(emp.id);
    this.empDetail.controls['name'].setValue(emp.name);
    this.empDetail.controls['email'].setValue(emp.email);
    this.empDetail.controls['matricule'].setValue(emp.matricule);
    this.empDetail.controls['numeroCNI'].setValue(emp.numeroCNI);
    this.empDetail.controls['civilId'].setValue(emp.civilId);

  }

  updateEmployee() {

    this.empObj.id = this.empDetail.value.id;
    this.empObj.name = this.empDetail.value.name;
    this.empObj.email = this.empDetail.value.email;
    this.empObj.matricule = this.empDetail.value.matricule;
    this.empObj.numeroCNI = this.empDetail.value.numeroCNI;
    this.empObj.civilId=this.empDetail.value.civilId,


    this.empService.updateEmployee(this.empObj).subscribe(res=>{
      console.log(res);
      this.getAllEmployee();
    },err=>{
      console.log(err);
    })

  }

  deleteEmployee(emp : Employee) {

    this.empService.deleteEmployee(emp).subscribe(res=>{
      console.log(res);
      alert('Employé est supprimer avec succés');
      this.getAllEmployee();
    },err => {
      console.log(err);
    });

  }
  FichePaie(id:number){
    this.empService.getEmployeeById(id).subscribe(res=>{
      this.empList = res;
      localStorage.setItem('fiche', JSON.stringify(this.empList));
      this.route.navigate(['/fichePaie']);
    },err=>{
      console.log(err);
    });
  }

}

