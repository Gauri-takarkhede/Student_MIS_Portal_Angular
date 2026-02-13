import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { FacultyAddResultComponent } from './pages/faculty-add-result/faculty-add-result.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ViewElectivesComponent } from './pages/view-electives/view-electives.component';
import { StudentsMngtComponent } from './pages/students-mngt/students-mngt.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AddStudentComponent } from './pages/students-mngt/add-student/add-student.component';
import { AllStudentsComponent } from './pages/students-mngt/all-students/all-students.component';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddDetailsBtnComponent } from './pages/students-mngt/add-details-btn/add-details-btn.component';
import { AddDetailsModalComponent } from './pages/students-mngt/add-details-modal/add-details-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    CreateElectivesComponent,
    PublishElectivesComponent,
    FacultyDashboardComponent,
    AllocateElectivesComponent,
    FacultyElectivesComponent,
    FacultyBonafideComponent,
    FacultyAddResultComponent,
    ViewElectivesComponent,
    StudentsMngtComponent,
    AddStudentComponent,
    AllStudentsComponent,
    AddDetailsBtnComponent,
    AddDetailsModalComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    MatStepperModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    AgGridModule,
    SharedModule,
    MatDialogModule,
  ],
  exports: [
    FacultyDashboardComponent,
    FacultyElectivesComponent,
    FacultyBonafideComponent,
    FacultyAddResultComponent,
  ],
})
export class FacultyModule {}
