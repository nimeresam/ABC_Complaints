import { NgModule } from '@angular/core';
import { UtilityModule } from '../utility/utility.module';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';


@NgModule({
  declarations: [ClientComponent],
  imports: [
    UtilityModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
