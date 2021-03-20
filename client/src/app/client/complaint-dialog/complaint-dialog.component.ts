import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ComplaintsService } from 'src/app/utility/services/complaints.service';

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
    private complaintsService: ComplaintsService
  ) { 
    this.complaintForm = formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: [STATUS.pending]
    });
  }

  ngOnInit(): void {
  }

  /**
   * save complaint to the database
   */
  save() {
    let value = this.complaintForm.value;
    this.complaintsService.create(value).subscribe(
      res => this.dialogRef.close(res),
      err => {
        // TODO: show error
      }
    )
  }

}
