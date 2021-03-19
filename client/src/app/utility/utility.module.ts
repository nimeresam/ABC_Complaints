import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoaderService } from './services/loader.service';
import { MaterialModule } from './material/material.module';
import { BaseToolbarComponent } from './components/base-toolbar/base-toolbar.component';


@NgModule({
  declarations: [
    BaseToolbarComponent
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
  ],
  providers: [
    LoaderService
  ]
})
export class UtilityModule { }
