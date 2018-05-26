import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFireAuthService } from '../../../../../ng-fire-auth/src/public_api';
import { Observable } from 'rxjs';

@Component({
  selector: 'brewerbase-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router, private ngFireAuthService: NgFireAuthService) {}

  public navigate(route: string[]) {
    this.router.navigate(route);
  }

  public signOut() {
    this.ngFireAuthService.signOut();
  }

  public getAuthState(): Observable<any> {
    return this.ngFireAuthService.getCurrentAuthState();
  }
}
