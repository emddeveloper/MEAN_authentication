import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.data.model';
@Injectable({ providedIn: 'root' })
export class RouterGuard implements CanActivate {
  loggedInUser: User;
  constructor(private authservice: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.authservice.currentUser.subscribe(
      (user) => (this.loggedInUser = user)
    );
    if (this.loggedInUser) return true;
    this.router.navigate(['/login']);
    return false;
  }
}
