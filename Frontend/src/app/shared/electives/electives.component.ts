import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electives',
  templateUrl: './electives.component.html',
  styleUrls: ['./electives.component.scss'],
})
export class ElectivesComponent implements OnInit {
  public userRole: String = '';
  ngOnInit(): void {
    const user = sessionStorage.getItem('user');
    this.userRole = user ? JSON.parse(user).role : '';
  }
}
