import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departement } from '../models/departement';
import { District } from '../models/district';
import { Region } from '../models/region';
import { Zone } from '../models/zone';

@Injectable({
  providedIn: 'root'
})
export class ParametreService {

  _url = "http://localhost:5000/api";

  constructor( private http:HttpClient) { }


   //#region  ---- // services zone // -----

   getAllZones() : Observable<Zone[]>{
    return this.http.get<Zone[]>(this._url + '/zones/all');
   }

   postZone(newzone : any){
    return this.http.post(this._url + '/zones/add/', newzone );
   }


  deletedZone(code_zone: string): Observable<string>{
    return this.http.delete<string>(this._url + '/zones/one/' + code_zone);
   }


   
   //#endregion






//#region ---- // services district -----
  getAllDistricts(): Observable<District[]>{
  return this.http.get<District[]>(this._url + '/districts/all');
  }

  getAllDistrictsParZone(code_zone: string): Observable<District[]>{
    return this.http.get<District[]>(this._url + '/districts/all/zones/' + code_zone );
  }

  postDistrict(newDistrict : any){

    let httpHeader = new HttpHeaders();
    httpHeader.append('Content-Type','application/json; charset=utf-8');
    httpHeader.append('Transfer-Encoding','chunked');
    
    return this.http.post(this._url + '/districts/add/', newDistrict, );
   }
   
  //#endregion





  //#region ---- // services region -----

      getAllRegions(): Observable<Region[]>{
        return this.http.get<Region[]>(this._url + '/regions/all');
      }


      getAllRegionsParDistrict(code_district: string): Observable<Region[]>{
        return this.http.get<Region[]>(this._url + '/regions/all/districts/' + code_district);
      }


      getAllRegionsParZone(code_zone: string): Observable<Region[]>{
        return this.http.get<Region[]>(this._url + '/regions/all/zones/' + code_zone);
      }

  //#endregion




   
  //#region ---- // services departement -----

   getAllDepatrtements(){
     return this.http.get<Departement[]>(this._url + '/departements/all')
   }

   getAllDepatrtementsParRegion(code_region : string):Observable<Departement[]>{
    return this.http.get<Departement[]>(this._url + '/departements/all/regions/' + code_region );
  }
  
  getAllDepatrtementsParZone(code_zone : string):Observable<Departement[]>{
    return this.http.get<Departement[]>(this._url + '/departements/all/zones/' + code_zone );
  }


 



  //#endregion





  //#region ---- // services sous-prefecture -----

   
  //#endregion






  

}
