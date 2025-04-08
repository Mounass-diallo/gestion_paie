import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LeService } from 'src/app/model/le-service';
import { LeServiceService } from 'src/app/service/le-service.service';

@Component({
  selector: 'app-leservice',
  templateUrl: './leservice.component.html',
  styleUrls: ['./leservice.component.css']
})
export class LeserviceComponent implements OnInit {
  servDetail !: FormGroup;
  servObj : LeService = new LeService();
  servList : LeService[] = [];

  constructor(private formBuilder : FormBuilder, private servService : LeServiceService) { }

  ngOnInit(): void {
    this.getAllLeService();

    this.servDetail = this.formBuilder.group({
      id : [''],
      name : [''],
      
      
    });  
  }
  addLeService() {
    console.log(this.servDetail);
    this.servObj.id = this.servDetail.value.id;
    this.servObj.name = this.servDetail.value.name;
   

    this.servService.addLeService(this.servObj).subscribe(res=>{
        console.log(res);
        this.getAllLeService();
    },err=>{
        console.log(err);
    });

  }
  getAllLeService() {
    this.servService.getAllLeService().subscribe(res=>{
        this.servList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }
  editLeService(serv : LeService) {
    this.servDetail.controls['id'].setValue(serv.id);
    this.servDetail.controls['name'].setValue(serv.name);
    

  }
  updateLeService() {

    this.servObj.id = this.servDetail.value.id;
    this.servObj.name = this.servDetail.value.name;


    this.servService.updateLeService(this.servObj).subscribe(res=>{
      console.log(res);
      this.getAllLeService();
    },err=>{
      console.log(err);
    })

  }
  deleteLeService(serv : LeService) {

    this.servService.deleteLeService(serv).subscribe(res=>{
      console.log(res);
      alert('Service est supprimer avec succés');
      this.getAllLeService();
    },err => {
      console.log(err);
    });

  }

}
