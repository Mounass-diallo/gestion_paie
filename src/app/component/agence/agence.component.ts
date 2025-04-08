import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Agence } from 'src/app/model/agence';
import { Banque } from 'src/app/model/banque';
import { AgenceService } from 'src/app/service/agence.service';
import { BanqueService } from 'src/app/service/banque.service';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.css']
})
export class AgenceComponent implements OnInit {
  
  agenDetail !: FormGroup;
  agenObj : Agence = new Agence();
  agenList : Agence[] = [];
  banList : Banque[] = [];

  constructor(private formBuilder : FormBuilder, private agenService : AgenceService, private banService : BanqueService) { }

  ngOnInit(): void {
    
    this.getAllBanque();
    this.getAllAgence();

    this.agenDetail = this.formBuilder.group({
      id : [''],
      name : [''],
      banqueId:[''],

    });
  }
  addAgence() {
    console.log(this.agenDetail);
    this.agenObj.id = this.agenDetail.value.id;
    this.agenObj.name = this.agenDetail.value.name;
    this.agenObj.banqueId = this.agenDetail.value.banqueId;

    this.agenService.addAgence(this.agenObj).subscribe(res=>{
      console.log(res);
      this.getAllAgence();
  },err=>{
      console.log(err);
    });

  }
  getAllAgence() {
    this.agenService.getAllAgence().subscribe(res=>{
      this.agenList = res;
    },err=>{
      console.log("error while fetching data.");
    });
  }
  getAllBanque() {
    this.banService.getAllBanque().subscribe(res=>{
      this.banList = res;
    },err=>{
      console.log("error while fetching data.");
    });
  }
  editAgence(agen : Agence) {
    this.agenDetail.controls['id'].setValue(agen.id);
    this.agenDetail.controls['name'].setValue(agen.name);
    this.agenDetail.controls['banqueId'].setValue(agen.banqueId);
  }
  updateAgence() {

    this.agenObj.id = this.agenDetail.value.id;
    this.agenObj.name = this.agenDetail.value.name;
     this.agenObj.banqueId=this.agenDetail.value.banqueId,
    
    
    this.agenService.updateAgence(this.agenObj).subscribe(res=>{
      console.log(res);
      this.getAllAgence();
    },err=>{
      console.log(err);
    })

  }
  deleteAgence(agen : Agence) {

    this.agenService.deleteAgence(agen).subscribe(res=>{
      console.log(res);
      alert('agence est supprimer avec succés');
      this.getAllAgence();
    },err => {
      console.log(err);
    });

  }

}
