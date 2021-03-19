import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UtilityModule } from '../utility/utility.module';
import { ComplaintDialogComponent } from './complaint-dialog/complaint-dialog.component';


@NgModule({
  declarations: [AdminComponent, ComplaintDialogComponent],
  imports: [
    UtilityModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
