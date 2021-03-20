import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAuthKeys } from '../../models/auth.enum';

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
    this.username = localStorage.getItem(IAuthKeys.NAME);
  }

  ngOnInit(): void {
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
