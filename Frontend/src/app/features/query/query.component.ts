import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss'],
})
export class QueryComponent implements OnInit {
  public userRole: String | null = '';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.userRole = this.auth.getUserRole();
  }
}
