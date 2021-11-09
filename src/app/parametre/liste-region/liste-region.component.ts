import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Region } from 'src/app/share/models/region';
import { ParametreService } from 'src/app/share/services/parametre.service';
import {Zone} from 'src/app/share/models/zone';
import { District } from 'src/app/share/models/district';

@Component({
  selector: 'app-liste-region',
  templateUrl: './liste-region.component.html',
  styleUrls: ['./liste-region.component.css']
})
export class ListeRegionComponent implements OnInit {
  public code: string = "";
  public modalRef?: BsModalRef;

  public dataregion: Region[] = [];
  public datazone: Zone[] =[];
  public datadistrict : District[] = [];

  public code_district : string = "";
  public code_zone : string = "";

  constructor(
    private route : Router,
    private parametreservice: ParametreService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.getallregion();
    this.getAlldistrict();
    this.getallzone();
  }


  openModal(templatesup: TemplateRef<any>, code: string) {
    this.modalRef = this.modalService.show(templatesup, {class: 'modal-sm'});
    this.code = code;
  }
  

  getAlldistrict(){
    return this.parametreservice.getAllDistricts().subscribe(
      (response:District[] ) => {
        this.datadistrict = response;

      }
    )
  }


  getallregion(){
    return this.parametreservice.getAllRegions().subscribe(
      (response:Region[])=>{
        this.dataregion = response;
        })
  }


  
  getallzone(){
    return this.parametreservice.getAllZones().subscribe(
      (response:Zone[])=>{ this.datazone = response}
    )
  }


  
  getallregionParDistrict(){
    return this.parametreservice.getAllRegionsParDistrict(this.code_district).subscribe(
      (response:Region[])=>{
        this.dataregion = response;
        })
  }



  getallregionParZone(){
    return this.parametreservice.getAllRegionsParZone(this.code_zone).subscribe(
      (response:Region[])=>{
        this.dataregion = response;
        })
  }
  
   


  actualiser() {
  
   this.getallregion();
   this.code_district = "";
   this.code_zone = ""; 
  }
  
    confirm(){
  
    }
  
  
    decline(){
  
    }
  
}
