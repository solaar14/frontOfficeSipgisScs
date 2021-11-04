import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { EditerIncidentComponent } from '../gspm/editer-incident/editer-incident.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CreerUtilisateurComponent } from './creer-utilisateur/creer-utilisateur.component';
import { ListeUtilisateurComponent } from './liste-utilisateur/liste-utilisateur.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{
    path:'',
    component:AccueilComponent,
    children:[
      {path:'login',component:LoginComponent},
      {path: 'creer-user', component:CreerUtilisateurComponent},
      {path: 'editer-user', component:EditerIncidentComponent},
      {path: 'liste-user', component:ListeUtilisateurComponent}
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
