import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Civil } from 'src/app/model/civil';
import { CivilService } from 'src/app/service/civil.service';

@Component({
  selector: 'app-civil',
  templateUrl: './civil.component.html',
  styleUrls: ['./civil.component.css']
})
export class CivilComponent implements OnInit {
  civDetail !: FormGroup;
  civObj : Civil = new Civil();
  civList : Civil[] = [];

  constructor(private formBuilder : FormBuilder, private civService : CivilService) { }

  ngOnInit(): void {
    this.getAllCivil();

    this.civDetail = this.formBuilder.group({
      id : [''],
      name : [''],
          
    });
  }
  addCivil() {
    console.log(this.civDetail);
    this.civObj.id = this.civDetail.value.id;
    this.civObj.name = this.civDetail.value.name;
    
   

    this.civService.addCivil(this.civObj).subscribe(res=>{
        console.log(res);
        this.getAllCivil();
    },err=>{
        console.log(err);
    });

}
getAllCivil() {
  this.civService.getAllCivil().subscribe(res=>{
      this.civList = res;
  },err=>{
    console.log("error while fetching data.")
  });
}
editCivil(civ : Civil) {
  this.civDetail.controls['id'].setValue(civ.id);
  this.civDetail.controls['name'].setValue(civ.name);

}
updateCivil() {

  this.civObj.id = this.civDetail.value.id;
  this.civObj.name = this.civDetail.value.name;

  this.civService.updateCivil(this.civObj).subscribe(res=>{
    console.log(res);
    this.getAllCivil();
  },err=>{
    console.log(err);
  })

}
deleteCivil(civ : Civil) {

  this.civService.deleteCivil(civ).subscribe(res=>{
    console.log(res);
    alert('l etat civil est supprimer avec succés');
    this.getAllCivil();
  },err => {
    console.log(err);
  });

}
  }


