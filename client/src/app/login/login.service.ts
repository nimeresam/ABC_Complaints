import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ILogin } from './models/login.interface';
import { IRegister } from './models/register.interface';

@Injectable()
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  login(role: string, value: ILogin) {
    return this.http.post(`/login/${role}`, value);
  }

  register(role: string, value: IRegister) {
    return this.http.post(`/register/${role}`, value);
  }
}
