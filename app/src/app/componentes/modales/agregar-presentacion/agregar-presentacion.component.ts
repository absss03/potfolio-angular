import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-agregar-presentacion',
  templateUrl: './agregar-presentacion.component.html',
  styleUrls: ['./agregar-presentacion.component.css']
})
export class AgregarPresentacionComponent {
  @Input()
  modalTitle: string = "";
  modalContent: string = "";
}
