import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departement } from '../models/departement';
import { District } from '../models/district';
import { Region } from '../models/region';
import { Zone } from '../models/zone';
import { SousPrefecture } from '../models/sous-prefecture';

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


   getOneZone(code_zone: string): Observable<Zone>{
    return this.http.get<Zone>(this._url + '/zones/one/'+ code_zone );
   }


   updateOneZone(code_zone: string, newzone: any){
      return this.http.put(this._url + '/zones/update/'+ code_zone, newzone);
   }



   
   //#endregion


//#region ---- // services district -----
  getAllDistricts(): Observable<District[]>{
  return this.http.get<District[]>(this._url + '/districts/all');
  }

  getAllPageDistricts(current_page: number): Observable<District[]>{
    return this.http.get<District[]>(this._url + '/districts/all/page?pagenumber='+  current_page );
    }

 getOneDistrict(code_district:string){
   return this.http.get<District>(this._url + '/districts/one/' + code_district);
 }
 
 updateDistrict(newdistrict : District,code_district: string){
   return this.http.put<District>(this._url + '/districts/update/' + code_district, newdistrict )
 }


  getAllDistrictsParZone(code_zone: string): Observable<District[]>{
    return this.http.get<District[]>(this._url + '/districts/all/zones/' + code_zone );
  }

  postDistrict(newDistrict : any){
    let httpHeader = new HttpHeaders();
    httpHeader.append('Content-Type','application/json; charset=utf-8');
    httpHeader.append('Transfer-Encoding','chunked');
    
    return this.http.post(this._url + '/districts/add/', newDistrict, {headers:httpHeader} );
   }

   deletedDistrict(code_district : string){
    let httpHeader = new HttpHeaders();
    httpHeader.append('Content-Type','application/json; charset=utf-8');
    httpHeader.append('Transfer-Encoding','chunked');
    return this.http.delete(this._url + '/districts/one/' + code_district, {headers:httpHeader})

   }

   
  //#endregion


//#region ---- // services region -----

      getAllRegions(): Observable<Region[]>{
        return this.http.get<Region[]>(this._url + '/regions/all');
      }

      getOneRegion(code_region: string): Observable<Region>{
        return this.http.get<Region>(this._url + '/regions/one/' + code_region)
      }

      getAllRegionsParDistrict(code_district: string): Observable<Region[]>{
        return this.http.get<Region[]>(this._url + '/regions/all/districts/' + code_district);
      }


      getAllRegionsParZone(code_zone: string): Observable<Region[]>{
        return this.http.get<Region[]>(this._url + '/regions/all/zones/' + code_zone);
      }


      getAllPageRegions(current_page: number): Observable<Region[]>{
        return this.http.get<Region[]>(this._url + '/regions/all/page?pagenumber='+  current_page );
      }


      postRegion(newRegion : any){
        let httpHeader = new HttpHeaders();
        httpHeader.append('Content-Type','application/json; charset=utf-8');
        httpHeader.append('Transfer-Encoding','chunked');
        
        return this.http.post(this._url + '/regions/add/', newRegion, {headers:httpHeader} );
       }

        
      updateRegion(newRegion : Region,code_region: string){
        return this.http.put<Region>(this._url + '/regions/update/' + code_region, newRegion )
      }


      deletedRegion(code_region : string){
        let httpHeader = new HttpHeaders();
        httpHeader.append('Content-Type','application/json; charset=utf-8');
        httpHeader.append('Transfer-Encoding','chunked');
        
        return this.http.delete(this._url + '/regions/one/' + code_region, {headers:httpHeader})
    
       }





  //#endregion

   
//#region ---- // services departement -----


  postDepartement(newDepartement : any){
    let httpHeader = new HttpHeaders();
    httpHeader.append('Content-Type','application/json; charset=utf-8');
    httpHeader.append('Transfer-Encoding','chunked');    
    return this.http.post(this._url + '/departements/add/', newDepartement, {headers:httpHeader} );
   }


   updateDepartement(newdepartement : Departement,code_deparetement: string){
    return this.http.put<District>(this._url + '/departements/update/' + code_deparetement, newdepartement )
  }


   getAllDepatrtements(){
     return this.http.get<Departement[]>(this._url + '/departements/all')
   }

   getAllDepatrtementsParRegion(code_region : string):Observable<Departement[]>{
    return this.http.get<Departement[]>(this._url + '/departements/all/regions/' + code_region );
  }
  
  getAllDepatrtementsParZone(code_zone : string):Observable<Departement[]>{
    return this.http.get<Departement[]>(this._url + '/departements/all/zones/' + code_zone );
  }

  getAllPageDepartements(current_page: number): Observable<Departement[]>{
    return this.http.get<Departement[]>(this._url + '/departements/all/page?pagenumber='+  current_page );
  }

  getOneDepartement(code_departement : string){
    return this.http.get<Departement>(this._url + '/departements/one/' + code_departement );
  }
  
  deletedDepartement(code_departement : string){
    let httpHeader = new HttpHeaders();
    httpHeader.append('Content-Type','application/json; charset=utf-8');
    httpHeader.append('Transfer-Encoding','chunked');
    return this.http.delete(this._url + '/departements/one/' + code_departement, {headers:httpHeader})

   }

 

  //#endregion


//#region ---- // services sous-prefecture -----

getAllSous_prefectures(): Observable<SousPrefecture[]>{
  return this.http.get<SousPrefecture[]>(this._url + '/Sous_prefectures/all');
  }

  getOneSous_prefecture(code_sous_pref:string){
    return this.http.get<SousPrefecture>(this._url + '/Sous_prefectures/one/' + code_sous_pref);
  }

  getAllPageSous_prefectures(current_page: number): Observable<SousPrefecture[]>{
    return this.http.get<SousPrefecture[]>(this._url + '/Sous_prefectures/all/page?pagenumber='+  current_page );
    }



  getAllSousPrefecturesParZone(code_zone: string): Observable<SousPrefecture[]>{
      return this.http.get<SousPrefecture[]>(this._url + '/Sous_prefectures/all/zones/' + code_zone );
    }

  getAllSousPrefecturesParRegion(code_region: string): Observable<SousPrefecture[]>{
      return this.http.get<SousPrefecture[]>(this._url + '/Sous_prefectures/all/regions/' + code_region );
    }

  getAllSousPrefecturesParDistrict(code_district: string): Observable<SousPrefecture[]>{
      return this.http.get<SousPrefecture[]>(this._url + '/Sous_prefectures/all/districts/' + code_district );
    }

  getAllSousPrefecturesParDepartement(code_departement: string): Observable<SousPrefecture[]>{
      return this.http.get<SousPrefecture[]>(this._url + '/Sous_prefectures/all/departements/' + code_departement );
    }


  deletedSousPrefectures(code_sous_pref : string){
      let httpHeader = new HttpHeaders();
      httpHeader.append('Content-Type','application/json; charset=utf-8');
      httpHeader.append('Transfer-Encoding','chunked');
      return this.http.delete(this._url + '/Sous_prefectures/one/' + code_sous_pref, {headers:httpHeader})
  
     }



   
//#endregion






  

}
