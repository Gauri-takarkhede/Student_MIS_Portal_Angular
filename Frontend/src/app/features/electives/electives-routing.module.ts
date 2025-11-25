import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectivesComponent } from './electives.component';

const routes: Routes = [{ path: '', component: ElectivesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectivesRoutingModule { }
