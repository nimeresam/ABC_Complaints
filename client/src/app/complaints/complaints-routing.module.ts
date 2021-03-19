import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationService } from '../core/authentication.service';
import { PageAuthorizationService } from '../core/authorization.service';
import { ComplaintsComponent } from './complaints.component';

const routes: Routes = [
  {
    path: '',
    component: ComplaintsComponent,
    canLoad: [AuthenticationService],
    canActivate: [PageAuthorizationService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintsRoutingModule { }
