import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material.modules';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  ],
  exports: [LoginComponent, SignupComponent],
  providers: [HttpClientModule, HttpClient],
})
export class AuthModule {}
