import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CgpaToPercentagePipe } from './pipes/cgpa-to-percentage.pipe';

@NgModule({
  declarations: [CgpaToPercentagePipe],
  imports: [CommonModule],
  exports: [CgpaToPercentagePipe],
})
export class SharedModule {}
