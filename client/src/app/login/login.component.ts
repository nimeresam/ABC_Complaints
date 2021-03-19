import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

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
    private service: LoginService
  ) {
    this.action = 'sign in';
    this.role = <'client' | 'admin'>location.pathname.split('/')[1];

    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.registerForm = formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required]
    });
  }


  ngOnInit(): void { }

  changeAction() {
    this.showPassword = false;
    this.agreement = false;
    this.action = this.action == 'sign in' ? 'register' : 'sign in';
  }

  submit() {
    let subject: Observable<any>;
    switch(this.action) {
      case 'sign in':
        subject = this.service.login(this.role, this.loginForm.value);
      case 'register':
        subject = this.service.register(this.role, this.registerForm.value);
    }
    subject.subscribe(
      res => {

      },
      err => {
        
      }
    )
  }

}
