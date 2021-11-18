import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Region } from 'src/app/share/models/region';
import { ParametreService } from 'src/app/share/services/parametre.service';
import {Zone} from 'src/app/share/models/zone';
import { District } from 'src/app/share/models/district';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { AlertifyService } from 'src/app/share/services/alertify.service';

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

  public currentPage: number = 1;
  public totalpage : number = 0;

  constructor(
    private route : Router,
    private parametreservice: ParametreService,
    private modalService: BsModalService,
    private alertify: AlertifyService
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
        this.totalpage = response.length;
        this.getallparpageregion(this.currentPage);      
        
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
  this.currentPage = 1;
  }

  
  
    confirm(){
      this.parametreservice.deletedRegion(this.code).subscribe(
        ()=>{
          this.alertify.success("suppression effectuée avec success !")
         
          this.modalRef?.hide();
          this.refeshComponent();
        }
      )
  
    }

  
  
    decline(){
        this.modalRef?.hide();
     }



     pageChanged(event: PageChangedEvent): void {
      this.currentPage = event.page;  
      this.getallparpageregion(this.currentPage)
      
    }


    getallparpageregion(index: number) {
    return this.parametreservice.getAllPageRegions(index).subscribe(
      (response: Region[])=>{

        this.dataregion = response;

      }
    )
  }


  refeshComponent(){

    this.route.navigateByUrl('/parametre/blank-parametre', { skipLocationChange: true })
    .then(() => { this.route.navigate(['/parametre/liste-region']); });

  }



  
}
