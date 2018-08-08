import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class EmailAuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private afFirestore: AngularFirestore
  ) {}

  loginUser(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signupUser(email: string, password: string): Promise<void> {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then((newUserCredential: firebase.auth.UserCredential) => {
        this.afFirestore
          .doc(`/userProfile/${newUserCredential.user.uid}`)
          .update({ email });
      })
      .catch(error => {
        console.error(error);
        throw new Error(error);
      });
  }

  resetPassword(email: string): Promise<void> {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  logoutUser(): Promise<void> {
    return this.afAuth.auth.signOut();
  }
}
