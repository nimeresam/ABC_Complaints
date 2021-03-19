import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class PageAuthorizationService implements CanActivate {
  /** 
   * Check if current user is authorized for this route
   * @returns {boolean} Authorized user or not */
  canActivate(route: ActivatedRouteSnapshot): boolean {
    return true;
  }
}