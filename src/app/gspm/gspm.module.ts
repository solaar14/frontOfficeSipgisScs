import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GspmRoutingModule } from './gspm-routing.module';
import { MaterialModule } from '../material/material.module';

import { ListeIncidentComponent } from './liste-incident/liste-incident.component';
import { EditerIncidentComponent } from './editer-incident/editer-incident.component';
import { CreerIncidentComponent } from './creer-incident/creer-incident.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CorsModule } from '../cors/cors.module';


@NgModule({
  declarations: [
    ListeIncidentComponent,
    EditerIncidentComponent,
    CreerIncidentComponent,
    AccueilComponent
 
  ],
  imports: [
    CommonModule,
    GspmRoutingModule,
    MaterialModule,
    CorsModule
   
  ]
})
export class GspmModule { }
