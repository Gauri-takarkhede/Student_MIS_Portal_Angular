import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public userRole: Number = -1;
  public studentName: String = '';
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    const user = this.auth.getUser();
    this.studentName = user ? JSON.parse(user).name : '';
    this.userRole = user ? JSON.parse(user).role : -1;
  }
  signOut(): void {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
