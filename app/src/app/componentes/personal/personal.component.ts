import { Component, OnInit, Input} from '@angular/core';
import { EstadoService } from 'src/app/servicios/estado.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Persona } from 'src/app/model/persona';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  @Input() esUsuario: boolean = false;

  persona: Persona={
    nombre: '',
    apellido: '',
    fotoperfil: '',
    mail: '',
    github: '',
    banner: '',
    introduccion: '',
    titulo: undefined,
    formacion: undefined
  };
  original = {...this.persona};
  editMode = false;

  constructor(public estadoService: EstadoService, private datos: PersonaService) {}

  accion(metodo: string) {
    this.estadoService.editando = true;
    if (metodo === 'edito') {
      this.editMode = true;
    }
  }

  onSubmit(updatedContent: string) {
    if(updatedContent === "cancel") {
      this.persona = {...this.original}
    } else {
      this.datos.editarPersona(this.persona).subscribe({
      })
      this.original = {...this.persona}
    }
    this.editMode = false;
    this.estadoService.editando = false;
  }

  ngOnInit(): void{
    this.datos.buscarPersona(1).subscribe(data =>{
      this.persona = data;
      this.original = data;
    })
  }
}
