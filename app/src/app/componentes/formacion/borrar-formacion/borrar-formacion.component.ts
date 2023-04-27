import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Formacion } from 'src/app/model/formacion';

@Component({
  selector: 'app-borrar-formacion',
  templateUrl: './borrar-formacion.component.html',
  styleUrls: ['./borrar-formacion.component.css']
})
export class BorrarFormacionComponent {
  @Input() model!: Formacion;
  @Output() submit = new EventEmitter<string>();
  
  onCancel() {
    this.submit.emit("cancel");
  }

  onSubmit() {
    this.submit.emit("submit")
  }

}
