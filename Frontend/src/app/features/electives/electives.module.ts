import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectivesRoutingModule } from './electives-routing.module';
import { ElectivesComponent } from './electives.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ElectivesComponent],
  imports: [CommonModule, ElectivesRoutingModule, ReactiveFormsModule],
})
export class ElectivesModule {}
