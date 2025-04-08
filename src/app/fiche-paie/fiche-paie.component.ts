import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FichePaieService } from '../service/fiche-paie.service';

@Component({
  selector: 'app-fiche-paie',
  templateUrl: './fiche-paie.component.html',
  styleUrls: ['./fiche-paie.component.css']
})
export class FichePaieComponent implements OnInit {
matriculeEmp: any;
ListEmploye:any;
FichePaie:any;
addFormGroup!:FormGroup



  constructor(private servicePaie:FichePaieService, 
    private fb:FormBuilder, 
    private serviceFiche:FichePaieService,
     private router:Router) { }

     ngOnInit(): void {
       // this.relaodData();
       //@ts-ignore
    this.ListEmploye = JSON.parse(localStorage.getItem('fiche'));
    console.log(this.ListEmploye);

    
    // this.getListEmploye();

  }
  // getListEmploye() {
  //   this.servicePaie.getlistContratsByEmp(this.matriculeEmp).subscribe(res => {
  //     this.ListEmploye = res;
  //   })
  // }

}
