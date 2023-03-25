export class Persona {
    id?: number;
    nombre : string;
    apellido : string;
    fotoperfil : string;
    mail : string;
    github : string;
    banner : string;
    introduccion : string;
    titulo: string | undefined;
    formacion: string | undefined;

    constructor(nombre: string, apellido: string, fotoperfil: string, mail: string, github: string, banner: string, introduccion: string, titulo: string, formacion: string){
        this.nombre = nombre;
        this.apellido=apellido;
        this.fotoperfil=fotoperfil;
        this.mail=mail;
        this.github=github;
        this.banner=banner;
        this.introduccion=introduccion;
        this.titulo = titulo;
        this.formacion = formacion;
    }
}
