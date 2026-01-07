import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElectivesComponent } from './electives/electives.component';
import { BonafideComponent } from './bonafide/bonafide.component';
import { ResultsComponent } from './results/results.component';
import { QueryComponent } from './query/query.component';
import { StudentModule } from './student/student.module';
import { FacultyModule } from './faculty/faculty.module';
import { FeatureRoutingModule } from './feature-routing.module';

@NgModule({
  declarations: [
    SidebarComponent,
    HomeComponent,
    DashboardComponent,
    ElectivesComponent,
    BonafideComponent,
    ResultsComponent,
    QueryComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    StudentModule,
    FacultyModule,
    FeatureRoutingModule,
  ],
})
export class FeatureModule {}
