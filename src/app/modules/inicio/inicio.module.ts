import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './page/inicio/inicio.component';
import { CardComponent } from './components/card/card.component';
import { CaruselComponent } from './components/carusel/carusel.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    InicioComponent,
    CardComponent,
    CaruselComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports:[
    InicioComponent,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class InicioModule { }
