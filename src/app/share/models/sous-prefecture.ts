import { Departement } from "./departement";
import { District } from "./district";
import { Region } from "./region";
import { Zone } from "./zone";

export interface SousPrefecture {

    
    code_sous_pref : string;    
    libelle_sous_prefecture: string;
    longitude_sous_prefecture: number;
    latitude_sous_prefecture : number;  
    code_departement : string; 
    departement: Departement;
    region : Region;
    district : District;
    zone : Zone ;


   // List<quartier> quartiers { get; set; }
   // public List<village> villages { get; set; }

}
