import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-editar-banner',
  templateUrl: './editar-banner.component.html',
  styleUrls: ['./editar-banner.component.css']
})
export class EditarBannerComponent {
  @Input() model!: Persona;
  @Output() submit = new EventEmitter<string>();
  
  onCancel() {
    this.submit.emit("cancel");
  }

  onSubmit() {
    this.submit.emit("submit")
  }
}
