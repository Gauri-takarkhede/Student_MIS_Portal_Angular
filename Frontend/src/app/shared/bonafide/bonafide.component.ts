import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bonafide',
  templateUrl: './bonafide.component.html',
  styleUrls: ['./bonafide.component.scss'],
})
export class BonafideComponent implements OnInit {
  public userRole: Number = -1;
  ngOnInit(): void {
    const role = localStorage.getItem('role');
    this.userRole = role ? JSON.parse(role) : -1;
  }
}
