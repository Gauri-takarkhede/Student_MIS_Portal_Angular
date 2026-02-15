import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../../services/faculty.service';
import { ElectivesService } from '../../services/electives.service';

@Component({
  selector: 'app-allocate-electives',
  templateUrl: './allocate-electives.component.html',
  styleUrls: ['./allocate-electives.component.scss'],
})
export class AllocateElectivesComponent implements OnInit {
  modules: any = [];
  selectedModule: any = null;
  loading = false;

  constructor(
    private facultyService: FacultyService,
    private electivesService: ElectivesService,
  ) {}

  ngOnInit(): void {
    this.electivesService.electives$.subscribe((data) => {
      this.modules = data;

      // Load from API only if empty
      if (data.length === 0) {
        this.loadModules();
      }
    });
  }

  loadModules() {
    this.facultyService.getAllElectives().subscribe((res: any) => {
      this.electivesService.setElectives(res);
    });
  }

  allocate(id: string) {
    this.loading = true;

    this.facultyService.allocate(id).subscribe({
      next: (res) => {
        alert('Allocation completed successfully 🎉');
        this.loading = false;
      },
      error: () => {
        alert('Failed to allocate — check server');
        this.loading = false;
      },
    });
  }

  delete(id: string): void {
    this.facultyService.deleteElective(id).subscribe({
      next: (res) => {
        alert('Elective has been deleted successfully');
        this.electivesService.removeElective(id);
      },
    });
  }
}
