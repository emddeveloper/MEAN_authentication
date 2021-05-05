import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user.data.model';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboardHome.component.html',
  styleUrls: ['./dashboardHome.component.css'],
})
export class DashboardHome {
  constructor(private authservice: AuthService) {}
  currentUser: User;
  ngOnInit() {
    this.authservice.currentUser.subscribe((user) => (this.currentUser = user));
    console.log(this.currentUser);
  }
}
