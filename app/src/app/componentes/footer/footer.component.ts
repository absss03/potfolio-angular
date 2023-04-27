import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  nombre: any;
  mail: any;
  github: any;
  constructor(private datos: PersonaService) {}

  ngOnInit(): void{
    this.datos.buscarPersona(1).subscribe(data =>{
      this.nombre = data.nombre;
      this.mail = data.mail;
      this.github = data.github;
    })
  }
}

