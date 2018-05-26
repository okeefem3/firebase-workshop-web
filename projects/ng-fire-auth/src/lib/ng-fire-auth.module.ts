import { NgModule } from '@angular/core';
import { NgFireAuthComponent } from './ng-fire-auth.component';
import { MatCardModule, MatButtonModule, MatSnackBarModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';

// const authRoutes: Routes = [
//   { path: 'auth', component: NgFireAuthComponent }
// ];
@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    CommonModule,
    AngularFireAuthModule
  ],
  declarations: [
    NgFireAuthComponent
  ],
  exports: [
    NgFireAuthComponent
  ]
})
export class NgFireAuthModule { }
