import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Formacion } from 'src/app/model/formacion';

@Component({
  selector: 'app-editar-formacion',
  templateUrl: './editar-formacion.component.html',
  styleUrls: ['./editar-formacion.component.css']
})
export class EditarFormacionComponent {
  @Input() model!: Formacion;
  @Output() submit = new EventEmitter<string>();
  
  onCancel() {
    this.submit.emit("cancel");
  }

  onSubmit() {
    this.submit.emit("submit")
  }
}
