import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formacion } from '../model/formacion';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {
  url= 'http://localhost:8080/formacion/'
  constructor(private htttpClient:HttpClient) { }

  public listarFormaciones(): Observable<Formacion[]>{
    return this.htttpClient.get<Formacion[]>(this.url + 'lista');
  }

  public buscarFormacion(id: number): Observable<Formacion>{
    return this.htttpClient.get<Formacion>(this.url + `ver/${id}`);
  }

  public crearFormacion(formacion: Formacion): Observable<Formacion>{
    return this.htttpClient.post<Formacion>(this.url + 'crear', formacion);
  }

  public editarFormacion(formacion: Formacion): Observable<Formacion>{
    return this.htttpClient.put<Formacion>(this.url + 'editar', formacion);
  }

  public borrarFormacion(id: number): Observable<Formacion>{
    return this.htttpClient.delete<Formacion>(this.url + `borrar/${id}`);
  }
}
