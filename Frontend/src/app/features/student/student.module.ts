import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';
import { StudentElectivesComponent } from './pages/electives/student-electives.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { StudentBonafideComponent } from './pages/student-bonafide/student-bonafide.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { StudentResultsComponent } from './pages/student-results/student-results.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    StudentDashboardComponent,
    StudentElectivesComponent,
    StudentBonafideComponent,
    StudentResultsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatStepperModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
  ],
  exports: [
    StudentDashboardComponent,
    StudentElectivesComponent,
    StudentBonafideComponent,
    StudentResultsComponent,
  ],
})
export class StudentModule {}
