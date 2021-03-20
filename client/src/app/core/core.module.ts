import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthorizationService } from './authorization.service';
import { AuthenticationService } from './authentication.service';
import { AuthInterceptor } from './auth-interceptor.service';
import { UtilityModule } from '../utility/utility.module';



@NgModule({
  declarations: [],
  imports: [
    UtilityModule
  ],
  providers: [
    AuthorizationService,
    AuthenticationService
  ]
})
export class CoreModule { 
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: EskaLoggingInterceptor, multi: true },
        AuthorizationService,
        AuthenticationService
      ]
    };
  }
}
