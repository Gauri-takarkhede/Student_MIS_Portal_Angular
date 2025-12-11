import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  public userRole: String = '';
  ngOnInit(): void {
    const user = sessionStorage.getItem('user');
    this.userRole = user ? JSON.parse(user).role : '';
  }
}
