import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { 
    this.displayedColumns = ['index', 'title', 'creationDate', 'status'];

    this.dataSource = [
      { title: 'Bad treatment', creationDate: new Date(), status: STATUS.pending },
      { title: 'Bad treatment', creationDate: new Date(), status: STATUS.resolved },
      { title: 'Bad treatment', creationDate: new Date(), status: STATUS.dismissed }
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
        if (!res) return;
        res.creationDate = new Date();
        this.dataSource = this.dataSource.concat(res);

        this.snackBar.open('Complaint sent successfully, will back to you soon.', 'OK');
      }
    )
  }

}
