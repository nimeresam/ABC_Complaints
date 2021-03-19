import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { UtilityModule } from '../utility/utility.module';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ComplaintDialogComponent } from './complaint-dialog/complaint-dialog.component';
import { ComplaintInfoComponent } from './complaint-info/complaint-info.component';


@NgModule({
  declarations: [
    ClientComponent, 
    ComplaintDialogComponent, 
    ComplaintInfoComponent
  ],
  imports: [
    UtilityModule,
    ClientRoutingModule,
    CoreModule
  ],
  entryComponents: [
    ComplaintDialogComponent,
    ComplaintInfoComponent
  ]
})
export class ClientModule { }
