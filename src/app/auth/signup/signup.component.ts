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
  message: {};
  signupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  _signupSubmit() {
    this.authservice
      ._callSignupService(this.signupForm.value)
      .subscribe((result: { _message: ''; isError: boolean }) => {
        this.message = result._message;
        if (result.isError) {
          this.router.navigate(['/signup']);
        }
        this.router.navigate(['/login']);
        console.log(result);
      });
  }
}
