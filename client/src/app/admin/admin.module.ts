import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UtilityModule } from '../utility/utility.module';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    UtilityModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
