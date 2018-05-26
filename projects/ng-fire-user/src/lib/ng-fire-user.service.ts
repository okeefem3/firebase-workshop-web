import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, DocumentSnapshot, Action } from 'angularfire2/firestore';
import { NgFireUser } from './ng-fire-user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NgFireUserService {

  constructor(private afs: AngularFirestore) { }

  getUserProfile(uid: string): Observable<NgFireUser> {
    return this.afs.doc<NgFireUser>(`users/${uid}`).snapshotChanges().pipe(
      map(actions => {
        return { uid: actions.payload.id, ...actions.payload.data() } as NgFireUser;
      })
    );
  }

  updateUserProfile(userProfile: NgFireUser) {

  }
}
