import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GspmRoutingModule } from './gspm-routing.module';
import { ListeIncidentComponent } from './liste-incident/liste-incident.component';
import { EditerIncidentComponent } from './editer-incident/editer-incident.component';
import { CreerIncidentComponent } from './creer-incident/creer-incident.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AsidenavbarComponent } from './cors/asidenavbar/asidenavbar.component';
import { FooternavbarComponent } from './cors/footernavbar/footernavbar.component';
import { TopnavbarComponent } from './cors/topnavbar/topnavbar.component';

@NgModule({
  declarations: [
    ListeIncidentComponent,
    EditerIncidentComponent,
    CreerIncidentComponent,
    AccueilComponent,
    AsidenavbarComponent,
    FooternavbarComponent,
    TopnavbarComponent
 
 
  ],
  imports: [
    CommonModule,
    GspmRoutingModule
  ]
})
export class GspmModule { }
