import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-asidenavbar',
  templateUrl: './asidenavbar.component.html',
  styleUrls: ['./asidenavbar.component.css']
})
export class AsidenavbarComponent implements OnInit {
  public nom: string = "";
  public prenom: string = "";

  constructor() { }

  ngOnInit(): void {

    
    $(document).ready(() => {
      $('[data-widget="treeview"]').Treeview('init');
    });
    
  }

}
