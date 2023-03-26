import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stack } from '../model/stack';

@Injectable({
  providedIn: 'root'
})
export class StackService {
  url= 'http://localhost:8080/stack/'
  constructor(private htttpClient:HttpClient) { }

  public listarStacks(): Observable<Stack[]>{
    return this.htttpClient.get<Stack[]>(this.url + 'lista');
  }

  public buscarStack(id: number): Observable<Stack>{
    return this.htttpClient.get<Stack>(this.url + `ver/${id}`);
  }

  public crearStack(stack: Stack): Observable<Stack>{
    return this.htttpClient.post<Stack>(this.url + 'crear', stack);
  }

  public editarStack(stack: Stack): Observable<Stack>{
    return this.htttpClient.put<Stack>(this.url + 'editar', stack);
  }

  public borrarStack(id: number): Observable<Stack>{
    return this.htttpClient.delete<Stack>(this.url + `borrar/${id}`);
  }
}
