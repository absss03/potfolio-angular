import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciasService {
  url= 'http://localhost:8080/experiencia/'
  constructor(private htttpClient:HttpClient) { }

  public listarExperiencias(): Observable<Experiencia[]>{
    return this.htttpClient.get<Experiencia[]>(this.url + 'lista');
  }

  public buscarExperiencia(id: number): Observable<Experiencia>{
    return this.htttpClient.get<Experiencia>(this.url + `ver/${id}`);
  }

  public crearExperiencia(experiencia: Experiencia): Observable<Experiencia[]>{
    return this.htttpClient.post<Experiencia[]>(this.url + 'create', experiencia);
  }

  public editarExperiencia(experiencia: Experiencia): Observable<Experiencia[]>{
    return this.htttpClient.post<Experiencia[]>(this.url + 'edit', experiencia);
  }

  public borrarExperiencia(experiencia: Experiencia): Observable<Experiencia[]>{
    return this.htttpClient.post<Experiencia[]>(this.url + 'delete', experiencia);
  }
}
