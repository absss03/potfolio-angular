// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { PersonaService } from 'src/app/servicios/persona.service';
// import { Persona } from 'src/app/model/persona';

// @Component({
//   selector: 'app-modal-personal',
//   templateUrl: './modal-personal.component.html',
//   styleUrls: ['./modal-personal.component.css']
// })
// export class ModalPersonalComponent implements OnInit{
//   form: FormGroup;
//   fotoperfil: '';
//   introduccion: '';

//   constructor(private formBulider: FormBuilder, private persona:PersonaService){
//     this.form = this.formBulider.group({
//       fotoperfil[''];
//       introduccion[''];

//     })
//   }
//   ngOnInit(): void {
//   }
// }

// onCreate(): void{
//   const pepe= new Persona(this.fotoprtfil, this.introduccion);
//   this.persona.save(pepe).subscribe(data=>{
//     alert("Cosas nuevas");
//     window.location.reload();
// })

// onEnviar(event:Event){
//   event.preventDefault;
//   this.onCreate();
// }
  
// }