import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginGuard } from 'src/app/shared/guards/login.guard';

const routes: Routes = [
  { path: '', canActivate: [LoginGuard], component: AuthComponent },
  {
    path: 'home',
    loadChildren: () =>
      import('../feature.module').then((m) => m.FeatureModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
