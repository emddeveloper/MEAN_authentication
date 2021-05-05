import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.data.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  currentUser: User;
  constructor(private authservice: AuthService, private router: Router) {
    this.authservice.currentUser.subscribe((user) => (this.currentUser = user));
  }
  logout() {
    this.authservice._callLogoutService();
    this.router.navigate(['/']);
  }
}
