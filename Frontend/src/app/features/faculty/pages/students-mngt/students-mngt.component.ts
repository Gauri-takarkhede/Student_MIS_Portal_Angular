import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-mngt',
  templateUrl: './students-mngt.component.html',
  styleUrls: ['./students-mngt.component.scss'],
})
export class StudentsMngtComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    const studentId = navigation?.extras?.state?.['studentId'];
    console.log(studentId);
  }

  @ViewChild('stepper') stepper!: MatTabGroup;

  moveToAllStudentsStep() {
    this.stepper.selectedIndex = 1;
  }
}
