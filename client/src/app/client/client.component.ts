import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { IComplaint } from '../utility/models/complaint.interface';
import { ComplaintsService } from '../utility/services/complaints.service';
import { ComplaintDialogComponent } from './complaint-dialog/complaint-dialog.component';
import { ComplaintInfoComponent } from './complaint-info/complaint-info.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit, AfterViewInit {

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
   * create new complaint with dialog
   */
  create() {
    this.dialog.open(ComplaintDialogComponent, {
      width: '400px',
    }).afterClosed().subscribe(
      (res: IComplaint) => {
        if (!res) return; // nothing returned means user cancelled the dialog
        // update dataSource instance to reflect changes
        this.list = this.list.concat(res);
        this.updateDataSource();
        // inform user
        this.snackBar.open('Complaint sent successfully, will back to you soon.', 'OK');
      }
    )
  }

  /**
   * view complaint details
   */
  viewInfo(complaint: IComplaint) {
    this.dialog.open(ComplaintInfoComponent, {
      width: '750px',
      data: complaint
    })
  }

  /**
   * delete complaint from database
   */
   deleteComplaint(index: number) {
    let complaint = this.list[index];
    if(confirm('Are you sure?') == false) return;
    this.complaintsService.deleteById(complaint.id).subscribe(
      res => {
        this.list.splice(index, 1);
        this.updateDataSource();
      },
      err => {
        // inform user
        this.snackBar.open('Failed to delete complaint.', 'OK');
      }
    )
  }

}
