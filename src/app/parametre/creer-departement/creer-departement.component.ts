import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Region } from 'src/app/share/models/region';
import { Zone } from 'src/app/share/models/zone';
import { AlertifyService } from 'src/app/share/services/alertify.service';
import { ParametreService } from 'src/app/share/services/parametre.service';


@Component({
  selector: 'app-creer-departement',
  templateUrl: './creer-departement.component.html',
  styleUrls: ['./creer-departement.component.css']
})
export class CreerDepartementComponent implements OnInit {


  public datazones: Zone[] = [];
  public dataregions : Region[] = [];

  public creerDepartement: FormGroup;

  constructor(
        private fb: FormBuilder,
        private parametreservice: ParametreService,
        private alertify : AlertifyService) {

      this.creerDepartement = this.fb.group({

        code_departement:['', Validators.required],
        libelle_departement:['',Validators.required],
        longitude_departement: [0,[Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,30})?$')]],
        latitude_departement:[0,[Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,30})?$')]],
        code_region:['',Validators.required],
        code_zone:['', Validators.required]

      })

   }





  ngOnInit(): void {
    this.getallzone();
    this.getallregion();
  }



getallregion(){
  this.parametreservice.getAllRegions().subscribe(
    (response : Region[])=> {
      this.dataregions = response;
    }
    
  )
}

initdepartement(){
  this.creerDepartement = this.fb.group({

    code_departement:['', Validators.required],
    libelle_departement:['',Validators.required],
    longitude_departement: [0,[Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,30})?$')]],
    latitude_departement:[0,[Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,30})?$')]],
    code_region:['',Validators.required],
    code_zone:['', Validators.required]

  })
}



getallzone(){
 this.parametreservice.getAllZones().subscribe(
   (response: Zone[])=>{
     this.datazones = response;
   }
 )
}


  newDepartement(){
    this.parametreservice.postDepartement(this.creerDepartement.value).subscribe(
      ()=>{
          this.creerDepartement.reset();
          this.alertify.success(`Enregistrement departement effectué avec success !`);
            this.initdepartement();
      }
    )
  }






}
