import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParametreRoutingModule } from './parametre-routing.module';
import { MaterialModule } from '../material/material.module';
import { ListeZoneComponent } from './liste-zone/liste-zone.component';
import { EditerZoneComponent } from './editer-zone/editer-zone.component';
import { CreerZoneComponent } from './creer-zone/creer-zone.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CorsModule } from '../cors/cors.module';
import { ParametreService } from '../share/services/parametre.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ListeDistrictComponent } from './liste-district/liste-district.component';
import { CreerDistrictComponent } from './creer-district/creer-district.component';
import { EditerDistrictComponent } from './editer-district/editer-district.component';
import { ListeDepartementComponent } from './liste-departement/liste-departement.component';
import { CreerDepartementComponent } from './creer-departement/creer-departement.component';
import { EditerDepartementComponent } from './editer-departement/editer-departement.component';
import { ListeRegionComponent } from './liste-region/liste-region.component';
import { CreerRegionComponent } from './creer-region/creer-region.component';
import { EditerRegionComponent } from './editer-region/editer-region.component';
import { BlankParametreComponent } from './blank-parametre/blank-parametre.component';


@NgModule({
  declarations: [
    ListeZoneComponent,
    EditerZoneComponent,
    CreerZoneComponent,
    AccueilComponent,
    ListeDistrictComponent,
    CreerDistrictComponent,
    EditerDistrictComponent,
    ListeDepartementComponent,
    CreerDepartementComponent,
    EditerDepartementComponent,
    ListeRegionComponent,
    CreerRegionComponent,
    EditerRegionComponent,
    BlankParametreComponent
  ],
  imports: [
    CommonModule,
    ParametreRoutingModule,
    MaterialModule,
    CorsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ParametreService,BsModalService]

})
export class ParametreModule { }
