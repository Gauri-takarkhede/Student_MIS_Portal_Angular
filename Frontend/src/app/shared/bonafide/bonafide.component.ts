import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bonafide',
  templateUrl: './bonafide.component.html',
  styleUrls: ['./bonafide.component.scss'],
})
export class BonafideComponent implements OnInit {
  public userRole: String = '';
  ngOnInit(): void {
    const user = sessionStorage.getItem('user');
    this.userRole = user ? JSON.parse(user).role : '';
  }
}
