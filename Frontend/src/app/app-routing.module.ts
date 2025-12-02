import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'electives',
    loadChildren: () =>
      import('./features/electives/electives.module').then(
        (m) => m.ElectivesModule
      ),
  },
  {
    path: 'bonafide',
    loadChildren: () =>
      import('./features/bonafide/bonafide.module').then(
        (m) => m.BonafideModule
      ),
  },
  {
    path: 'results',
    loadChildren: () =>
      import('./features/results/results.module').then((m) => m.ResultsModule),
  },
  {
    path: 'feedback',
    loadChildren: () =>
      import('./features/feedback/feedback.module').then(
        (m) => m.FeedbackModule
      ),
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./student/student.module').then((m) => m.StudentModule),
  },
  {
    path: 'faculty',
    loadChildren: () =>
      import('./faculty/faculty.module').then((m) => m.FacultyModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
