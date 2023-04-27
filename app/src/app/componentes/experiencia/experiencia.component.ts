import { Component, OnInit } from '@angular/core';
import { EstadoService } from 'src/app/servicios/estado.service';
import { ExperienciasService } from 'src/app/servicios/experiencias.service';
import { Experiencia } from 'src/app/model/experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  experiencias: Experiencia[]=[];
  original = {...this.experiencias};
  experienciaNueva: Experiencia={
    id: 0,
    empresa: '',
    inicio: '',
    fin: '',
    descripccionPuesto: ''
  };
  experienciaVacia = {...this.experienciaNueva};
  editModes: boolean[]=[];
  editMode = false;

  constructor(public estadoService: EstadoService, private datos: ExperienciasService) {}

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
          this.datos.crearExperiencia(this.experienciaNueva).subscribe({});
          this.experiencias.push(this.experienciaNueva);
        }
        this.experienciaNueva = {...this.experienciaVacia};
        this.editMode = false;
        break;
      case 'edito':
        if(updatedContent === "cancel") {
          this.experiencias[posicion] = this.original[posicion];
        } else {
          this.datos.editarExperiencia(this.experiencias[posicion]).subscribe({});
          this.original[posicion] = this.experiencias[posicion];
        }
        this.editModes[posicion] = false;
        break;
      case 'borro':
        if(updatedContent === "submit") {
          this.datos.borrarExperiencia(this.experiencias[posicion].id).subscribe({});
          this.experiencias.splice(posicion, 1);
          this.editModes.splice(posicion, 1);
        } else {
          this.editModes[posicion] = false;
        }
      }
    this.estadoService.editando = false;
  }

  ngOnInit(): void{
    this.datos.listarExperiencias().subscribe(data =>{
      this.experiencias = data;
      this.original = data;
    })
  }
}
