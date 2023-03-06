import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {
  formacion: any;
  constructor(private datos: DatosService) {}

  ngOnInit(): void{
    this.datos.getDatos().subscribe(data =>{
      this.formacion = data.formacion;
    })
  }
}
