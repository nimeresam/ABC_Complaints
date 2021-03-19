import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'base-toolbar',
  templateUrl: './base-toolbar.component.html',
  styleUrls: ['./base-toolbar.component.scss']
})
export class BaseToolbarComponent implements OnInit {

  username: string;

  constructor() { 
    // TODO: get from local storage
    this.username = 'Nimer';
  }

  ngOnInit(): void {
  }

  signOut() {
    // TODO: implement function
    alert('No code yet!')
  }

}
