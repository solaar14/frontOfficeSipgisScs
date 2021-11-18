import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { District } from 'src/app/share/models/district';
import { AlertifyService } from 'src/app/share/services/alertify.service';
import { ParametreService } from 'src/app/share/services/parametre.service';
import { Zone } from 'src/app/share/models/zone';
import { ActivatedRoute } from '@angular/router';
import { Region } from 'src/app/share/models/region';
import { ElementSchemaRegistry, NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'app-editer-region',
  templateUrl: './editer-region.component.html',
  styleUrls: ['./editer-region.component.css']
})
export class EditerRegionComponent implements OnInit {



  public datazones : Zone[]= [];
  public datadistricts : District[]= [];

  public creerRegion: FormGroup;
  public sub: any;
  public code: string= "";





  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private parametreservice: ParametreService,
    private alertify: AlertifyService) {

    this.creerRegion = this.fb.group({
        code_region: [{value: '', disabled : true}, Validators.required], 
        libelle_region: ['', Validators.required],
        longitude_region: [0,[Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,30})?$')]],
        latitude_region:[0,[Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,30})?$')]],
        code_district: ['', Validators.required],
        code_zone: ['', Validators.required]
      })


     }

  ngOnInit(): void {

 this.sub = this.route.params.subscribe(param=> {
  this.code = param['code'];
 })
    this.getallzone();
    this.getalldistrict();

    this.afficherregion();
  }


  editerRegion(){
    this.parametreservice.updateRegion(this.creerRegion.value,this.code).subscribe(
      (resp: Region)=>{
        this.alertify.success("Modification effectuée avec success !");
      }
    )
  }





  afficherregion(){

  this.parametreservice.getOneRegion(this.code).subscribe(
    (resp: Region)=>{         
   
     
       this.creerRegion.setValue({
          'code_region': resp.code_region,
          'libelle_region':resp.libelle_region,
          'longitude_region': resp.longitude_region,
          'latitude_region': resp.latitude_region,
          'code_district': resp.district ? resp.district.code_district : '',
          'code_zone':   resp.zone ? resp.zone.code_zone : ''       
        })
      })


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








}
