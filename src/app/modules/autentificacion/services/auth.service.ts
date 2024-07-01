import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

   //Referenciar auth de firebase en el servicio
   constructor(public auth: AngularFireAuth) { }

   //FUNCION PARA REGISTRO
   registrar(email: string, password: string) {
     //retorna el valor que es creado con el metodo "createUser"
     return this.auth.createUserWithEmailAndPassword(email, password);
   }
   //FUNCION PARA INICIO DE SESIÓN
 
   iniciarSesion(email: string, password: string) {
     //validar la iformacion del usario -> saber si existe en la coleccion 
     return this.auth.signInWithEmailAndPassword(email, password)
   }
   //FUNCIO  N PARA CERRAR SESIÓN
   cerrarSesion() {
     //  devuelve una promesa vacía -> qiota token 
     return this.auth.signOut();
   }
 
   //FUNCION PARA TOMAR UID
     
   async obtenerUid(){
     //Nos va a generar una promesa y la constante la va a capturar 
     const user = await this.auth.currentUser;
     /* 
     Si el usuario no respeta la estructura de la interfaz /
     Si tuvo problemas para el registro -> ej: mal internte
     */
     if(user == null){
       return null;
     }else{
       return user.uid;
     }
   }  
}
