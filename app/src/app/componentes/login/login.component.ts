import { Component, OnInit, Input } from '@angular/core';
import { EstadoService } from 'src/app/servicios/estado.service';
import { LoginService } from 'src/app/servicios/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email!: string;
  user_email: any;
  user_password: any;
  user_id: any;
  
  loginform!: FormGroup;
  datos: any;

  verificado: Boolean = false;

  constructor (public estadoService: EstadoService, private loginService: LoginService, private formBuilder: FormBuilder){
  }

  ngOnInit() {
    this.loginform = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get Password(){
    return this.loginform.get("password");
  }
  get Mail(){
    return this.loginform.get("email");
  }
  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }
  get MailValid(){
    return this.Mail?.touched && !this.Mail?.valid;
  }

  verificar() {
    this.verificado = false;
    // this.datos.buscarMail(this.email).subscribe((data: { password: any; user_id: any; }) =>{
    //   this.user_password=data.password;
    //   this.user_id = data.user_id;
    // })
    if(this.loginform.controls['email'].value === "barbieriabigailok@gmail.com") {
      this.verificado = true;
    }
    return this.verificado
  }

  onEnviar() {
    if(this.loginform.controls['email'].touched && this.loginform.controls['email'].valid && this.verificar()) {
      
      if (this.loginform.controls['password'].value == "argentina") {
        alert("Bienvenido "+ this.loginform.controls['email'].value)
        this.estadoService.logueado = true;
      } else {
        alert("El Mail o el Password no coinciden!")
        this.loginform.markAllAsTouched();
      }
    }
  }
}