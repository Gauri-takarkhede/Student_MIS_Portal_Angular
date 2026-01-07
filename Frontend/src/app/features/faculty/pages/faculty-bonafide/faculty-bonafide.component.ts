import { Component } from '@angular/core';
import { BonafideService } from 'src/app/shared/services/bonafide.service';

@Component({
  selector: 'app-faculty-bonafide',
  templateUrl: './faculty-bonafide.component.html',
  styleUrls: ['./faculty-bonafide.component.scss'],
})
export class FacultyBonafideComponent {
  requests: any[] = [];

  constructor(private bonafideService: BonafideService) {}

  ngOnInit() {
    this.fetchAll();
  }

  fetchAll() {
    this.bonafideService.getAllRequests().subscribe((res) => {
      this.requests = res.data;
    });
  }

  approve(id: string) {
    this.bonafideService.approve(id).subscribe(() => this.fetchAll());
  }

  reject(id: string) {
    this.bonafideService.reject(id).subscribe(() => this.fetchAll());
  }
}
