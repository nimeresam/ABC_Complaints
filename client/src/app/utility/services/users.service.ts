import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IUser } from '../models/user.interface';

@Injectable()
export class UsersService {
  
  link: string;

  constructor(
    private http: HttpClient
  ) { 
    this.link = '/users';
  }

  /**
   * Get user document based on it's id
   * @param {string} username 
   * @returns {Observable<IUser>} 
   */
  getById(username: string): Observable<IUser> {
    return this.http.delete<IUser>(`${this.link}/${username}`);
  }
}
