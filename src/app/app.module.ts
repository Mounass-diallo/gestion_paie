import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './nav/sidebar/sidebar.component';
import { ToolbarComponent } from './nav/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BanqueComponent } from './component/banque/banque.component';
import { TypepaieComponent } from './component/typepaie/typepaie.component';
import { ModepaiementComponent } from './component/modepaiement/modepaiement.component';
import { CorpsComponent } from './component/corps/corps.component';
import { EchellonComponent } from './component/echellon/echellon.component';
import { LeserviceComponent } from './component/leservice/leservice.component';
import { OrganigramComponent } from './component/organigram/organigram.component';
import { AgenceComponent } from './component/agence/agence.component';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import{MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { DepartementComponent } from './component/departement/departement.component';
import { DirectionComponent } from './component/direction/direction.component';
import { CivilComponent } from './component/civil/civil.component';
import { ClasseComponent } from './component/classe/classe.component';
import { FichePaieComponent } from './fiche-paie/fiche-paie.component';
import { ContratComponent } from './component/contrat/contrat.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    DashboardComponent,
    BanqueComponent,
    TypepaieComponent,
    ModepaiementComponent,
    CorpsComponent,
    EchellonComponent,
    LeserviceComponent,
    OrganigramComponent,
    AgenceComponent,
    DepartementComponent,
    DirectionComponent,
    CivilComponent,
    ClasseComponent,
    FichePaieComponent,
    ContratComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
