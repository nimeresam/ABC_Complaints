import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintsRoutingModule } from './complaints-routing.module';
import { ComplaintsComponent } from './complaints.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [ComplaintsComponent],
  imports: [
    CommonModule,
    ComplaintsRoutingModule,
    CoreModule
  ]
})
export class ComplaintsModule { }
