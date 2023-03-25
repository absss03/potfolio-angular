import { Component, OnInit, Input } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
//import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input()
  esUsuario: boolean = false;
  
  nombre: any;
  apellido:any;
  titulo: any;
  banner: any;
  constructor(private datos: PersonaService) {}


  ngOnInit(): void{
    this.datos.buscarPersona(1).subscribe(data =>{
      this.nombre = data.nombre;
      this.apellido=data.apellido;
      this.titulo = data.titulo;
      this.banner = data.banner;
    })
  }
}

