import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { ListeUtilisateurComponent } from './liste-utilisateur/liste-utilisateur.component';
import { CreerUtilisateurComponent } from './creer-utilisateur/creer-utilisateur.component';
import { EditerUtilisateurComponent } from './editer-utilisateur/editer-utilisateur.component';


@NgModule({
  declarations: [
    AccueilComponent,
    LoginComponent,
    ListeUtilisateurComponent,
    CreerUtilisateurComponent,
    EditerUtilisateurComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
