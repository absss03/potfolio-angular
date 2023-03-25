import { Component, OnInit, Input } from '@angular/core';
import { FormacionService } from 'src/app/servicios/formacion.service';
import { Formacion } from 'src/app/model/formacion';
//import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {
  @Input()
  esUsuario: boolean = false;
  
  formaciones: Formacion[]=[];
  constructor(private datos: FormacionService) {}

  ngOnInit(): void{
    this.datos.listarFormaciones().subscribe(data =>{
      this.formaciones = data;
    })
  }
}
