import { Agence } from "./agence";
import { Classe } from "./classe";
import { Corps } from "./corps";
import { Echellon } from "./echellon";
import { Employee } from "./employee";
import { TypeDePaie } from "./type-de-paie";

export class FichePaie {
    id : number=0;
    embouche : string='';
    dateFin: string='';
    numCompte: string='';
    salaireBase: string='';
    nbrPartFical: string='';
    nbrPartImpot: string='';
    nbrDenfantPrest: string='';

    jourBase: string='';

    nbreJourPresence: string='';


    corpsId : number=0;
    corps !:Corps;

    classeId : number=0;
    classe !:Classe;

    // statutId : number=0;
    // statut !:Statut;

    echellonId : number=0;
    echellon !:Echellon;

    // typeContratId : number=0;
    // typeContrat !:TypeContrat;

    employeeId : number=0;
    employee !:Employee;

    agenceId : number=0;
    agence !:Agence;

    typeDePaieId : number=0;
    typeDePaie !:TypeDePaie;



}
