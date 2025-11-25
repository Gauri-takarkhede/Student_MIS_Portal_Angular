import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';

const routes: Routes = [
  { path: 'dashboard/:mis', component: StudentDashboardComponent },
  {
    path: 'electives',
    loadChildren: () =>
      import('../features/electives/electives.module').then(
        (m) => m.ElectivesModule
      ),
  },
  {
    path: 'results',
    loadChildren: () =>
      import('../features/results/results.module').then((m) => m.ResultsModule),
  },
  {
    path: 'bonafide',
    loadChildren: () =>
      import('../features/bonafide/bonafide.module').then(
        (m) => m.BonafideModule
      ),
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
