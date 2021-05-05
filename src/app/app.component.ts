import { Component } from '@angular/core';
import { User } from './auth/user.data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentUser: User;
  constructor() {}
  title = 'authentication';
}
