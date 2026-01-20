import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-electives',
  templateUrl: './electives.component.html',
  styleUrls: ['./electives.component.scss'],
})
export class ElectivesComponent implements OnInit {
  public userRole: String | null = '';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.userRole = this.auth.getUserRole();
  }
}
