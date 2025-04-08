import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Agence } from 'src/app/model/agence';
import { Civil } from 'src/app/model/civil';
import { Classe } from 'src/app/model/classe';
import { Contrat } from 'src/app/model/contrat';
import { Corps } from 'src/app/model/corps';
import { Echellon } from 'src/app/model/echellon';
import { Employee } from 'src/app/model/employee';
import { TypeDePaie } from 'src/app/model/type-de-paie';
import { AgenceService } from 'src/app/service/agence.service';
import { ClasseService } from 'src/app/service/classe.service';
import { ContratService } from 'src/app/service/contrat.service';
import { CorpsService } from 'src/app/service/corps.service';
import { EchellonService } from 'src/app/service/echellon.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { TypepaieService } from 'src/app/service/typepaie.service';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})
export class ContratComponent implements OnInit {
  conDetail !: FormGroup;
  conObj : Contrat = new Contrat();
  conList : Contrat[] = [];
  clasList : Classe[] = [];
  agList : Agence[] = [];
  empList : Employee[] = [];
  echList : Echellon[] = [];
  coList : Corps[] = [];
  civList : Civil[] = [];
  typeList : TypeDePaie[] = [];
  // stList : Statut[] = [];
  // tyList : TypeContrat[] = [];
  constructor(private formBuilder : FormBuilder, private conService : ContratService,
    
    private agService : AgenceService,
    private clasService : ClasseService,
    private empService : EmployeeService,
    private echService : EchellonService,
    private coService : CorpsService,
    private typeService : TypepaieService,
    ) { }

  ngOnInit(): void {
    this.getAllContrat();
    this.getAllCorps();
    this.getAllClasse();
    this.getAllEmployee();
    this.getAllEchellon();
    this.getAllTypePaie();
    // this.getAllStatut();
    // this.getAllTypeContrat();
    this.getAllAgence();

    this.conDetail = this.formBuilder.group({
      id : [''],
      employeeId:[''],
      corpsId:[''],
      classeId:[''],
      echellonId:[''],
      agenceId:[''],
      // statutId:[''],
      // typeContratId:[''],
      typeDePaieId:[''],

      embouche : [''],
      dateFin : [''],

      numCompte : [''],

      salaireBase : [''],

      nbrPartFical : [''],

      nbrPartImpot : [''],

      nbrDenfantPrest : [''],
      jourBase : [''],
      nbreJourPresence : [''],

    
      
      
    }); 
  }
  addContrat() {
    console.log(this.conDetail);
    this.conObj.id = this.conDetail.value.id;
    this.conObj.employeeId = this.conDetail.value.employeeId;
    this.conObj.corpsId = this.conDetail.value.corpsId;
    this.conObj.classeId = this.conDetail.value.classeId;
    this.conObj.echellonId = this.conDetail.value.echellonId;

    // this.conObj.agenceId = this.conDetail.value.agenceId;

    // this.conObj.statutId = this.conDetail.value.statutId;

    // this.conObj.typeContratId = this.conDetail.value.typeContratId;

    this.conObj.typeDePaieId = this.conDetail.value.typeDePaieId;
    this.conObj.embouche = this.conDetail.value.embouche;
    this.conObj.dateFin = this.conDetail.value.dateFin;

    this.conObj.numCompte = this.conDetail.value.numCompte;

    this.conObj.salaireBase = this.conDetail.value.salaireBase;

    this.conObj.nbrPartFical = this.conDetail.value.nbrPartFical;

    this.conObj.nbrPartImpot = this.conDetail.value.nbrPartImpot;

    this.conObj.nbrDenfantPrest = this.conDetail.value.nbrDenfantPrest;

    this.conObj.jourBase = this.conDetail.value.jourBase;
    this.conObj.nbreJourPresence = this.conDetail.value.nbreJourPresence;

   

   

    this.conService.addContrat(this.conObj).subscribe(res=>{
      console.log(res);
      this.getAllContrat();
  },err=>{
      console.log(err);
    });

  }

