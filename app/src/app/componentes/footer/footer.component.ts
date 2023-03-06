import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  nombre: any;
  mail: any;
  github: any;
  constructor(private datos: DatosService) {}

  ngOnInit(): void{
    this.datos.getDatos().subscribe(data =>{
      this.nombre = data.nombre;
      this.mail = data.mail;
      this.github = data.github;
    })
  }
}

