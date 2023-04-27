import { Component } from '@angular/core';
import { EstadoService } from 'src/app/servicios/estado.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public estadoService: EstadoService) {}

  logout() {
    this.estadoService.logueado = false;
  }
}
