export class Experiencia {
    id: number;
    
    empresa: string;
    inicio: string;
    fin: string;
    descripccionPuesto: string;

    constructor(id: number, empresa: string, inicio: string, fin: string, descripccionPuesto: string ) {
        this.id = id;
        this.empresa = empresa;
        this.inicio = inicio;
        this.fin = fin;
        this.descripccionPuesto = descripccionPuesto;
    }
}
