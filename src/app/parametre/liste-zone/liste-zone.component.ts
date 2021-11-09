import { Component, OnInit, TemplateRef } from '@angular/core';
import { Zone } from 'src/app/share/models/zone';
import { ParametreService } from 'src/app/share/services/parametre.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-zone',
  templateUrl: './liste-zone.component.html',
  styleUrls: ['./liste-zone.component.css']
})
export class ListeZoneComponent implements OnInit {

  public code: string = "";
  public modalRef?: BsModalRef;

  public datazone: Zone[] = [];



  constructor(
    private route : Router,
    private parametreservice: ParametreService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
      this.getallzone()
  }


  openModal(templatesup: TemplateRef<any>, code: string) {
    this.modalRef = this.modalService.show(templatesup, {class: 'modal-sm'});
    this.code = code;
  }
  


  getallzone(){
  return this.parametreservice.getAllZones().subscribe(
    (response: Zone[])=>{
      this.datazone = response;
    }
  )
  }



  confirm(){

  }


  decline(){

  }




}



