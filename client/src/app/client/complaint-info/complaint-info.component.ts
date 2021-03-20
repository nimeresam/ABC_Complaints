import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IComplaint } from '../../utility/models/complaint.interface';

@Component({
  selector: 'app-complaint-info',
  templateUrl: './complaint-info.component.html',
  styleUrls: ['./complaint-info.component.scss']
})
export class ComplaintInfoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IComplaint
  ) {  }

  ngOnInit(): void {
  }

}
