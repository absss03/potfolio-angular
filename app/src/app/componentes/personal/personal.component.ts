import { Component, OnInit, Input } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Persona } from 'src/app/model/persona';
//import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  @Input()
  esUsuario: boolean = false;
  
  introduccion: any;
  fotoperfil: any;
  nombre: any;
  constructor(private datos: PersonaService) {}

  ngOnInit(): void{
    this.datos.buscarPersona(1).subscribe(data =>{
      this.introduccion = data.introduccion;
      this.fotoperfil = data.fotoperfil;
      this.nombre = data.nombre;
    })
  }
}
