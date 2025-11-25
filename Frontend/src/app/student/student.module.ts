import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';
import { ElectivesComponent } from './pages/electives/electives.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StudentDashboardComponent, ElectivesComponent],
  imports: [CommonModule, StudentRoutingModule, ReactiveFormsModule],
})
export class StudentModule {}
