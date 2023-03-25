import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url= 'http://localhost:8080/login/'
  constructor(private htttpClient:HttpClient) { }

  public loginUser(): Observable<object>{
    return this.htttpClient.get<Login[]>(this.url + 'lista');
  }
}
