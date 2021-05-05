import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { auth } from '../auth.data.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private authservice: AuthService, private router: Router) {}
  message = 'ss';
  isError: boolean;
  signupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  _signupSubmit() {
    this.authservice._callSignupService(this.signupForm.value).subscribe(
      (result: { _message: string; isError: boolean }) => {
        if (result.isError) {
          this.isError = true;
          this.message = result._message;
          this.router.navigate(['/signup']);
        }
        this.router.navigate(['/login']);
      },
      (error) => {
        this.isError = true;
        this.message = error.statusText;
        this.router.navigate(['/signup']);
      }
    );
  }
}
