import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { BlankParametreComponent } from './blank-parametre/blank-parametre.component';
import { CreerDepartementComponent } from './creer-departement/creer-departement.component';
import { CreerDistrictComponent } from './creer-district/creer-district.component';
import { CreerRegionComponent } from './creer-region/creer-region.component';
import { CreerZoneComponent } from './creer-zone/creer-zone.component';
import { EditerDepartementComponent } from './editer-departement/editer-departement.component';
import { EditerDistrictComponent } from './editer-district/editer-district.component';
import { EditerRegionComponent } from './editer-region/editer-region.component';
import { EditerZoneComponent } from './editer-zone/editer-zone.component';
import { ListeDepartementComponent } from './liste-departement/liste-departement.component';
import { ListeDistrictComponent } from './liste-district/liste-district.component';
import { ListeRegionComponent } from './liste-region/liste-region.component';
import { ListeZoneComponent } from './liste-zone/liste-zone.component';

const routes: Routes = [
  {path: '',
   component: AccueilComponent,
   children:[
     
     {path: 'liste-zone', component: ListeZoneComponent},
     {path: 'creer-zone', component: CreerZoneComponent},
     {path: 'editer-zone/:code', component: EditerZoneComponent},

     {path: 'liste-district', component: ListeDistrictComponent},
     {path: 'creer-district', component: CreerDistrictComponent},
     {path: 'editer-district/:code', component: EditerDistrictComponent},

     {path: 'liste-region', component: ListeRegionComponent},
     {path: 'creer-region', component: CreerRegionComponent},
     {path: 'editer-region/:code', component: EditerRegionComponent},


     {path: 'liste-departement', component:ListeDepartementComponent},
     {path: 'creer-departement', component:CreerDepartementComponent},
     {path: 'editer-departement', component: EditerDepartementComponent},
     

     {path:'blank-parametre', component:BlankParametreComponent}




   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametreRoutingModule { }
