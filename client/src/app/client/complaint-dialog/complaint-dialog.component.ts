import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { STATUS } from '../../utility/models/status.enum';

@Component({
  selector: 'client-complaint-dialog',
  templateUrl: './complaint-dialog.component.html',
  styleUrls: ['./complaint-dialog.component.scss']
})
export class ComplaintDialogComponent implements OnInit {

  complaintForm: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ComplaintDialogComponent>,
  ) { 
    this.complaintForm = formBuilder.group({
      title: ['', Validators.required],
      describtion: ['', Validators.required],
      status: [STATUS.pending]
    });
  }

  ngOnInit(): void {
  }

}
