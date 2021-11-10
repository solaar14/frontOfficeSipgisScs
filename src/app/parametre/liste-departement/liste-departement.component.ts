import { Component, OnInit, TemplateRef } from '@angular/core';
import { Departement } from 'src/app/share/models/departement';
import { District } from 'src/app/share/models/district';
import { Region } from 'src/app/share/models/region';
import { ParametreService } from 'src/app/share/services/parametre.service';
import { Zone } from 'src/app/share/models/zone';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-liste-departement',
  templateUrl: './liste-departement.component.html',
  styleUrls: ['./liste-departement.component.css']
})
export class ListeDepartementComponent implements OnInit {
  modalRef: any;
  public code: string = "";


public datadepartements: Departement[] = [];
public datazones: Zone[] = [];
public dataregions: Region[] = [];
public datadistricts: District[] = [];

public code_zone : string = "";
public code_district: string = "";
public code_region : string = "";

public currentPage = 4;
public page?: number;

  constructor(
    private route : Router,
    private parametreservice: ParametreService,
    private modalService: BsModalService) { }






  ngOnInit(): void {
    this.getallregion();
    this.getallzone();
    //this.getalldistrict();
    this.getalldepartement();
    }




    
  openModal(templatesup: TemplateRef<any>, code: string) {
    this.modalRef = this.modalService.show(templatesup, {class: 'modal-sm'});
    this.code = code;
  }



  getalldepartement(){
    return this.parametreservice.getAllDepatrtements().subscribe(
      (response:Departement[])=> {this.datadepartements = response}
    )
  }


 getallregion(){
    return this.parametreservice.getAllRegions().subscribe(
      (response:Region[])=>{
        this.dataregions = response;
        })
  }

  
  getallzone(){
    return this.parametreservice.getAllZones().subscribe(
      (response:Zone[])=>{ this.datazones = response}
    )
  }


  getalldistrict(){
    return this.parametreservice.getAllDistricts().subscribe(
      (reponse: District[])=>{ 
        this.datadistricts = reponse
      
      }
    )
  }



  getalldepartementParRegion(){
    this.parametreservice.getAllDepatrtementsParRegion(this.code_region).subscribe(
      (response: Departement[])=>{
        this.datadepartements = response;
      }
    )
 }



 getalldepartementParZone(){
   this.parametreservice.getAllDepatrtementsParZone(this.code_zone).subscribe(
     (response: Departement[])=> { this.datadepartements = response;}
   )
 }


  actualiser(){
    this.getalldepartement();
    this.code_region = "";
    this.code_zone = "";
  }


  confirm(){}

  decline(){}



  pageChanged(event: PageChangedEvent): void {
    this.page = event.page;
  }




}
