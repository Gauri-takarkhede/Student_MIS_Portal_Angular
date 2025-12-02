import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { SharedRoutingModule } from './shared-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentModule } from 'src/app/student/student.module';
import { FacultyModule } from 'src/app/faculty/faculty.module';
import { ElectivesComponent } from './electives/electives.component';
import { BonafideComponent } from './bonafide/bonafide.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HomeComponent,
    DashboardComponent,
    ElectivesComponent,
    BonafideComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    SharedRoutingModule,
    StudentModule,
    FacultyModule,
  ],
})
export class SharedModule {}
