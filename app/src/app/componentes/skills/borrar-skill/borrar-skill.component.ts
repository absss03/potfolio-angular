import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Stack } from 'src/app/model/stack';

@Component({
  selector: 'app-borrar-skill',
  templateUrl: './borrar-skill.component.html',
  styleUrls: ['./borrar-skill.component.css']
})
export class BorrarSkillComponent {
  @Input() model!: Stack;
  @Output() submit = new EventEmitter<string>();
  
  onCancel() {
    this.submit.emit("cancel");
  }

  onSubmit() {
    this.submit.emit("submit")
  }
}
