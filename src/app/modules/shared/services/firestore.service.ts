import { Injectable } from '@angular/core';

import{AngularFirestore,AngularFirestoreCollection} from '@angular/fire/compat/firestore'
import { Usuario } from '../../../models/usuario';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private usuariosCollection:AngularFirestoreCollection<Usuario>
  constructor(private database:AngularFirestore) { 
     /* 
    Usuariocollection va a definir la nueva coleccion 'usuarios' que estara en nuestra base de datos 
    */
    this.usuariosCollection = this.database.collection<Usuario>('usuarios');

  }
  agregarUsuario(usuario: Usuario,id:string){
    /*
    Creamos una nueva PROMESA junto los metodos:
    RESOLVE: promesa resuelta -> funciona correctamente
    REJECT: promesa rechazada -> ocurrió una falla
    */

    return new Promise(async(resolve,reject)=>{
      //bloque TRY encapsula la logica resuelta
      try{
        usuario.uid = id ;

        /*
        * const resultado = colección de usuarios, evia como numero de documento el UID
        *y setea la informacion que ingresamos en el formulario de Registro

        */


        const resuelto = await this.usuariosCollection.doc(id).set(usuario)
        
        resolve(resuelto);
        // Bloque CATCH encapsula la logica RECHAZADA
      } catch(error){
        //captura una falla y la vuelve un "error"
        reject(error)
      }
    })
  }
}
