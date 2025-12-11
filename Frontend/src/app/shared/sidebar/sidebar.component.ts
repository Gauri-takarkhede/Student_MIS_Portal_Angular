import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public userRole: Number = -1;
  public studentName: String = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    const user = sessionStorage.getItem('user');
    this.studentName = user ? JSON.parse(user).name : '';
    this.userRole = user ? JSON.parse(user).role : -1;
  }
  signOut(): void {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
