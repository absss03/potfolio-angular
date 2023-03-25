export class Formacion {
    id?: number;

    imagen: string;
    alt: string;
    institucion: string;
    descripccionFormacion: string;

    constructor(imagen: string, alt: string, institucion: string, descripccionFormacion: string) {
        this.imagen = imagen;
        this.alt = alt;
        this.institucion = institucion;
        this.descripccionFormacion = descripccionFormacion;
    }
}