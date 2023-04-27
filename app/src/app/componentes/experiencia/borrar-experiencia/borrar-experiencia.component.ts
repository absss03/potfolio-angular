import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';

@Component({
  selector: 'app-borrar-experiencia',
  templateUrl: './borrar-experiencia.component.html',
  styleUrls: ['./borrar-experiencia.component.css']
})
export class BorrarExperienciaComponent {
  @Input() model!: Experiencia;
  @Output() submit = new EventEmitter<string>();
  
  onCancel() {
    this.submit.emit("cancel");
  }

  onSubmit() {
    this.submit.emit("submit")
  }
}
