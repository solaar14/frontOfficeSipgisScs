import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path: 'gspm', loadChildren: ()=>import('./gspm/gspm.module').then(m=>m.GspmModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
