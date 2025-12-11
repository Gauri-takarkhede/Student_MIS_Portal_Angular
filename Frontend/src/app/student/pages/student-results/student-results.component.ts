import { Component } from '@angular/core';
import { ResultService } from 'src/app/shared/services/results.service';

@Component({
  selector: 'app-student-results',
  templateUrl: './student-results.component.html',
  styleUrls: ['./student-results.component.scss'],
})
export class StudentResultsComponent {
  results: any = {};

  constructor(private resultService: ResultService) {}

  ngOnInit() {
    const student = sessionStorage.getItem('user');
    const mis = student ? JSON.parse(student).mis : 0;
    this.resultService.getStudentResults(mis).subscribe((res: any) => {
      this.results = res;
      console.log(this.results);
    });
  }
}
