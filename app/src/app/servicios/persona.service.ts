import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url= 'http://localhost:8080/persona/'
  constructor(private htttpClient:HttpClient) { }

  public lista(): Observable<Persona[]>{
    return this.htttpClient.get<Persona[]>(this.url + 'lista');
  }

  public ver(id: number): Observable<Persona>{
    return this.htttpClient.get<Persona>(this.url + `ver/${id}`);
  }

  public agregar(persona: Persona): Observable<any>{
    return this.htttpClient.post<any>(this.url + 'crear', persona);
  }

  public eliminar(id: number): Observable<any>{
    return this.htttpClient.delete<any>(this.url + `eliminar/${id}`);
  }

  public editar(persona: Persona): Observable<any>{
    return this.htttpClient.put<any>(this.url + 'editar', persona);
  }

}
