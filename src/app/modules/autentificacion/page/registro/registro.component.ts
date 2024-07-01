import { Component } from '@angular/core';

import { Usuario } from '../../../../models/usuario';
//importamos servicio de autentificacion 
import { AuthService } from '../../services/auth.service';
//importamos el servicio de firestore
import { FirestoreService } from '../../../shared/services/firestore.service';
// importamos componente de rutas de angular 
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  hide = true;

   //importamos las caracteriziticas del usuario 

   usuario: Usuario = {
    uid: '',//-> inicializamos con comillas simples porque es string,si fuera nambuer se inicializa con 0
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    rol: ''

  }
  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router
  ) { }

  colecionUsuario: Usuario[] = [];


  async registrar() {
    //Registro con servicio de AUTH  
    const credenciales={
      email:this.usuario.email,
      password:this.usuario.password
    }
    const res = await this.servicioAuth.registrar(credenciales.email,credenciales.password)
    // el metodo then es una promesa que devuele el mismo valor si tdo sale bien 
    .then(res=>{
      alert("Se pudo registrar con exito :)")
      //el meotodo navigate nos redirecciona al inicio
      this.servicioRutas.navigate(['/inicio'])
    })
    // el metodo catch captura una falla y lo convierte en un error cuando la promesa sale mal 
    .catch(error=>{
      alert("Hubo un error al registrar un nuevo usuario :( \n"+error)
    })


  this.limpiar()
}



limpiar(){
  const inputs = {
    uid: this.usuario.uid = '',
      nombre: this.usuario.nombre = '',
      apellido: this.usuario.apellido = '',
      email: this.usuario.email = '',
      rol: this.usuario.rol = '',
      password: this.usuario.password = '',
  }
}
}