  getAllContrat() {
    this.conService.getAllContrat().subscribe(res=>{
        this.conList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

   getAllCorps() {
    this.coService.getAllCorps().subscribe(res=>{
        this.coList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }
  getAllClasse() {
    this.clasService.getAllClasse().subscribe(res=>{
        this.clasList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }
  getAllEmployee() {
    this.empService.getAllEmployee().subscribe(res=>{
        this.empList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }
  getAllEchellon() {
    this.echService.getAllEchellon().subscribe(res=>{
        this.echList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }
  getAllAgence() {
    this.agService.getAllAgence().subscribe(res=>{
        this.agList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }
  getAllTypePaie() {
    this.typeService.getAllTypePaie().subscribe(res=>{
        this.typeList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }
  // getAllStatut() {
  //   this.stService.getAllStatut().subscribe(res=>{
  //       this.stList = res;
  //   },err=>{
  //     console.log("error while fetching data.")
  //   });
  // }
  // getAllTypeContrat() {
  //   this.tyService.getAllTypeContrat().subscribe(res=>{
  //       this.tyList = res;
  //   },err=>{
  //     console.log("error while fetching data.")
  //   });
  // }

  editContrat(con : Contrat) {
    this.conDetail.controls['id'].setValue(con.id);
    this.conDetail.controls['employeeId'].setValue(con.employeeId);
    this.conDetail.controls['corpsId'].setValue(con.corpsId);
    this.conDetail.controls['classeId'].setValue(con.classeId);

    this.conDetail.controls['echellonId'].setValue(con.echellonId);

    this.conDetail.controls['agenceId'].setValue(con.agenceId);

    // this.conDetail.controls['statutId'].setValue(con.statutId);

    // this.conDetail.controls['typeContratId'].setValue(con.typeContratId);

     this.conDetail.controls['typeDePaieId'].setValue(con.typeDePaieId);
    this.conDetail.controls['embouche'].setValue(con.embouche);
    this.conDetail.controls['dateFin'].setValue(con.dateFin);
    this.conDetail.controls['numCompte'].setValue(con.numCompte);
    this.conDetail.controls['salaireBase'].setValue(con.salaireBase);
    this.conDetail.controls['nbrPartFical'].setValue(con.nbrPartFical);
    this.conDetail.controls['nbrPartImpot'].setValue(con.nbrPartImpot);
    this.conDetail.controls['nbrDenfantPrest'].setValue(con.nbrDenfantPrest);
    this.conDetail.controls['jourBase'].setValue(con.jourBase);
    this.conDetail.controls['nbreJourPresence'].setValue(con.nbreJourPresence);




  }


  updateContrat() {

    this.conObj.id = this.conDetail.value.id;
    this.conObj.employeeId = this.conDetail.value.employeeId;

    this.conObj.corpsId = this.conDetail.value.corpsId;
    this.conObj.classeId = this.conDetail.value.classeId;
    this.conObj.echellonId = this.conDetail.value.echellonId;

    this.conObj.agenceId = this.conDetail.value.agenceId;

    // this.conObj.statutId = this.conDetail.value.statutId;

    // this.conObj.typeContratId = this.conDetail.value.typeContratId;

    this.conObj.typeDePaieId = this.conDetail.value.typeDePaieId;
    this.conObj.embouche = this.conDetail.value.embouche;
    this.conObj.dateFin = this.conDetail.value.dateFin;
    this.conObj.numCompte = this.conDetail.value.numCompte;
    this.conObj.salaireBase = this.conDetail.value.salaireBase;
    this.conObj.nbrPartFical = this.conDetail.value.nbrPartFical;
    this.conObj.nbrPartImpot = this.conDetail.value.nbrPartImpot;
    this.conObj.nbrDenfantPrest = this.conDetail.value.nbrDenfantPrest;
    this.conObj.jourBase = this.conDetail.value.jourBase;
    this.conObj.nbreJourPresence = this.conDetail.value.nbreJourPresence;

   

    
    this.conService.updateContrat(this.conObj).subscribe(res=>{
      console.log(res);
      this.getAllContrat();
    },err=>{
      console.log(err);
    })

  }


  deleteContrat(con : Contrat) {

    this.conService.deleteContrat(con).subscribe(res=>{
      console.log(res);
      alert('Contrat deleted successfully');
      this.getAllContrat();
    },err => {
      console.log(err);
    });

  }

  }


