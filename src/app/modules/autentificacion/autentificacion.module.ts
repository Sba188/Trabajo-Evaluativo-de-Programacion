import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { IniciosesionComponent } from './page/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './page/registro/registro.component';


//componentes de angular material 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IniciosesionComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [
    IniciosesionComponent,
    RegistroComponent,
    AutentificacionRoutingModule,
    //material
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule
  ]
})
export class AutentificacionModule { }
