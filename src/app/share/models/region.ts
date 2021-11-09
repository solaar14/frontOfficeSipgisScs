import { District } from "./district";
import{ Zone} from "./zone";

export interface Region {

    code_region: string;              
    libelle_region: string;
    longitude_region: number;
    latitude_region: number;
    district: District;
    zone: Zone;

}
