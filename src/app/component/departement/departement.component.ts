import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Departement } from 'src/app/model/departement';
import { DepartementService } from 'src/app/service/departement.service';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  deparDetail !: FormGroup;
  deparObj : Departement = new Departement();
  deparList : Departement[] = [];

  constructor(private formBuilder : FormBuilder, private deparService : DepartementService) { }

  ngOnInit(): void {
    this.getAllDepartement();

    this.deparDetail = this.formBuilder.group({
      id : [''],
      name : [''],
          
    });
  }
  addDepartement() {
    console.log(this.deparDetail);
    this.deparObj.id = this.deparDetail.value.id;
    this.deparObj.name = this.deparDetail.value.name;
    
   

    this.deparService.addDepartement(this.deparObj).subscribe(res=>{
        console.log(res);
        this.getAllDepartement();
    },err=>{
        console.log(err);
    });

}
getAllDepartement() {
  this.deparService.getAllDepartement().subscribe(res=>{
      this.deparList = res;
  },err=>{
    console.log("error while fetching data.")
  });
}
editDepartement(depar : Departement) {
  this.deparDetail.controls['id'].setValue(depar.id);
  this.deparDetail.controls['name'].setValue(depar.name);

}
updateDepartement() {

  this.deparObj.id = this.deparDetail.value.id;
  this.deparObj.name = this.deparDetail.value.name;

  this.deparService.updateDepartement(this.deparObj).subscribe(res=>{
    console.log(res);
    this.getAllDepartement();
  },err=>{
    console.log(err);
  })

}
deleteDepartement(depar : Departement) {

  this.deparService.deleteDepartement(depar).subscribe(res=>{
    console.log(res);
    alert('département est supprimer avec succés');
    this.getAllDepartement();
  },err => {
    console.log(err);
  });

}
}