import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';
import { StudentElectivesComponent } from './pages/electives/student-electives.component';

const routes: Routes = [
  { path: 'dashboard/:mis', component: StudentDashboardComponent },
  { path: 'electives', component: StudentElectivesComponent },
  {
    path: 'results',
    loadChildren: () =>
      import('../features/results/results.module').then((m) => m.ResultsModule),
  },
  {
    path: 'feedback',
    loadChildren: () =>
      import('../features/feedback/feedback.module').then(
        (m) => m.FeedbackModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
