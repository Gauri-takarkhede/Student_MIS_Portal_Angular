import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { StudentModule } from '../student/student.module';

@Component({
  selector: 'app-bonafide',
  templateUrl: './bonafide.component.html',
  styleUrls: ['./bonafide.component.scss'],
})
export class BonafideComponent implements OnInit {
  public userRole: String | null = '';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.userRole = this.auth.getUserRole();
  }
}
