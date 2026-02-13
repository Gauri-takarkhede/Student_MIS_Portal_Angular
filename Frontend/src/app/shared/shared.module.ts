import { NgModule } from '@angular/core';
import { CgpaToPercentagePipe } from './pipes/cgpa-to-percentage.pipe';

@NgModule({
  declarations: [CgpaToPercentagePipe],
  imports: [],
  exports: [CgpaToPercentagePipe],
})
export class SharedModule {}
