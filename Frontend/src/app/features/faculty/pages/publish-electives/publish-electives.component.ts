import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../../services/faculty.service';

@Component({
  selector: 'app-publish-electives',
  templateUrl: './publish-electives.component.html',
  styleUrls: ['./publish-electives.component.scss'],
})
export class PublishElectivesComponent implements OnInit {
  electives: any[] = [];

  constructor(private electiveService: FacultyService) {}

  ngOnInit(): void {
    this.loadElectives();
  }

  loadElectives() {
    this.electiveService.getAllElectives().subscribe((data: any) => {
      this.electives = data;
    });
  }

  publish(id: string) {
    this.electiveService.publishElective(id).subscribe(() => {
      alert('Module Published!');
      this.loadElectives();
    });
  }
}
