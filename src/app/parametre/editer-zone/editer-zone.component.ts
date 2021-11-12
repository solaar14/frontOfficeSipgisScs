import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParametreService } from 'src/app/share/services/parametre.service';
import { Zone } from 'src/app/share/models/zone';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/share/services/alertify.service';

@Component({
  selector: 'app-editer-zone',
  templateUrl: './editer-zone.component.html',
  styleUrls: ['./editer-zone.component.css']
})
export class EditerZoneComponent implements OnInit , OnDestroy{

  private code : string = "";
  private sub: any;
  public editerZone : FormGroup;



  constructor(
    private route: ActivatedRoute,
    private parametreservice: ParametreService,
    private fb: FormBuilder,
    private alertify: AlertifyService
    
    ) {
          this.editerZone = fb.group({
            'code_zone': [{ value: '', disabled: true}],
            'libelle_zone': ['', Validators.required]
          })
  }





  ngOnInit(): void {
    this.sub = this.route.params.subscribe(param=>{this.code = param['code']})
   this.afficherZone();
  }



afficherZone(){
 this.parametreservice.getOneZone(this.code).subscribe(
  (response: Zone)=>{
     this.editerZone.setValue({
       'code_zone': response.code_zone,
       'libelle_zone': response.libelle_zone

     })
  }
)
}





ngOnDestroy(){
  this.sub.unsubscribe();
}






updateZone(){
  this.parametreservice.updateOneZone(this.code, this.editerZone.value).subscribe(
    ()=>{
         this.alertify.success('Modification effectuée avec success !');
    }
  )
}








}
