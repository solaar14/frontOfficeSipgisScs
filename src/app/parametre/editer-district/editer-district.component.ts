import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { District } from 'src/app/share/models/district';
import { Zone } from 'src/app/share/models/zone';
import { AlertifyService } from 'src/app/share/services/alertify.service';
import { ParametreService } from 'src/app/share/services/parametre.service';

@Component({
  selector: 'app-editer-district',
  templateUrl: './editer-district.component.html',
  styleUrls: ['./editer-district.component.css']
})
export class EditerDistrictComponent implements OnInit, OnDestroy {

  public datazones : Zone[] =[];
  public editerDistrict: FormGroup;
  public code: string = "";
  private sub: any;

  constructor(
        private fb: FormBuilder,
        private route_active: ActivatedRoute,
        private parameterservice: ParametreService,
        private alertify: AlertifyService) {

    this.editerDistrict = this.fb.group({
      code_district :[{value: '', disabled: true}, Validators.required],
      libelle_district : ['',Validators.required],
      longitude_district: [0,[Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,30})?$')]],
      latitude_district:[0,[Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,30})?$')]],
      code_zone :['',Validators.required]

    })
  }




  ngOnInit(): void {
  this.sub = this.route_active.params.subscribe(param=>
          {this.code =  param['code']; })

          this.getallzone();
          this.afficherDistrict();
          
}



ngOnDestroy() {
  this.sub.unsubscribe();
}




afficherDistrict(){
  this.parameterservice.getOneDistrict(this.code).subscribe(
    (response: District)=>{

      this.editerDistrict.setValue({
        'code_district': response.code_district,
        'libelle_district': response.libelle_district,
        'longitude_district':response.longitude_district,
        'latitude_district': response.latitude_district,
        'code_zone': response.zone ? response.zone.code_zone : ''
        })

     
    }
  )
}
;




getallzone(){
  this.parameterservice.getAllZones().subscribe(
    (res:Zone[])=>{
      this.datazones = res;
    }
  )
}




modifierDistrict(){
  this.parameterservice.updateDistrict(this.editerDistrict.value,this.code).subscribe(
    (response: District)=>{
          this.alertify.success("Modification effectuée avec success !");
    }
  )

}














}
