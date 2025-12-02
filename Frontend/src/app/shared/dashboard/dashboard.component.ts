import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public userRole: Number = -1;
  ngOnInit(): void {
    const role = localStorage.getItem('role');
    this.userRole = role ? JSON.parse(role) : -1;
  }
}
