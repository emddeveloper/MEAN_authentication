import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.data.model';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authservice: AuthService) {}
  currentUser: User;
  isLoggedIn: string;
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.authservice.currentUser.subscribe((user) => (this.currentUser = user));
    this.isLoggedIn = this.currentUser && this.currentUser.token;
    if (this.isLoggedIn) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + this.currentUser.token,
        },
      });
    }
    return next.handle(request);
  }
}
