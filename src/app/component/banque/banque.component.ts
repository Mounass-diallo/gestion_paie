import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Banque } from 'src/app/model/banque';
import { BanqueService } from 'src/app/service/banque.service';

@Component({
  selector: 'app-banque',
  templateUrl: './banque.component.html',
  styleUrls: ['./banque.component.css']
})
export class BanqueComponent implements OnInit {
  banDetail !: FormGroup;
  banObj : Banque = new Banque();
  banList : Banque[] = [];


  constructor(private formBuilder : FormBuilder, private banService : BanqueService) { }

  ngOnInit(): void {

    this.getAllBanque();

    this.banDetail = this.formBuilder.group({
      id : [''],
      name : [''],
      agence: ['']
      
      
    });    

  }

  addBanque() {
    console.log(this.banDetail);
    this.banObj.id = this.banDetail.value.id;
    this.banObj.name = this.banDetail.value.name;
    // this.banObj.agence = this.banDetail.value.agence;
   

    this.banService.addBanque(this.banObj).subscribe(res=>{
      console.log(res);
      this.getAllBanque();
  },err=>{
      console.log(err);
    });

  }

  getAllBanque() {
    this.banService.getAllBanque().subscribe(res=>{
        this.banList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editBanque(ban : Banque) {
    this.banDetail.controls['id'].setValue(ban.id);
    this.banDetail.controls['name'].setValue(ban.name);
    // this.banDetail.controls['agence'].setValue(ban.agence);
   

  }

  updateBanque() {

    this.banObj.id = this.banDetail.value.id;
    this.banObj.name = this.banDetail.value.name;
    // this.banObj.agence = this.banDetail.value.agence;
    
    this.banService.updateBanque(this.banObj).subscribe(res=>{
      console.log(res);
      this.getAllBanque();
    },err=>{
      console.log(err);
    })

  }
  deleteBanque(ban : Banque) {

    this.banService.deleteBanque(ban).subscribe(res=>{
      console.log(res);
      alert('banque est supprimer avec succés');
      this.getAllBanque();
    },err => {
      console.log(err);
    });

  }

}