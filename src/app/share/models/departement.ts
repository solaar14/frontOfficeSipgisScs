import { Region } from "./region";
import { Zone} from './zone';

export interface Departement {

        code_departement: string;    
        libelle_departement: string;        
        longitude_departement: number
        latitude_departement: number; 
        region :  Region ;
        zone: Zone;

}
