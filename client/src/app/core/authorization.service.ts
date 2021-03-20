import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { IAuthKeys } from '../utility/models/auth.enum';


@Injectable()
export class AuthorizationService implements CanActivate {
  
  constructor(private router: Router) { }

  /** 
   * Check if current user is authorized for this route
   * @returns {boolean} Authorized user or not */
  canActivate(): boolean {
    // check if user can access this page
    debugger;
    let page = location.pathname.split('/')[1];
    let role = localStorage.getItem(IAuthKeys.ROLE);
    if (page != role) {
      setTimeout(() => this.router.navigate(['/' + role]))
    }
    return !page || page == 'login' || page == role;
  }
}