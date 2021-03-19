import { NgModule } from '@angular/core';

import { ComplaintsRoutingModule } from './complaints-routing.module';
import { ComplaintsComponent } from './complaints.component';
import { UtilityModule } from '../utility/utility.module';


@NgModule({
  declarations: [ComplaintsComponent],
  imports: [
    UtilityModule,
    ComplaintsRoutingModule
  ]
})
export class ComplaintsModule { }
