import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Echellon } from 'src/app/model/echellon';
import { EchellonService } from 'src/app/service/echellon.service';

@Component({
  selector: 'app-echellon',
  templateUrl: './echellon.component.html',
  styleUrls: ['./echellon.component.css']
})
export class EchellonComponent implements OnInit {

  echDetail !: FormGroup;
  echObj : Echellon = new Echellon();
  echList : Echellon[] = [];

  constructor(private formBuilder : FormBuilder, private echService : EchellonService) { }

  ngOnInit(): void {

    this.getAllEchellon();

    this.echDetail = this.formBuilder.group({
      id : [''],
      name : [''],
     
     
      
      
    });    

  }

  addEchellon() {
    this.echObj.id = this.echDetail.value.id;
    this.echObj.name = this.echDetail.value.name;

   

    this.echService.addEchellon(this.echObj).subscribe(res=>{
      console.log(res);
      this.getAllEchellon();
  },err=>{
      console.log(err);
    });

  }

  getAllEchellon() {
    this.echService.getAllEchellon().subscribe(res=>{
        this.echList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editEchellon(ech : Echellon) {
    this.echDetail.controls['id'].setValue(ech.id);
    this.echDetail.controls['name'].setValue(ech.name);
    
  
   

  }

  updateEchellon() {

    this.echObj.id = this.echDetail.value.id;
    this.echObj.name = this.echDetail.value.name;
    
    this.echService.updateEchellon(this.echObj).subscribe(res=>{
      console.log(res);
      this.getAllEchellon();
    },err=>{
      console.log(err);
    })

  }

  deleteEchellon(ech : Echellon) {

    this.echService.deleteClasse(ech).subscribe(res=>{
      console.log(res);
      alert('echellon deleted successfully');
      this.getAllEchellon();
    },err => {
      console.log(err);
    });

  }
}