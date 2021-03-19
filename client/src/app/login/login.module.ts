import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { UtilityModule } from '../utility/utility.module';
import { LoginService } from './login.service';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    UtilityModule,
    LoginRoutingModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
