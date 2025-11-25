import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BonafideComponent } from './bonafide.component';

const routes: Routes = [{ path: '', component: BonafideComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BonafideRoutingModule { }
