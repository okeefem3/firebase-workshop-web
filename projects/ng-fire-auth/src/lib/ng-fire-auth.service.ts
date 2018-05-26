import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { User } from '@firebase/auth-types';

@Injectable({
  providedIn: 'root'
})
export class NgFireAuthService {

  constructor(public afAuth: AngularFireAuth, public snackBar: MatSnackBar) { }

  signInWithGoogle(): void {
    const provider = new auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    this.afAuth.auth.signInWithPopup(provider).then(auth => {
      this.snackBar.open(`Signed in as ${auth.user.displayName}.`, 'Dismiss', {
        duration: 5000
      });
    }).catch(() => {
      this.snackBar.open(`There was an error signing in.`, 'Dismiss', {
        duration: 5000
      });
    });
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.snackBar.open(`Successfully Signed Out`, 'Dismiss', {
        duration: 5000
      });
    });
  }

  public getCurrentAuthState(): Observable<User> {
    return this.afAuth.authState;
  }
}
