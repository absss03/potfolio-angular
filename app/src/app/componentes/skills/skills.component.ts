import { Component , OnInit, Input } from '@angular/core';
import { StackService } from 'src/app/servicios/stacks.service';
import { Stack } from 'src/app/model/stack';
import { FortalezasService } from 'src/app/servicios/fortalezas.service';
import { Fortaleza } from 'src/app/model/fortaleza';
//import { DatosService } from 'src/app/servicios/datos.service'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input()
  esUsuario: boolean = false;
  
  stacks: Stack[]=[];
  fortalezas: Fortaleza[]=[];
  constructor(private datos: StackService, private datof: FortalezasService) {}

  ngOnInit(): void{
    this.datos.listarStacks().subscribe(data =>{
      this.stacks = data;
    })
    this.datof.listarHabilidades().subscribe(data =>{
      this.fortalezas = data;
    })
  }
}
