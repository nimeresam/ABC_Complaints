import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { UtilityModule } from '../utility/utility.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    UtilityModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
