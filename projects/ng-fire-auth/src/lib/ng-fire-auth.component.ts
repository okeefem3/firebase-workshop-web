import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgFireAuthService } from './ng-fire-auth.service';
import { Subscription } from 'rxjs';
import { User } from 'firebase';

@Component({
  selector: 'ng-fire-auth',
  templateUrl: 'ng-fire-auth.component.html'
})
export class NgFireAuthComponent implements OnInit, OnDestroy {
  public user: User;
  private authStateSubscription: Subscription;
  constructor(private authService: NgFireAuthService) { }

  public ngOnInit() {
    this.authStateSubscription = this.authService.getCurrentAuthState().subscribe(
      (user: User) => this.user = user
    );
  }

  public ngOnDestroy() {
    this.authStateSubscription && this.authStateSubscription.unsubscribe();
  }

  public signInWithGoogle() {
    this.authService.signInWithGoogle();
  }

  public signOut() {
    this.authService.signOut();
  }
}
