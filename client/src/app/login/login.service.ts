import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IUser } from '../utility/models/user.interface';
import { ILogin } from './models/login.interface';
import { ILoginResponse } from './models/response.interface';

@Injectable()
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  login(value: ILogin) : Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(`/login`, value);
  }

  register(value: IUser) : Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(`/register`, value);
  }
}
