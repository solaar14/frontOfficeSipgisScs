import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/share/services/alertify.service';
import { ParametreService } from 'src/app/share/services/parametre.service';

@Component({
  selector: 'app-creer-zone',
  templateUrl: './creer-zone.component.html',
  styleUrls: ['./creer-zone.component.css']
})
export class CreerZoneComponent implements OnInit {


  public creerZone : FormGroup ;
  
  constructor(
    private route : Router,
    private parametreservice: ParametreService,
    private fb: FormBuilder,
    private alertify : AlertifyService
    ) 
  { 
    
    this.creerZone = this.fb.group({
      code_zone: ['', Validators.required],
      libelle_zone : ['', Validators.required]
    });

  }




  ngOnInit(): void {
  }




  newZone(){
    
  
      this.parametreservice.postZone(this.creerZone.value).subscribe(
        ()=>{ 
          this.alertify.success('Enregistrement effectué avec success !')
         }        
      );

      this.creerZone.reset();

    
 


  }





}
