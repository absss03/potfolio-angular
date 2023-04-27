import { Component, OnInit } from '@angular/core';
import { EstadoService } from 'src/app/servicios/estado.service';
import { FormacionService } from 'src/app/servicios/formacion.service';
import { Formacion } from 'src/app/model/formacion';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {
    
  formaciones: Formacion[]=[];
  formacionNueva: Formacion={
    id: 0,
    imagen: '',
    alt: '',
    institucion: '',
    descripccionFormacion: ''
  };
  formacionVacia = {...this.formacionNueva}
  original = {...this.formaciones};
  editModes: boolean[]=[];
  editMode = false;
  formacion: Formacion = {
    id: 0,
    imagen: '',
    alt: '',
    institucion: '',
    descripccionFormacion: ''
  }

  constructor(public estadoService: EstadoService, private datos: FormacionService) {}

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
          this.datos.crearFormacion(this.formacionNueva).subscribe({});
          this.formaciones.push(this.formacionNueva);
        }
        this.formacionNueva = {...this.formacionVacia};
        this.editMode = false;
        break;
      case 'edito':
        if(updatedContent === "cancel") {
          this.formaciones[posicion] = this.original[posicion];
        } else {
          this.datos.editarFormacion(this.formaciones[posicion]).subscribe({})
          this.original[posicion] = this.formaciones[posicion];
        }
        this.editModes[posicion] = false;
        break;
      case 'borro':
        if(updatedContent === "submit") {
          this.datos.borrarFormacion(this.formaciones[posicion].id).subscribe({});
          this.formaciones.splice(posicion, 1);
          this.editModes.splice(posicion, 1);
        } else {
          this.editModes[posicion] = false;
        }
      }
    this.estadoService.editando = false;
  }

  ngOnInit(): void{
    this.datos.listarFormaciones().subscribe(data =>{
      this.formaciones = data;
      this.original = data;
    })
  }
}
