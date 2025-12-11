import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss'],
})
export class QueryComponent implements OnInit {
  public userRole: String = '';
  ngOnInit(): void {
    const user = sessionStorage.getItem('user');
    this.userRole = user ? JSON.parse(user).role : '';
  }
}
