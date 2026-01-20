import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public userRole: String | null = '';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.userRole = this.auth.getUserRole();
  }
}
