export class Proyecto {
    id?: number;

    tituloProyecto: string;
    descripcionProyecto: string;
    url: string;

    constructor(tituloProyecto: string, descripcionProyecto: string, url: string) {
        this.tituloProyecto = tituloProyecto;
        this.descripcionProyecto = descripcionProyecto;
        this.url = url;
    }
}
