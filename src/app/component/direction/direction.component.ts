import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Direction } from 'src/app/model/direction';
import { DirectionService } from 'src/app/service/direction.service';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {
  direcDetail !: FormGroup;
  direcObj : Direction = new Direction();
  direcList : Direction[] = [];

  constructor(private formBuilder : FormBuilder, private direcService : DirectionService) { }

  ngOnInit(): void {
    this.getAllDirection();

    this.direcDetail = this.formBuilder.group({
      id : [''],
      name : [''],
          
    });
  }
  addDirection() {
    console.log(this.direcDetail);
    this.direcObj.id = this.direcDetail.value.id;
    this.direcObj.name = this.direcDetail.value.name;
    
   

    this.direcService.addDirection(this.direcObj).subscribe(res=>{
        console.log(res);
        this.getAllDirection();
    },err=>{
        console.log(err);
    });

}
getAllDirection() {
  this.direcService.getAllDirection().subscribe(res=>{
      this.direcList = res;
  },err=>{
    console.log("error while fetching data.")
  });
}
editDirection(direc : Direction) {
  this.direcDetail.controls['id'].setValue(direc.id);
  this.direcDetail.controls['name'].setValue(direc.name);

}
updateDirection() {

  this.direcObj.id = this.direcDetail.value.id;
  this.direcObj.name = this.direcDetail.value.name;

  this.direcService.updateDirection(this.direcObj).subscribe(res=>{
    console.log(res);
    this.getAllDirection();
  },err=>{
    console.log(err);
  })

}
deleteDirection(direc : Direction) {

  this.direcService.deleteDirection(direc).subscribe(res=>{
    console.log(res);
    alert('direction est supprimer avec succés');
    this.getAllDirection();
  },err => {
    console.log(err);
  });

}

}
