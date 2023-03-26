import { Component, OnInit, Input} from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Persona } from 'src/app/model/persona';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
/*   @ViewChild('myModal')
  myModal!: ElementRef;
 */  
  @Input()
  esUsuario: boolean = false;
  
  introduccion: any;
  fotoperfil: any;
  nombre: any;
  dialog: any;

  constructor(private datos: PersonaService) {}

  ngOnInit(): void{
    this.datos.buscarPersona(1).subscribe(data =>{
     // this.persona = data;
      this.introduccion = data.introduccion;
      this.fotoperfil = data.fotoperfil;
      this.nombre = data.nombre;
    })
  }

//   agregarPresentacion(): void {
//     const modalRef = this.modalService.open(ModalPersonalComponent);
//     modalRef.componentInstance.user = this.introduccion;
// /*     modalRef.result.then((result) => {
//       if (result) {
//         console.log(result);
//       }
//     });
//  */    // modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
//     //   console.log(receivedEntry);
//     // })
//   }
}
