import { Civil } from "./civil";

export class Employee {
    id : number=0;
    name : string='';
    email : string='';
    matricule : string='';
    numeroCNI : number=0;
    civilId: number=0;
    civil !:Civil;

}
