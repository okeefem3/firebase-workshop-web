import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BrowserModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ]
})
export class CoreModule { }
