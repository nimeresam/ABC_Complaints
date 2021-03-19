import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { IComplaint } from '../utility/models/complaint.interface';
import { STATUS } from '../utility/models/status.enum';
import { ComplaintDialogComponent } from './complaint-dialog/complaint-dialog.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  dataSource: any[];
  displayedColumns: string[];

  constructor(
    private dialog: MatDialog
  ) { 
    this.displayedColumns = ['index', 'title', 'creationDate', 'status'];

    this.dataSource = [
      { title: 'Bad treatment', creationDate: new Date(), status: STATUS.pending }
    ]
  }

  ngOnInit(): void {
  }

  /**
   * create new complaint
   */
  create() {
    this.dialog.open(ComplaintDialogComponent, {
      width: '400px',
    }).afterClosed().subscribe(
      (res: IComplaint) => {

      },
      err => {

      }
    )
  }

}
