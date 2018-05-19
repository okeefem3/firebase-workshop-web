/**
 * Created by Michael on 3/16/2018.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { BreweryListComponent } from './list/brewery-list.component';
import { EditBreweryComponent } from './edit-brewery/edit-brewery.component';
import { BreweryComponent } from './brewery/brewery.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent},
  {path: 'home', component: HomeComponent},
  {path: 'brewery-list', component: BreweryListComponent},
  {path: 'edit-brewery/:id', component: EditBreweryComponent},
  {path: 'brewery/:id', component: BreweryComponent},
  {path: 'user-profile', component: UserProfileComponent},
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
export class AppRoutingModule { }
