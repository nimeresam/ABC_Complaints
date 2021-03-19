import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { STATUS } from 'src/app/utility/models/status.enum';

import { IComplaint } from '../../utility/models/complaint.interface';

@Component({
  selector: 'admin-complaint-dialog',
  templateUrl: './complaint-dialog.component.html',
  styleUrls: ['./complaint-dialog.component.scss']
})
export class ComplaintDialogComponent implements OnInit {

  complaintForm: FormGroup;
  statusList: STATUS[];

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: IComplaint,
    formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ComplaintDialogComponent>
  ) { 
    this.complaintForm = formBuilder.group({
      status: [ , Validators.required],
      notes:  ['']
    });

    this.complaintForm.patchValue(data);

    this.statusList = Object.values(STATUS);
  }

  ngOnInit(): void {
  }

}
