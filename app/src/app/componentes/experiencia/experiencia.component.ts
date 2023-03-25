import { Component, OnInit, Input } from '@angular/core';
import { ExperienciasService } from 'src/app/servicios/experiencias.service';
import { Experiencia } from 'src/app/model/experiencia';
//import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  @Input()
  esUsuario: boolean = false;

  experiencias: Experiencia[]=[];
  constructor(private datos: ExperienciasService) {}

  ngOnInit(): void{
    this.datos.listarExperiencias().subscribe(data =>{
      this.experiencias = data;
    })
  }
}
