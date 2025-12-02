import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electives',
  templateUrl: './electives.component.html',
  styleUrls: ['./electives.component.scss'],
})
export class ElectivesComponent implements OnInit {
  public userRole: Number = -1;
  ngOnInit(): void {
    const role = localStorage.getItem('role');
    this.userRole = role ? JSON.parse(role) : -1;
  }
}
