import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyRoutingModule } from './faculty-routing.module';
import { CreateElectivesComponent } from './pages/create-electives/create-electives.component';
import { PublishElectivesComponent } from './pages/publish-electives/publish-electives.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FacultyDashboardComponent } from './pages/faculty-dashboard/faculty-dashboard.component';
import { AllocateElectivesComponent } from './pages/allocate-electives/allocate-electives.component';
import { FacultyElectivesComponent } from './pages/faculty-electives/faculty-electives.component';
import { FacultyBonafideComponent } from './pages/faculty-bonafide/faculty-bonafide.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    CreateElectivesComponent,
    PublishElectivesComponent,
    FacultyDashboardComponent,
    AllocateElectivesComponent,
    FacultyElectivesComponent,
    FacultyBonafideComponent,
  ],
  imports: [
    CommonModule,
    FacultyRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ],
  exports: [
    FacultyDashboardComponent,
    FacultyElectivesComponent,
    FacultyBonafideComponent,
  ],
})
export class FacultyModule {}
