import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public userRole: String = '';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    const user = this.auth.getUser();
    this.userRole = user ? JSON.parse(user).role : '';
  }
}
