import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyDashboardComponent } from './pages/faculty-dashboard/faculty-dashboard.component';
import { CreateElectivesComponent } from './pages/create-electives/create-electives.component';
import { PublishElectivesComponent } from './pages/publish-electives/publish-electives.component';
import { AllocateElectivesComponent } from './pages/allocate-electives/allocate-electives.component';
import { FacultyElectivesComponent } from './pages/faculty-electives/faculty-electives.component';

const routes: Routes = [
  {
    path: 'dashboard/:mis',
    component: FacultyDashboardComponent,
  },
  {
    path: 'create-elective',
    component: CreateElectivesComponent,
  },
  {
    path: 'manage-electives',
    component: PublishElectivesComponent,
  },
  {
    path: 'allocate',
    component: AllocateElectivesComponent,
  },
  {
    path: 'electives',
    component: FacultyElectivesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacultyRoutingModule {}
