import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { environment } from '../../../../src/environments/environment';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { NgFireAuthModule } from '../../../ng-fire-auth/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    CoreModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
