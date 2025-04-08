import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Corps } from 'src/app/model/corps';
import { CorpsService } from 'src/app/service/corps.service';

@Component({
  selector: 'app-corps',
  templateUrl: './corps.component.html',
  styleUrls: ['./corps.component.css']
})
export class CorpsComponent implements OnInit {

  coDetail !: FormGroup;
  coObj : Corps = new Corps();
  coList : Corps[] = [];

  constructor(private formBuilder : FormBuilder, private coService : CorpsService) { }

  ngOnInit(): void {

    this.getAllCorps();

    this.coDetail = this.formBuilder.group({
      id : [''],
      name : ['']
     
      
      
    });    

  }

  addCorps() {
    this.coObj.id = this.coDetail.value.id;
    this.coObj.name = this.coDetail.value.name;
   

    this.coService.addCorps(this.coObj).subscribe(res=>{
      console.log(res);
      this.getAllCorps();
  },err=>{
      console.log(err);
    });

  }

  getAllCorps() {
    this.coService.getAllCorps().subscribe(res=>{
        this.coList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editCorps(co : Corps) {
    this.coDetail.controls['id'].setValue(co.id);
    this.coDetail.controls['name'].setValue(co.name);
  
   

  }

  updateCorps() {

    this.coObj.id = this.coDetail.value.id;
    this.coObj.name = this.coDetail.value.name;
    
    this.coService.updateCorps(this.coObj).subscribe(res=>{
      console.log(res);
      this.getAllCorps();
    },err=>{
      console.log(err);
    })

  }

  deleteCorps(co : Corps) {

    this.coService.deleteCorps(co).subscribe(res=>{
      console.log(res);
      alert('Corps deleted successfully');
      this.getAllCorps();
    },err => {
      console.log(err);
    });

  }
}
