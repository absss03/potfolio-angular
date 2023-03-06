import { Component , OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  stack: any;
  info: any;
  constructor(private datos: DatosService) {}

  ngOnInit(): void{
    this.datos.getDatos().subscribe(data =>{
      this.stack = data.stack;
      this.info = data.fortalezas;
    })
  }
}
