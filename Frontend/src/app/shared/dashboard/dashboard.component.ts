import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public userRole: String = '';
  ngOnInit(): void {
    const user = sessionStorage.getItem('user');
    this.userRole = user ? JSON.parse(user).role : '';
  }
}
