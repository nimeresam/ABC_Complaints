import { Component, OnInit } from '@angular/core';
import { STATUS } from '../utility/models/status.enum';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  dataSource: any[];
  displayedColumns: string[];

  constructor() { 
    this.displayedColumns = ['index', 'title', 'creationDate', 'status'];

    this.dataSource = [
      { title: 'Bad treatment', creationDate: new Date(), status: STATUS.pending }
    ]
  }

  ngOnInit(): void {
  }

}
