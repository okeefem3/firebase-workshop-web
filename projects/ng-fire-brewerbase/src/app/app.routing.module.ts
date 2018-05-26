import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./core/home/home.component";
import { NgFireAuthComponent } from "../../../ng-fire-auth/src/public_api";
import { NgFireUserComponent } from "../../../ng-fire-user/src/public_api";
import { NgFireAuthGuardService } from "../../../ng-fire-auth/src/lib/ng-fire-auth-guard.service";

const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'auth', component: NgFireAuthComponent},
    {path: 'user-profile', component: NgFireUserComponent, canActivate: [NgFireAuthGuardService]},
    // {
    //   path: 'auth',
    //   loadChildren: '../../../ng-fire-auth/src/public_api#NgFireAuthModule'
    // },
    {path: '**', component: HomeComponent}
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
@NgModule()
export class AppRoutingModule { }