import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenceComponent } from './component/agence/agence.component';
import { BanqueComponent } from './component/banque/banque.component';
import { CivilComponent } from './component/civil/civil.component';
import { ClasseComponent } from './component/classe/classe.component';
import { ContratComponent } from './component/contrat/contrat.component';
import { CorpsComponent } from './component/corps/corps.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DepartementComponent } from './component/departement/departement.component';
import { DirectionComponent } from './component/direction/direction.component';
import { EchellonComponent } from './component/echellon/echellon.component';
import { LeserviceComponent } from './component/leservice/leservice.component';
import { ModepaiementComponent } from './component/modepaiement/modepaiement.component';
import { TypepaieComponent } from './component/typepaie/typepaie.component';
import { FichePaieComponent } from './fiche-paie/fiche-paie.component';

const routes: Routes = [

  
  { 
    path:"dashboard",component:DashboardComponent
  },
  { 
    path:"banque",component:BanqueComponent
  },
  { 
    path:"agence",component:AgenceComponent
  },
  { 
    path:"typepaie",component:TypepaieComponent
  },
  { 
    path:"modepaiement",component:ModepaiementComponent
  },
  { 
    path:"corps",component:CorpsComponent
  },
  { 
    path:"departement",component:DepartementComponent
  },
  { 
    path:"leservice",component:LeserviceComponent
  },
  { 
    path:"echellon",component:EchellonComponent
  },
  { 
    path:"direction",component:DirectionComponent
  },
  { 
    path:"civil",component:CivilComponent
  },
  { 
    path:"classe",component:ClasseComponent
  },
  { 
    path:"contrat",component:ContratComponent
  },
  { 
    path:"fichePaie",component:FichePaieComponent
  },


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
