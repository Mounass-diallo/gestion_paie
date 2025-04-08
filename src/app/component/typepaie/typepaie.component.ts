import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TypeDePaie } from 'src/app/model/type-de-paie';
import { TypepaieService } from 'src/app/service/typepaie.service';

@Component({
  selector: 'app-typepaie',
  templateUrl: './typepaie.component.html',
  styleUrls: ['./typepaie.component.css']
})
export class TypepaieComponent implements OnInit {

  typeDetail !: FormGroup;
  typeObj : TypeDePaie = new TypeDePaie();
  typeList : TypeDePaie[] = [];

  constructor(private formBuilder : FormBuilder, private typeService : TypepaieService) { }

  ngOnInit(): void {

    this.getAllTypePaie();

    this.typeDetail = this.formBuilder.group({
      id : [''],
      name : ['']
     
      
      
    });    

  }

  addTypePaie() {
    console.log(this.typeDetail);
    this.typeObj.id = this.typeDetail.value.id;
    this.typeObj.name = this.typeDetail.value.name;
   

    this.typeService.addTypePaie(this.typeObj).subscribe(res=>{
      console.log(res);
      this.getAllTypePaie();
  },err=>{
      console.log(err);
    });

  }

  getAllTypePaie() {
    this.typeService.getAllTypePaie().subscribe(res=>{
        this.typeList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editTypePaie(type : TypeDePaie) {
    this.typeDetail.controls['id'].setValue(type.id);
    this.typeDetail.controls['name'].setValue(type.name);
  
   

  }

  updateTypePaie() {

    this.typeObj.id = this.typeDetail.value.id;
    this.typeObj.name = this.typeDetail.value.name;
    
    this.typeService.updateTypePaie(this.typeObj).subscribe(res=>{
      console.log(res);
      this.getAllTypePaie();
    },err=>{
      console.log(err);
    })

  }

  deleteTypePaie(type : TypeDePaie) {

    this.typeService.deleteTypePaie(type).subscribe(res=>{
      console.log(res);
      alert('typepaie deleted successfully');
      this.getAllTypePaie();
    },err => {
      console.log(err);
    });

  }
}
