import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParametreService } from 'src/app/share/services/parametre.service';
import { Zone } from 'src/app/share/models/zone';
import { VarialesService } from 'src/app/share/services/variales.service';
import { AlertifyService } from 'src/app/share/services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creer-district',
  templateUrl: './creer-district.component.html',
  styleUrls: ['./creer-district.component.css']
})
export class CreerDistrictComponent implements OnInit {
  
 public datazones : Zone[] =[];

 public creerDistrict : FormGroup;


  constructor(
    private route : Router,
    private fb: FormBuilder,
    private parametreservice: ParametreService,
    private alertifyservice: AlertifyService
    ) {
 
 
    this.creerDistrict = this.fb.group({
      libelle_district : ['',Validators.required],
      longitude_district: [0,[Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,30})?$')]],
      latitude_district:[0,[Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,30})?$')]],
      code_zone :['',Validators.required]

    })

   }

  ngOnInit(): void { 
    this.getallZone();
  }




newDistrict(){  
  this.parametreservice.postDistrict(this.creerDistrict.value).subscribe(
      (response: any)=> {
       if(response== "200") this.alertifyservice.success("Enregistrement effectué avec success !");
         this.creerDistrict.reset();
         this.datazones = [];
         this.refeshComponent();
      }
    )   
}


getallZone(){
  this.parametreservice.getAllZones().subscribe(
    (response: Zone[]) => {
      this.datazones = response;
    }
  )
}



refeshComponent(){
  this.route.navigateByUrl('/parametre/blank-parametre', { skipLocationChange: true })
  .then(() => { this.route.navigate(['/parametre/creer-district']); });
}






}
