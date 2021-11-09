import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { District } from 'src/app/share/models/district';
import { ParametreService } from 'src/app/share/services/parametre.service';
import { Zone} from'src/app/share/models/zone';

@Component({
  selector: 'app-liste-district',
  templateUrl: './liste-district.component.html',
  styleUrls: ['./liste-district.component.css']
})
export class ListeDistrictComponent implements OnInit {

  public code: string = "";
  public modalRef?: BsModalRef;

  public datadistrict: District[] = [];
  public datazone: Zone[] = [];
  public code_district : string = "";
  public code_zone : string = "";




  constructor( 
    private route : Router,
    private parametreservice: ParametreService,
    private modalService: BsModalService) { }



  ngOnInit(): void {
    this.getalldistrict();
    this.getallzone();
  }



  openModal(templatesup: TemplateRef<any>, code: string) {
    this.modalRef = this.modalService.show(templatesup, {class: 'modal-sm'});
    this.code = code;
  }



  


  getalldistrict(){
    return this.parametreservice.getAllDistricts().subscribe(
      (response: District[])=>{
        this.datadistrict = response;
      }
    )
  }


  getallzone(){
    return this.parametreservice.getAllZones().subscribe(
      (response:Zone[])=>{ this.datazone = response}
    )
  }


  

  getalldistrictParZone(){    
    return this.parametreservice.getAllDistrictsParZone(this.code_zone).subscribe(
      (response: District[])=>{
        this.datadistrict = response;
    
      }
    )

  }


  actualiser(){
    this.getalldistrict();
    this.code_zone = "";

  }






  confirm(){

  }


  decline(){

  }




  



}
