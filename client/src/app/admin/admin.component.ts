import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { IComplaint } from '../utility/models/complaint.interface';
import { STATUS } from '../utility/models/status.enum';
import { ComplaintDialogComponent } from './complaint-dialog/complaint-dialog.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  dataSource: any[];
  displayedColumns: string[];

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { 
    this.displayedColumns = ['index', 'title', 'creationDate', 'status', 'opts'];

    this.dataSource = [
      { title: 'Bad treatment', description: 'faksjdfeasjdflasjdlfkjasdklfjasdlfjasdlfjadslfjladsfjladsfjladsjfl;adsjfl;asdjflasjdfl;asjdflasjdflasjdfl lasdjflasdjfljasdlfjasdfljadslfjdsfj ls\nlasdjflkasjdflasjdflajs', creationDate: new Date(), status: STATUS.pending }
    ]
  }

  ngOnInit(): void {
  }

  update(index: number) {
    let complaint = this.dataSource[index];
    this.dialog.open(ComplaintDialogComponent, {
      width: '750px',
      data: complaint
    }).afterClosed().subscribe(
      (res: IComplaint) => {
        if (!res) return;
        this.dataSource[index] = res;
        this.dataSource = this.dataSource.slice();

        this.snackBar.open('Complaint updated successfully.', 'OK');
      }
    )
  }

}
