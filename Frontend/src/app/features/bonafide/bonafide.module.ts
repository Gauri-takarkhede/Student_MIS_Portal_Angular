import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BonafideRoutingModule } from './bonafide-routing.module';
import { BonafideComponent } from './bonafide.component';


@NgModule({
  declarations: [
    BonafideComponent
  ],
  imports: [
    CommonModule,
    BonafideRoutingModule
  ]
})
export class BonafideModule { }
