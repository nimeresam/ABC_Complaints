import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { STATUS } from 'src/app/utility/models/status.enum';
import { ComplaintsService } from 'src/app/utility/services/complaints.service';

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
    @Inject(MAT_DIALOG_DATA) public data: IComplaint,
    formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ComplaintDialogComponent>,
    private complaintsService: ComplaintsService
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

  /**
   * save complaint to the database
   */
   save() {
    let value = this.complaintForm.value;
    // check if nothing changed 
    if (value.status == this.data.status && value.notes == this.data.notes) return this.dialogRef.close();
    // add other properties in data object
    value = Object.assign({}, this.data, value);
    this.complaintsService.update(value).subscribe(
      res => this.dialogRef.close(res),
      err => {
        // TODO: show error
      }
    )
  }

}
