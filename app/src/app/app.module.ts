import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTrashCan, faFloppyDisk, faSquarePen, faSquarePlus, faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { PersonalComponent } from './componentes/personal/personal.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { EditarBannerComponent } from './componentes/banner/editar-banner/editar-banner.component';
import { EditarPersonalComponent } from './componentes/personal/editar-personal/editar-personal.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia/editar-experiencia.component';
import { EditarFormacionComponent } from './componentes/formacion/editar-formacion/editar-formacion.component';
import { EditarSkillComponent } from './componentes/skills/editar-skill/editar-skill.component';
import { EditarFortalezaComponent } from './componentes/skills/editar-fortaleza/editar-fortaleza.component';
import { EditarProyectoComponent } from './componentes/proyectos/editar-proyecto/editar-proyecto.component';
import { BorrarExperienciaComponent } from './componentes/experiencia/borrar-experiencia/borrar-experiencia.component';
import { BorrarFormacionComponent } from './componentes/formacion/borrar-formacion/borrar-formacion.component';
import { BorrarProyectoComponent } from './componentes/proyectos/borrar-proyecto/borrar-proyecto.component';
import { BorrarSkillComponent } from './componentes/skills/borrar-skill/borrar-skill.component';
import { BorrarFortalezaComponent } from './componentes/skills/borrar-fortaleza/borrar-fortaleza.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    PersonalComponent,
    ExperienciaComponent,
    FormacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    EditarBannerComponent,
    EditarPersonalComponent,
    EditarExperienciaComponent,
    EditarFormacionComponent,
    EditarSkillComponent,
    EditarFortalezaComponent,
    EditarProyectoComponent,
    BorrarExperienciaComponent,
    BorrarFormacionComponent,
    BorrarProyectoComponent,
    BorrarSkillComponent,
    BorrarFortalezaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faTrashCan, faFloppyDisk, faSquarePen, faSquarePlus, faSquareXmark);
  } 
}
