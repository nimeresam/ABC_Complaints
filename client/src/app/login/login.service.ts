import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IUser } from '../utility/models/user.interface';
import { ILogin } from './models/login.interface';

@Injectable()
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  login(role: string, value: ILogin) {
    return this.http.post(`/login/${role}`, value);
  }

  register(role: string, value: IUser) {
    return this.http.post(`/register/${role}`, value);
  }
}
