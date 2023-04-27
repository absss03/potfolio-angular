export class Proyecto {
    id: number;

    tituloProyecto: string;
    descripcionProyecto: string;
    url: string;

    constructor(id: number, tituloProyecto: string, descripcionProyecto: string, url: string) {
        this.id = id;
        this.tituloProyecto = tituloProyecto;
        this.descripcionProyecto = descripcionProyecto;
        this.url = url;
    }
}
