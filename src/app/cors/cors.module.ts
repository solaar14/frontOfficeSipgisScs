import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsidenavbarComponent } from './asidenavbar/asidenavbar.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { FooternavbarComponent } from './footernavbar/footernavbar.component';

import { GspmRoutingModule } from '../gspm/gspm-routing.module';
import { ParametreRoutingModule } from '../parametre/parametre-routing.module';




@NgModule({
  declarations: [ 
    AsidenavbarComponent,
    FooternavbarComponent,
    TopnavbarComponent
 ],
  imports: [
      CommonModule,
      GspmRoutingModule,
      ParametreRoutingModule
  ],
  exports:[
    TopnavbarComponent,
    AsidenavbarComponent,
    FooternavbarComponent
  ]

})
export class CorsModule { }
