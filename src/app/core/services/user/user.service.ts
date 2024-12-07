import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc, Timestamp } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: Firestore) {

  }

 getPerfilUser(): Observable<User[]> {
   const userRef = collection(this.firestore, 'usuarios');
   //console.log("userRef: " + JSON.stringify(userRef));
   return collectionData(userRef, { idField: 'id' }).pipe(
    map((users: User[]) => {
      return users.map((user) => {
        console.log("GTPX-user: " + JSON.stringify(user));
        console.log("user-id: " + user.id);
        console.log("user-nombre: " + user.nombre);

        return user;
      });
    })
  );

 }

}
