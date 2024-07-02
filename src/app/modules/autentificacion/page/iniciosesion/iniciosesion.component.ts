import { Component } from '@angular/core';

import { Usuario } from '../../../../models/usuario';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from '../../../shared/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css'],
})
export class IniciosesionComponent {
  hide = true;

  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router
  ) {}

  //importar la interfaz de usuario -> inicializar
  inicio: Usuario = {
    email: '',
    password: '',
    nombre: '',
    apellido: '',
    uid: '', //-> inicializamos con comillas simples porque es string,si fuera nambuer se inicializa con 0
    rol: '',
  };
  coleccionIniciosesion: Usuario[] = [];

  async inisiarsesion() {
    const credenciales = {
      email: this.inicio.email,
      password: this.inicio.password,
    };
    const res = await this.servicioAuth
      .iniciarSesion(credenciales.email, credenciales.password)
      .then((res) => {
        alert('Se pudo ingresar con exito !!!! :)');

        this.servicioRutas.navigate(['/Inicio']);
      })
      .catch((err) => {
        alert('hubo un error al iniciar sesión:(' + err);

        this.limpiar();
      });
  }
  limpiar() {
    const inputs = {
      email: this.inicio.email,
      password: this.inicio.password,
    };
  }
}
