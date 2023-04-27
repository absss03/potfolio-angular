import { Component, OnInit } from '@angular/core';
import { EstadoService } from 'src/app/servicios/estado.service';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { Proyecto } from 'src/app/model/proyecto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyecto[]=[];
  original = {...this.proyectos};
  proyectoNuevo: Proyecto={
    id: 0,
    tituloProyecto: '',
    descripcionProyecto: '',
    url: ''
  };
  proyectoVacio = {...this.proyectoNuevo}
  editModes: boolean[]=[];
  editMode = false;

  constructor(public estadoService: EstadoService, private datos: ProyectosService) {}

  accion(metodo: string, posicion: number) {
    this.estadoService.editando = true;
    switch (metodo) {
      case 'agrego':
        this.editMode = true;
        break;
      case 'edito':
        this.editModes[posicion] = true;
        break;
      case 'borro':
        this.editModes[posicion] = true;
      }
    this.estadoService.accion = metodo        
  }

  onSubmit(updatedContent: string, posicion: number) {
    switch (this.estadoService.accion) {
      case 'agrego':
        if(updatedContent === "submit") {
          this.datos.crearProyecto(this.proyectoNuevo)  //.subscribe({});
          // this.cdRef.detectChanges();
          // this.ngOnInit();
          this.proyectos.push(this.proyectoNuevo);
        }
        this.proyectoNuevo = {...this.proyectoVacio};
        this.editMode = false;
        break;
      case 'edito':
        if(updatedContent === "cancel") {
          this.proyectos[posicion] = this.original[posicion];
        } else {
          this.datos.editarProyecto(this.proyectos[posicion])  //.subscribe({});
          // this.cdRef.detectChanges();
          // this.ngOnInit();
          this.original[posicion] = this.proyectos[posicion];
        }
        this.editModes[posicion] = false;
        break;
      case 'borro':
        if(updatedContent === "submit") {
          console.log("id :", this.proyectos[posicion].id)
          this.datos.borrarProyecto(this.proyectos[posicion].id)  //.subscribe({});
          // this.ngOnInit();
          this.proyectos.splice(posicion, 1);
          this.editModes.splice(posicion, 1);
        } else {
          this.editModes[posicion] = false;
        }
      }
    this.estadoService.editando = false;
  }

  ngOnInit(): void{
    this.datos.listarProyectos().subscribe(data =>{
      this.proyectos = data;
      this.original = data;
    })
  }
}
