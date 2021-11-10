import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { PaginationModule } from 'ngx-bootstrap/pagination';

const MaterialComponent = [
  MatButtonModule,
  MatTableModule,
  PaginationModule

]



@NgModule({
  imports: [MaterialComponent],
  exports:[MaterialComponent]
})
export class MaterialModule { }
