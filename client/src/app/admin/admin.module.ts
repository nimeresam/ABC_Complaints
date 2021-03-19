import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UtilityModule } from '../utility/utility.module';
import { ComplaintDialogComponent } from './complaint-dialog/complaint-dialog.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    AdminComponent, 
    ComplaintDialogComponent
  ],
  imports: [
    UtilityModule,
    AdminRoutingModule,
    CoreModule
  ]
})
export class AdminModule { }
