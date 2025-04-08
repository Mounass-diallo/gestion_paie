import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Classe } from 'src/app/model/classe';
import { ClasseService } from 'src/app/service/classe.service';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {

  clasDetail !: FormGroup;
  clasObj : Classe = new Classe();
  clasList : Classe[] = [];
  constructor(private formBuilder : FormBuilder, private clasService : ClasseService) { }

  ngOnInit(): void {
    this.getAllClasse();

    this.clasDetail = this.formBuilder.group({
      id : [''],
      name : ['']
     
      
      
    });    

}
addClasse() {
  this.clasObj.id = this.clasDetail.value.id;
  this.clasObj.name = this.clasDetail.value.name;
 

  this.clasService.addClasse(this.clasObj).subscribe(res=>{
    console.log(res);
    this.getAllClasse();
},err=>{
    console.log(err);
  });

}
getAllClasse() {
  this.clasService.getAllClasse().subscribe(res=>{
      this.clasList = res;
  },err=>{
    console.log("error while fetching data.")
  });
}

editClasse(clas : Classe) {
  this.clasDetail.controls['id'].setValue(clas.id);
  this.clasDetail.controls['name'].setValue(clas.name);

 

}
updateClasse() {

  this.clasObj.id = this.clasDetail.value.id;
  this.clasObj.name = this.clasDetail.value.name;
  
  this.clasService.updateClasse(this.clasObj).subscribe(res=>{
    console.log(res);
    this.getAllClasse();
  },err=>{
    console.log(err);
  })

}

deleteClasse(clas : Classe) {

  this.clasService.deleteClasse(clas).subscribe(res=>{
    console.log(res);
    alert('Classe deleted successfully');
    this.getAllClasse();
  },err => {
    console.log(err);
  });

}
}
