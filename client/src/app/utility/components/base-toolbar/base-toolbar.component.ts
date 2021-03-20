import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'base-toolbar',
  templateUrl: './base-toolbar.component.html',
  styleUrls: ['./base-toolbar.component.scss']
})
export class BaseToolbarComponent implements OnInit {

  username: string;

  constructor(
    private router: Router
  ) { 
    // TODO: get from local storage
    this.username = 'Nimer';
  }

  ngOnInit(): void {
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
