import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';

@Component({
  selector: 'app-borrar-proyecto',
  templateUrl: './borrar-proyecto.component.html',
  styleUrls: ['./borrar-proyecto.component.css']
})
export class BorrarProyectoComponent {
  @Input() model!: Proyecto;
  @Output() submit = new EventEmitter<string>();
  
  onCancel() {
    this.submit.emit("cancel");
  }

  onSubmit() {
    this.submit.emit("submit")
  }
}
