import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

@Injectable()
export class AuthenticationService implements CanLoad {

  constructor(private router: Router) { }

  /**
   * Check if current user has logged in or not
   */
  canLoad(): boolean {
    // check user Token
    // let userToken = localStorage.getItem(STORAGE_ITEM.TOKEN);
    // if (!userToken) {
    //   this.router.navigateByUrl('/login');
    //   return false;
    // };
    return true;
  }

}


