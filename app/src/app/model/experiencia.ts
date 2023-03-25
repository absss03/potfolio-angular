export class Experiencia {
    id?: number;
    
    empresa: string;
    inicio: string;
    fin: string;
    descripccionPuesto: string;

    constructor(empresa: string, inicio: string, fin: string, descripccionPuesto: string ) {
        this.empresa = empresa;
        this.inicio = inicio;
        this.fin = fin;
        this.descripccionPuesto = descripccionPuesto;
    }
}
