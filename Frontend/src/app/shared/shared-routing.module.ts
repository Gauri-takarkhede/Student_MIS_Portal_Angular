import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElectivesComponent } from './electives/electives.component';
import { BonafideComponent } from './bonafide/bonafide.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'electives',
        component: ElectivesComponent,
      },
      {
        path: 'bonafide',
        component: BonafideComponent,
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
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
export class SharedRoutingModule {}
