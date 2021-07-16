import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private _registerService: RegistrationService
  ) {}

  loginForm: FormGroup;
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  checkLogin() {
    this._registerService.checkLogin(this.loginForm.value).subscribe(
      (Response) => console.log('success'),
      (error) => console.log('Error!', error)
    );
  }
}
