import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'brewerbase-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigate(route: string[]) {
    this.router.navigate(route);
  }

  signOut() {
    
  }
}
