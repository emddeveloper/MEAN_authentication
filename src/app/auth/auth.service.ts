import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { auth } from './auth.data.model';
import { User } from './user.data.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser_local'))
    );
    // to access the currentUserDetails with  subscribe()
    this.currentUser = this.currentUserSubject.asObservable();
  }
  _callLoginService(value: auth) {
    console.log(this.currentUserSubject);
    return this.http.post(environment.BACKEND_URL + 'user/login', value).pipe(
      map((user: User) => {
        localStorage.setItem('currentUser_local', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      })
    );
  }
  // to access the currentUserDetails without subscribe
  public get _currentUserValueService() {
    return this.currentUserSubject.value;
  }
  _callSignupService(value: auth) {
    console.log(value);
    return this.http.post(environment.BACKEND_URL + 'user/signup', value);
  }
  _callLogoutService() {
    console.log('logout');
    localStorage.removeItem('currentUser_local');
    this.currentUserSubject.next(null);
  }
  _callGetUserService(id: number) {
    return this.http
      .post(environment.BACKEND_URL + 'user/currentuser', { id: id })
      .pipe(
        map((user: any) => {
          console.log(`getcurrentuser ${user}`);
          delete user.data.password;
          return user;
        })
      );
  }
}
