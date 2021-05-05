import { Component, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user.data.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authservice: AuthService, private router: Router) {}
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  _loginSubmit() {
    this.authservice._callLoginService(this.loginForm.value).subscribe(
      (result: User) => {
        if (result.token) {
          this.router.navigate(['/dashboard']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
