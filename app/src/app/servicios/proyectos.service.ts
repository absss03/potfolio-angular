import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';
import { Constantes } from '../model/constantes';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  url= 'http://'+Constantes.backend+':8080/proyecto/'
  constructor(private htttpClient:HttpClient) { }

  public listarProyectos(): Observable<Proyecto[]>{
    return this.htttpClient.get<Proyecto[]>(this.url + 'lista');
  }

  public buscarProyecto(id: number): Observable<Proyecto>{
    return this.htttpClient.get<Proyecto>(this.url + `ver/${id}`);
  }

  public crearProyecto(proyecto: Proyecto): Observable<Proyecto>{
    return this.htttpClient.post<Proyecto>(this.url + 'crear', proyecto);
  }

  public editarProyecto(proyecto: Proyecto): Observable<Proyecto>{
    return this.htttpClient.put<Proyecto>(this.url + 'editar', proyecto);
  }

  public borrarProyecto(id: number): Observable<Proyecto>{
    return this.htttpClient.delete<Proyecto>(this.url + `borrar/${id}`);
  }
}
