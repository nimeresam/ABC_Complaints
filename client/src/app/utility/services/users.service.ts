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
   * @param {string} userId 
   * @returns {Observable<IUser>} 
   */
  getById(userId: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.link}/${userId}`);
  }
}
