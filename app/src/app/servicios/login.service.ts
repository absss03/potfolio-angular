import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../model/login';
import { Constantes } from '../model/constantes';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url= 'http://'+Constantes.backend+':8080/login/'
  constructor(private htttpClient:HttpClient) { }

  public buscarMail(email: string): Observable<Login>{
    return this.htttpClient.get<Login>(this.url + `ver/${email}`);
  }
}
