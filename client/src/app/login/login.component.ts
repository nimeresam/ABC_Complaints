import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { IAuthKeys } from '../utility/models/auth.enum';
import { LoginService } from './login.service';
import { ILoginError, ILoginResponse } from './models/response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  registerForm: FormGroup;
  action: 'sign in' | 'register';
  showPassword: boolean;
  agreement: boolean;
  role: 'client' | 'admin';

  constructor(
    formBuilder: FormBuilder,
    private service: LoginService,
    private router: Router
  ) {
    // to determine form group to use
    this.action = 'sign in';
    // to save user role
    this.role = <'client' | 'admin'>location.pathname.split('/')[1];

    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.registerForm = formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }


  ngOnInit(): void { }

  /**
   * change formGroup between sign in or sign up
   */
  changeAction() {
    this.showPassword = false;
    this.agreement = false;
    this.action = this.action == 'sign in' ? 'register' : 'sign in';
  }

  /**
   * post request and redirect on sign in or sign up
   */
  submit() {
    let subject: Observable<any>;
    let form: FormGroup;
    // determine which API to use
    switch(this.action) {
      case 'sign in':
        form = this.loginForm;
        subject = this.service.login(this.role, this.loginForm.value);
        break;
      case 'register':
        form = this.registerForm;
        subject = this.service.register(this.role, this.registerForm.value);
        break;
    }
    // call API and wait data
    subject.subscribe(
      (res: ILoginResponse) => {
        console.log(res);
        localStorage.setItem(IAuthKeys.TOKEN, res.token);
        localStorage.setItem(IAuthKeys.NAME, res.user.name);
        localStorage.setItem(IAuthKeys.ROLE, res.user.role);
        this.router.navigate([`../`])
      },
      (err: ILoginError) => {
        console.log(err);
        if (typeof err == 'object') {
          let control = form.controls[err.control];
          if (control) control.setErrors({ backend: err.message });
        }
      }
    )
  }

}
