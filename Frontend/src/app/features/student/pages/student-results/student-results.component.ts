import { Component } from '@angular/core';
import { ResultService } from 'src/app/shared/services/results.service';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-student-results',
  templateUrl: './student-results.component.html',
  styleUrls: ['./student-results.component.scss'],
})
export class StudentResultsComponent {
  results: any = {};

  constructor(
    private resultService: ResultService,
    private auth: AuthService,
  ) {}

  ngOnInit() {
    const student = this.auth.getUser();
    const mis = student?.id;
    this.resultService.getStudentResults(mis).subscribe((res: any) => {
      this.results = res;
      console.log(this.results);
    });
  }
}
