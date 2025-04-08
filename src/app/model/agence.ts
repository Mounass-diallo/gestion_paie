import { Banque } from "./banque";

export class Agence {
    id : number=0;
    name : string='';
    banqueId: number=0;
    banque !:Banque;
}
