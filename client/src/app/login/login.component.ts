import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(
    formBuilder: FormBuilder
  ) {
    this.action = 'sign in';

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


  ngOnInit(): void {
  }

  changeAction() {
    this.showPassword = false;
    this.agreement = false;
    this.action = this.action == 'sign in' ? 'register' : 'sign in';
  }

  submit() {

  }

}
