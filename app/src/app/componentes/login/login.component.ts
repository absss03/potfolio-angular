import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from 'src/app/model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @Input() esUsuario: boolean = false;
  @Output() newItemEvent = new EventEmitter<boolean>();

  changeStatus(value: boolean) {
    this.newItemEvent.emit(value);
  }

  form: FormGroup;

  constructor (private formBuilder: FormBuilder){
    this.form= this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]],
    })
  }


  ngOnInit() {}

  get Password(){
    return this.form.get("password");
  }

  get Mail(){
    return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }
  get MailValid(){
    return this.Mail?.touched && !this.Mail?.valid;
  }

  onEnviar(event: Event){
    event.preventDefault;
    if(this.form.valid){
      alert("Todo OK. Enviar formulario")
    }else{
      this.form.markAllAsTouched();
    }
  }
}