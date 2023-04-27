import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Fortaleza } from 'src/app/model/fortaleza';

@Component({
  selector: 'app-borrar-fortaleza',
  templateUrl: './borrar-fortaleza.component.html',
  styleUrls: ['./borrar-fortaleza.component.css']
})
export class BorrarFortalezaComponent {
  @Input() model!: Fortaleza;
  @Output() submit = new EventEmitter<string>();
  
  onCancel() {
    this.submit.emit("cancel");
  }

  onSubmit() {
    this.submit.emit("submit")
  }
}
