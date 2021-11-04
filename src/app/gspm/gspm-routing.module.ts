import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CreerIncidentComponent } from './creer-incident/creer-incident.component';
import { EditerIncidentComponent } from './editer-incident/editer-incident.component';
import { ListeIncidentComponent } from './liste-incident/liste-incident.component';

const routes: Routes = [
  {path:'', 
  component:AccueilComponent,
  children:[
    {path:'liste-incident', component:ListeIncidentComponent},
    {path: 'creer-incident', component: CreerIncidentComponent},
    {path: 'editer-incident', component: EditerIncidentComponent}
  ]



}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GspmRoutingModule { }
