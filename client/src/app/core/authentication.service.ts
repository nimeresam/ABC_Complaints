import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

import { IAuthKeys } from '../utility/models/auth.enum';

@Injectable()
export class AuthenticationService implements CanLoad {

  constructor(private router: Router) { }

  /**
   * Check if current user has logged in or not
   */
  canLoad(): boolean {
    // check user Token
    let userToken = localStorage.getItem(IAuthKeys.TOKEN);
    if (!userToken) {
      let role = location.pathname.split('/')[1];
      sessionStorage.setItem(IAuthKeys.MAIN_ROLE, role);
      this.router.navigateByUrl(`/login`);
      return false;
    };
    return true;
  }

}


