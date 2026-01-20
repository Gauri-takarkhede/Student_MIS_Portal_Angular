import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public userRole: String | null = '';
  public studentName: String | null = '';
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.studentName = this.auth.getUserName();
    this.userRole = this.auth.getUserRole();
  }
  signOut(): void {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
