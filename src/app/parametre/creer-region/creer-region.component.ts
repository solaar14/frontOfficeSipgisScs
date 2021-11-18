import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { District } from 'src/app/share/models/district';
import { ParametreService } from 'src/app/share/services/parametre.service';
import { Zone } from 'src/app/share/models/zone';
import { AlertifyService } from 'src/app/share/services/alertify.service';

@Component({
  selector: 'app-creer-region',
  templateUrl: './creer-region.component.html',
  styleUrls: ['./creer-region.component.css']
})
export class CreerRegionComponent implements OnInit {

 public datazones : Zone[]= [];
 public datadistricts : District[]= [];

 public creerRegion: FormGroup;

  constructor(
    private fb: FormBuilder,
    private parametreservice: ParametreService,
    private alertify: AlertifyService) { 

    this.creerRegion = this.fb.group({
      code_region: ['', Validators.required],            
      libelle_region: ['', Validators.required],
      longitude_region: [0,[Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,30})?$')]],
      latitude_region:[0,[Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,30})?$')]],
      code_district: ['', Validators.required],
      code_zone: ['', Validators.required]
    })

  }



  ngOnInit(): void {
  this.getallzone();
  this.getalldistrict();
  }


 getalldistrict(){
   this.parametreservice.getAllDistricts().subscribe(
     (rep: District[])=>{
       this.datadistricts = rep;
     }
   )
 }

 getallzone(){
   this.parametreservice.getAllZones().subscribe(
     (rep:Zone[])=> {
       this.datazones = rep;
     }
   )
 }

 initialisation(){
  this.creerRegion = this.fb.group({
    code_region: ['', Validators.required],            
    libelle_region: ['', Validators.required],
    longitude_region: [0,[Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,30})?$')]],
    latitude_region:[0,[Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,30})?$')]],
    code_district: ['', Validators.required],
    code_zone: ['', Validators.required]
  })
 }



  newRegion(){
    this.parametreservice.postRegion(this.creerRegion.value).subscribe(
      ()=>{
          this.alertify.success("Enregstrement effectué avec succè !!");
          this.creerRegion.reset();
          this.initialisation();

      }
    )
  }






}
