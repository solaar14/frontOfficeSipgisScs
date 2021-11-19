import { Component, OnInit, TemplateRef } from '@angular/core';
import { Zone } from 'src/app/share/models/zone';
import { Departement } from 'src/app/share/models/departement';
import { District } from 'src/app/share/models/district';
import { Region } from 'src/app/share/models/region';
import { ParametreService } from 'src/app/share/services/parametre.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertifyService } from 'src/app/share/services/alertify.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { SousPrefecture } from 'src/app/share/models/sous-prefecture';
import { Router } from '@angular/router';


@Component({
  selector: 'app-liste-sous-prefecture',
  templateUrl: './liste-sous-prefecture.component.html',
  styleUrls: ['./liste-sous-prefecture.component.css']
})
export class ListeSousPrefectureComponent implements OnInit {

  public datasous_prefectures : SousPrefecture[]= [];
  public datadepartements: Departement[] = [];
  public datadistricts: District[] = [];
  public dataregions : Region[] = [];
  public datazones : Zone[] = [];

  public code_departement : string = "";
  public code_region : string = "";
  public code_zone : string = "";
  public code_district : string = "";


  public code: string = "";
  public modalRef?: BsModalRef;

  public currentPage: number = 1;
  public totalpage : number = 0;
  public maxSize : number = 10;




  constructor(
    private parametreservice : ParametreService,
    private modalService: BsModalService,
    private alertifyservice: AlertifyService,
    private route: Router) { }

  ngOnInit(): void {
    this.getallsous_prefecture();
    this.getallzones();
    this.getalldistricts();
    this.getalldepartements();
    this.getallregions();
  }


  actualiser(){
    this.getallsous_prefecture();
    this.code_zone = "";
    this.code_region = "";
    this.code_district= "";
    this.code_departement = "";
  }

  confirm(){
    this.parametreservice.deletedSousPrefectures(this.code).subscribe(
      ()=>{
        this.alertifyservice.success("suppression effectuée avec success !")
       
        this.modalRef?.hide();
        this.refeshComponent();
      }
    )
  }


  decline(){
    this.modalRef?.hide();
    this.refeshComponent();
  }


  getallzones(){
    return this.parametreservice.getAllZones().subscribe(
      (response:Zone[])=>{ this.datazones = response}
    )
}


getallregions(){return this.parametreservice.getAllRegions().subscribe(
  (data:Region[])=>{
    this.dataregions = data;
  }
)}


getalldepartements(){return this.parametreservice.getAllDepatrtements().subscribe(
  (data: Departement[])=> {
    this.datadepartements = data;
  }
)}


getalldistricts(){return this.parametreservice.getAllDistricts().subscribe(
  (data: District[])=> {
    this.datadistricts = data;
  }
)}

openModal(templatesup: TemplateRef<any>, code: string) {
  this.modalRef = this.modalService.show(templatesup, {class: 'modal-sm'});
  this.code = code;
}

  getallsous_prefectureParDistrict(){
   return this.parametreservice.getAllSousPrefecturesParDistrict(this.code_district).subscribe(
      (data: SousPrefecture[])=> {
        this.datasous_prefectures = data;
      }
    )
  }

  getallsous_prefectureParDepartement(){
    return this.parametreservice.getAllSousPrefecturesParDepartement(this.code_departement).subscribe(
      (data: SousPrefecture[])=>{
          this.datasous_prefectures = data;
      }
    )
  }

  getallsous_prefectureParRegion(){
    return this.parametreservice.getAllSousPrefecturesParRegion(this.code_region).subscribe(
      (data: SousPrefecture[])=> {
        this.datasous_prefectures = data;
      }
    )
  }












































































































































































































  

  getallsous_prefectureParZone(){
    return this.parametreservice.getAllSousPrefecturesParZone(this.code_zone).subscribe(
      (data: SousPrefecture[])=> {
        this.datasous_prefectures = data;
      }
    )
  }

  pageChanged(event: PageChangedEvent): void {
    this.currentPage = event.page;  
    this.getallparpagesous_precfecture(this.currentPage)    
  }


  getallsous_prefecture(){
    return this.parametreservice.getAllSous_prefectures().subscribe(
      (response: SousPrefecture[])=>{
        this.totalpage = response.length;       
        this.getallparpagesous_precfecture(this.currentPage);
       
      }
    )
  }

  getallparpagesous_precfecture(index: number) {
    return this.parametreservice.getAllPageSous_prefectures(index).subscribe(
      (response: SousPrefecture[])=>{
        this.datasous_prefectures = response;
      }
    )
  }


  
  refeshComponent(){
    this.route.navigateByUrl('/parametre/blank-parametre', { skipLocationChange: true })
    .then(() => { 
      this.route.navigate(['/parametre/liste-sous-prefecture']); 
    });
  
  }




}
