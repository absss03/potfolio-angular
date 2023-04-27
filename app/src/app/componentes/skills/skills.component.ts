import { Component , OnInit } from '@angular/core';
import { EstadoService } from 'src/app/servicios/estado.service';
import { StackService } from 'src/app/servicios/stacks.service';
import { Stack } from 'src/app/model/stack';
import { FortalezasService } from 'src/app/servicios/fortalezas.service';
import { Fortaleza } from 'src/app/model/fortaleza';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  stacks: Stack[]=[];
  original = {...this.stacks};
  stackNuevo: Stack={
    id: 0,
    lenguaje: '',
    porcentaje: ''
  };
  stackVacio = {...this.stackNuevo}
  editModes: boolean[]=[];
  editMode = false;

  fortalezas: Fortaleza[]=[];
  originaf = {...this.fortalezas};
  fortalezaNueva: Fortaleza={
    id: 0,
    texto: ''
  };
  fortalezaVacia = {...this.fortalezaNueva}
  editModef: boolean[]=[];
  editModf = false;

  constructor(public estadoService: EstadoService, private datos: StackService, private datof: FortalezasService) {}

  accion(aspecto: string, metodo: string, posicion: number) {
    this.estadoService.editando = true;
    if(aspecto === 'fortaleza') {
      switch (metodo) {
        case 'agrego':
          this.editModf = true;
          break;
        case 'edito':
          this.editModef[posicion] = true;
          break;
        case 'borro':
          this.editModef[posicion] = true;
      }
    }
    if(aspecto === 'lenguaje') {
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
    }
    this.estadoService.accion = metodo        
  }
  
  onSubmit(aspecto: string, updatedContent: string, posicion: number) {
    if(aspecto === 'fortaleza') {
      switch (this.estadoService.accion) {
        case 'agrego':
          if(updatedContent === "submit") {
            this.datof.crearFortaleza(this.fortalezaNueva).subscribe({});
            this.fortalezas.push(this.fortalezaNueva);
          }
          this.fortalezaNueva = {...this.fortalezaVacia};
          this.editModf = false;
          break;
        case 'edito':
          if(updatedContent === "cancel") {
            this.fortalezas[posicion] = this.originaf[posicion];
          } else {
            this.datof.editarFortaleza(this.fortalezas[posicion]).subscribe({})
            this.originaf[posicion] = this.fortalezas[posicion];
          }
          this.editModef[posicion] = false;
          break;
        case 'borro':
          if(updatedContent === "submit") {
            this.datof.borrarFortaleza(this.fortalezas[posicion].id).subscribe({});
            this.fortalezas.splice(posicion, 1);
            this.editModef.splice(posicion, 1);
          } else {
            this.editModef[posicion] = false;
          }
      }
    }
    if(aspecto === 'lenguaje') {
      switch (this.estadoService.accion) {
        case 'agrego':
          if(updatedContent === "submit") {
            this.datos.crearStack(this.stackNuevo).subscribe({})
            this.stacks.push(this.stackNuevo);
          }
          this.stackNuevo = {...this.stackVacio};
          this.editMode = false;
          break;
        case 'edito':
          if(updatedContent === "cancel") {
            this.stacks[posicion] = this.original[posicion];
          } else {
            this.datos.editarStack(this.stacks[posicion]).subscribe({})
            this.original[posicion] = this.stacks[posicion];
          }
          this.editModes[posicion] = false;
          break;
        case 'borro':
          if(updatedContent === "submit") {
            this.datos.borrarStack(this.stacks[posicion].id).subscribe({})
            this.stacks.splice(posicion, 1);
            this.editModes.splice(posicion, 1);
          } else {
            this.editModes[posicion] = false;
          }
      }
    }
  this.estadoService.editando = false;
  }

  ngOnInit(): void{
    this.datos.listarStacks().subscribe(data =>{
      this.stacks = data;
      this.original = data;
    })
    this.datof.listarHabilidades().subscribe(data =>{
      this.fortalezas = data;
      this.originaf = data;
    })
  }
}