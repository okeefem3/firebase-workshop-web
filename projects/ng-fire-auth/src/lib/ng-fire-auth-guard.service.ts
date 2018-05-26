import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { NgFireAuthService } from './ng-fire-auth.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class NgFireAuthGuardService implements CanActivate {
  constructor(private ngFireAuthService: NgFireAuthService, private router: Router) {}
  canActivate(): Observable<boolean> {
    return this.ngFireAuthService.getCurrentAuthState().pipe(
      map((user) => user != null)
    );
  }
}