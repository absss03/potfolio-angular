import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fortaleza } from '../model/fortaleza';

@Injectable({
  providedIn: 'root'
})
export class FortalezasService {
  url= 'http://localhost:8080/habilidad/'
  constructor(private htttpClient:HttpClient) { }

  public listarHabilidades(): Observable<Fortaleza[]>{
    return this.htttpClient.get<Fortaleza[]>(this.url + 'lista');
  }

  public buscarFortaleza(id: number): Observable<Fortaleza>{
    return this.htttpClient.get<Fortaleza>(this.url + `ver/${id}`);
  }

  public crearFortaleza(fortaleza: Fortaleza): Observable<Fortaleza>{
    return this.htttpClient.post<Fortaleza>(this.url + 'crear', fortaleza);
  }

  public editarFortaleza(fortaleza: Fortaleza): Observable<Fortaleza>{
    return this.htttpClient.put<Fortaleza>(this.url + 'editar', fortaleza);
  }

  public borrarFortaleza(id: number): Observable<Fortaleza>{
    return this.htttpClient.delete<Fortaleza>(this.url + `borrar/${id}`);
  }
}
