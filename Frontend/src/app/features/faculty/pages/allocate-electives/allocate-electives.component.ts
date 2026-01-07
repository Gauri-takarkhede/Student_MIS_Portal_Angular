import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../../services/faculty.service';

@Component({
  selector: 'app-allocate-electives',
  templateUrl: './allocate-electives.component.html',
  styleUrls: ['./allocate-electives.component.scss'],
})
export class AllocateElectivesComponent implements OnInit {
  modules: any = [];
  selectedModule: any = null;
  loading = false;

  constructor(private facultyService: FacultyService) {}

  ngOnInit(): void {
    this.loadModules();
  }

  loadModules() {
    this.facultyService.getAllElectives().subscribe((res) => {
      this.modules = res;
    });
  }

  onModuleSelect(event: Event) {
    const select = event.target as HTMLSelectElement;
    const id = select.value;
    this.selectedModule = this.modules.find((m: any) => m._id === id);
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

  delete(id: Number): void {}
}
