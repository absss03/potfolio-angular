import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  url='http://localhost:8080/persona/lista'

  constructor(private httpClient:HttpClient) { }

  getDatos():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.url);
  }
//  getDatos():Observable<any>{
//    return this.http.get('./assets/db/db.json');
//  }
}
