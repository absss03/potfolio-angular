import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  texto: any;
  foto: any;
  nombre: any;
  constructor(private datos: DatosService) {}

  ngOnInit(): void{
    this.datos.getDatos().subscribe(data =>{
      this.texto = data.introduccion;
      this.foto = data.fotoperfil;
      this.nombre = data.nombre;
    })
  }
}
