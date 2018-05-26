import { NgModule } from '@angular/core';
import { NgFireUserComponent } from './ng-fire-user.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  imports: [
    AngularFirestoreModule
  ],
  declarations: [NgFireUserComponent],
  exports: [NgFireUserComponent]
})
export class NgFireUserModule { }
