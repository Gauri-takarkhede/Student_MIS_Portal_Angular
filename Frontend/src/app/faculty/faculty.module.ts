import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyRoutingModule } from './faculty-routing.module';
import { CreateElectivesComponent } from './pages/create-electives/create-electives.component';
import { PublishElectivesComponent } from './pages/publish-electives/publish-electives.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FacultyDashboardComponent } from './pages/faculty-dashboard/faculty-dashboard.component';
import { AllocateElectivesComponent } from './pages/allocate-electives/allocate-electives.component';
import { FacultyElectivesComponent } from './pages/faculty-electives/faculty-electives.component';

@NgModule({
  declarations: [
    CreateElectivesComponent,
    PublishElectivesComponent,
    FacultyDashboardComponent,
    AllocateElectivesComponent,
    FacultyElectivesComponent,
  ],
  imports: [CommonModule, FacultyRoutingModule, ReactiveFormsModule],
})
export class FacultyModule {}
