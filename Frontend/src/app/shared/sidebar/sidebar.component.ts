import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public userRole: Number = -1;
  public misNum: Number = 0;
  constructor() {}

  ngOnInit(): void {
    const role = localStorage.getItem('role');
    this.userRole = role ? JSON.parse(role) : -1;

    const mis = localStorage.getItem('mis');
    this.misNum = mis ? JSON.parse(mis) : 0;
  }
}
