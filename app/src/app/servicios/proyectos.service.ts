import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  url= 'http://localhost:8080/proyecto/'
  constructor(private htttpClient:HttpClient) { }

  public listarProyectos(): Observable<Proyecto[]>{
    return this.htttpClient.get<Proyecto[]>(this.url + 'lista');
  }

  public buscarProyecto(id: number): Observable<Proyecto>{
    return this.htttpClient.get<Proyecto>(this.url + `ver/${id}`);
  }

  public crearProyecto(Proyecto: Proyecto): Observable<Proyecto[]>{
    return this.htttpClient.post<Proyecto[]>(this.url + 'create', Proyecto);
  }

  public editarProyecto(Proyecto: Proyecto): Observable<Proyecto[]>{
    return this.htttpClient.post<Proyecto[]>(this.url + 'edit', Proyecto);
  }

  public borrarProyecto(Proyecto: Proyecto): Observable<Proyecto[]>{
    return this.htttpClient.post<Proyecto[]>(this.url + 'delete', Proyecto);
  }
}
