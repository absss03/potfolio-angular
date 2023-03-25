import { Component, OnInit, Input } from '@angular/core';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { Proyecto } from 'src/app/model/proyecto';
//import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  @Input()
  esUsuario: boolean = false;
  
  proyectos: Proyecto[]=[];
  constructor(private datos: ProyectosService) {}

  ngOnInit(): void{
    this.datos.listarProyectos().subscribe(data =>{
      this.proyectos = data;
    })
  }
}
