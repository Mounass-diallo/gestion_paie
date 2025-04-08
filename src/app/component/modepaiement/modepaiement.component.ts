import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModeDePaiement } from 'src/app/model/mode-de-paiement';
import { ModedepaieService } from 'src/app/service/modedepaie.service';

@Component({
  selector: 'app-modepaiement',
  templateUrl: './modepaiement.component.html',
  styleUrls: ['./modepaiement.component.css']
})
export class ModepaiementComponent implements OnInit {

  modepaieDetail !: FormGroup;
  modepaieObj : ModeDePaiement = new ModeDePaiement();
  modepaieList : ModeDePaiement[] = [];

  constructor(private formBuilder : FormBuilder, private modepaieService : ModedepaieService) { }

  ngOnInit(): void {

    this.getAllModeDePaiement();

    this.modepaieDetail = this.formBuilder.group({
      id : [''],
      name : ['']
     
      
      
    });    

  }

  addModeDePaiement() {
    console.log(this.modepaieDetail);
    this.modepaieObj.id = this.modepaieDetail.value.id;
    this.modepaieObj.name = this.modepaieDetail.value.name;

   

    this.modepaieService.addModeDePaiement(this.modepaieObj).subscribe(res=>{
      console.log(res);
      this.getAllModeDePaiement();
  },err=>{
      console.log(err);
    });

  }

  getAllModeDePaiement() {
    this.modepaieService.getAllModeDePaiement().subscribe(res=>{
        this.modepaieList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editModeDePaiement(modepaie : ModeDePaiement) {
    this.modepaieDetail.controls['id'].setValue(modepaie.id);
    this.modepaieDetail.controls['name'].setValue(modepaie.name);
    
   

  }

  updateModeDePaiement() {

    this.modepaieObj.id = this.modepaieDetail.value.id;
    this.modepaieObj.name = this.modepaieDetail.value.name;
   
    
    this.modepaieService.updateModeDePaiement(this.modepaieObj).subscribe(res=>{
      console.log(res);
      this.getAllModeDePaiement();
    },err=>{
      console.log(err);
    })

  }

  deleteModeDePaiement(modepaie : ModeDePaiement) {

    this.modepaieService.deleteModeDePaiement(modepaie).subscribe(res=>{
      console.log(res);
      alert('modepaiement deleted successfully');
      this.getAllModeDePaiement();
    },err => {
      console.log(err);
    });

  }
}
