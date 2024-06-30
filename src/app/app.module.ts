import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

//import el formsmodules
import { FormsModule } from '@angular/forms';

// importamos componentes globales
import { SharedModule } from './modules/shared/shared.module';
//importamos las herramientas de las base de datos
import { envarioment } from '../environments/environment'; // vincula a la BD con la APP
import {AngularFireModule} from '@angular/fire/compat'; // trabaja con las colecciones de infromación
import {AngularFireAuthModule} from '@angular/fire/compat/auth';// trabaja con la autentificacion 
import {AngularFireStorageModule} from '@angular/fire/compat/storage';//trabaja con imagenes y archivos 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    SharedModule,
    //viculacion de firebase 
    AngularFireModule.initializeApp(envarioment.firebaseConfig),//inicializar firebase dentro del proyecto 
    AngularFireStorageModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
