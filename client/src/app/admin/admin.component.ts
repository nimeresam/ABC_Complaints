import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { IComplaint } from '../utility/models/complaint.interface';
import { ComplaintsService } from '../utility/services/complaints.service';
import { ComplaintDialogComponent } from './complaint-dialog/complaint-dialog.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, AfterViewInit {

  list: IComplaint[];
  dataSource: MatTableDataSource<IComplaint>;
  displayedColumns: string[];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private complaintsService: ComplaintsService
  ) { 
    this.displayedColumns = ['index', 'title', 'creationDate', 'status', 'opts'];
    this.list = [];
    this.updateDataSource();
  }

  ngOnInit(): void {
    this.complaintsService.get().subscribe(
      (res: IComplaint[]) => {
        this.list = res;
        this.updateDataSource();
      },
      err => {
        // inform user
        this.snackBar.open('Failed to get complaints from the server.', 'OK');
      }
    )
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  /**
   * update data source list to relect changes with updating sorting and paginator
   */
  updateDataSource() {
    this.dataSource = new MatTableDataSource(this.list);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  /**
   * update complaint status
   * @param {number} index of complaint (index user to relect changes after saving)
   */
  update(index: number) {
    let complaint = this.dataSource[index];
    this.dialog.open(ComplaintDialogComponent, {
      width: '750px',
      data: complaint
    }).afterClosed().subscribe(
      (res: IComplaint) => {
        if (!res) return; // nothing returned means user cancelled the dialog
        // update complaint in index
        this.list = this.dataSource.data;
        this.list[index] = res; 
        // update dataSource instance to reflect changes
        this.updateDataSource();
        // inform user
        this.snackBar.open('Complaint updated successfully.', 'OK');
      }
    )
  }

}
