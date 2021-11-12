import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Region } from 'src/app/share/models/region';
import { AlertifyService } from 'src/app/share/services/alertify.service';
import { ParametreService } from 'src/app/share/services/parametre.service';
import { Zone } from 'src/app/share/models/zone';
import { ActivatedRoute } from '@angular/router';
import { Departement } from 'src/app/share/models/departement';

@Component({
  selector: 'app-editer-departement',
  templateUrl: './editer-departement.component.html',
  styleUrls: ['./editer-departement.component.css']
})
export class EditerDepartementComponent implements OnInit {

  
  public datazones: Zone[] = [];
  public dataregions : Region[] = [];
  public code : string = "";
  public sub: any;
  public creerDepartement: FormGroup;


  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private parametreservice: ParametreService,
    private alertify : AlertifyService)
     {
      
      this.creerDepartement = this.fb.group({  
        code_departement:[{value: '', disabled: true}, Validators.required],
        libelle_departement:['',Validators.required],
        longitude_departement: [0,[Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,30})?$')]],
        latitude_departement:[0,[Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,30})?$')]],
        code_region:['',Validators.required],
        code_zone:['', Validators.required]  
      })
     }




    
  ngOnInit(): void {
     this.sub = this.route.params.subscribe(param=>{
                  this.code = param['code']
      })
 
    this.getallregion();
    this.getallzone();

    this.afficherdepartement();
  }




  getallzone(){
    this.parametreservice.getAllZones().subscribe(
      (response: Zone[])=>{
        this.datazones = response;
      }
    )
   }



  getallregion(){
    this.parametreservice.getAllRegions().subscribe(
      (response : Region[])=> {
        this.dataregions = response;
      }
      
    )
  }



afficherdepartement(){
  this.parametreservice.getOneDepartement(this.code).subscribe(
    (rep:Departement)=>{
    
        this.creerDepartement.setValue({
        'code_departement': rep.code_departement,
        'libelle_departement':rep.libelle_departement,
        'longitude_departement': rep.longitude_departement,
        'latitude_departement':rep.latitude_departement,
        'code_region':rep.region.code_region,
         'code_zone':rep.zone.code_zone 
        })
    }
  )

};






  modifierDepartement(){
    this.parametreservice.updateDepartement(this.creerDepartement.value,this.code).subscribe(
      ()=>{
        this.alertify.success("modification effectuée avec success !")
      }
    )
  }

}
