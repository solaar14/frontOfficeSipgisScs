import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
  public auth: boolean = false;


  constructor() {
   

  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }





}
