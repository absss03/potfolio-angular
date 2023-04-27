import { Component , EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fortaleza } from 'src/app/model/fortaleza';

@Component({
  selector: 'app-editar-fortaleza',
  templateUrl: './editar-fortaleza.component.html',
  styleUrls: ['./editar-fortaleza.component.css']
})
export class EditarFortalezaComponent {
  @Input() model!: Fortaleza;
  @Output() submit = new EventEmitter<string>();
  
  onCancel() {
    this.submit.emit("cancel");
  }

  onSubmit() {
    this.submit.emit("submit")
  }
}
