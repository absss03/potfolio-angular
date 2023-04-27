import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-editar-personal',
  templateUrl: './editar-personal.component.html',
  styleUrls: ['./editar-personal.component.css']
})
export class EditarPersonalComponent {
  @Input() model!: Persona;
  @Output() submit = new EventEmitter<string>();

  onCancel() {
    this.submit.emit("cancel");
  }

  onSubmit() {
    this.submit.emit("submit")
  }
}
