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

  public crearFortaleza(Fortaleza: Fortaleza): Observable<Fortaleza[]>{
    return this.htttpClient.post<Fortaleza[]>(this.url + 'create', Fortaleza);
  }

  public editarFortaleza(Fortaleza: Fortaleza): Observable<Fortaleza[]>{
    return this.htttpClient.post<Fortaleza[]>(this.url + 'edit', Fortaleza);
  }

  public borrarFortaleza(Fortaleza: Fortaleza): Observable<Fortaleza[]>{
    return this.htttpClient.post<Fortaleza[]>(this.url + 'delete', Fortaleza);
  }
}
