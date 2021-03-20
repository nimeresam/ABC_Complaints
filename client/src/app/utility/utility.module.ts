import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// modules
import { MaterialModule } from './material/material.module';
// components
import { BaseToolbarComponent } from './components/base-toolbar/base-toolbar.component';
// pipes
import { StatusColorPipe } from './pipes/status-color.pipe';
// services
import { LoaderService } from './services/loader.service';
import { UsersService } from './services/users.service';
import { ComplaintsService } from './services/complaints.service';


@NgModule({
  declarations: [
    BaseToolbarComponent,
    StatusColorPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,

    BaseToolbarComponent,

    StatusColorPipe
  ],
  providers: [
    LoaderService,
    UsersService,
    ComplaintsService
  ]
})
export class UtilityModule { }
