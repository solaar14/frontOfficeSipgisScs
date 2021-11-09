import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParametreService } from 'src/app/share/services/parametre.service';
import { Zone } from 'src/app/share/models/zone';

@Component({
  selector: 'app-creer-district',
  templateUrl: './creer-district.component.html',
  styleUrls: ['./creer-district.component.css']
})
export class CreerDistrictComponent implements OnInit {
  
 public datazones : Zone[] =[];

 public creerDistrict : FormGroup;

  constructor(
    private fb: FormBuilder,
    private parametreservice: ParametreService) {
  this.creerDistrict = this.fb.group(
    {
      libelle_district : ['',Validators.required],
      longitude_district: ['',Validators.required],
      latitude_district:['',Validators.required],
      code_zone :['',Validators.required]
    })

   }

  ngOnInit(): void {
    this.getallZone();
  }



  newDistrict(){

  this.parametreservice.postDistrict(this.creerDistrict.value).subscribe(
      (response: any)=> {
           console.log(this.creerDistrict.value);
           console.log(response);
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










}
