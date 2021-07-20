import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { authService } from '../auth.service';
import { passwordValidator } from '../validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss', '../style/form.scss'],
})
export class RegistrationComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: authService,
    private route: Router
  ) {}
  registrationForm: FormGroup;

  ngOnInit(): void {
    this.registrationForm = this.fb.group(
      {
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ],
        ],
        password: ['', [Validators.required, Validators.minLength(5)]],
        confirmPassword: ['', Validators.required],
      },
      { validator: passwordValidator }
    );
  }

  register(): void {
    const success = this.authService.register(this.registrationForm.value);
    if (success) {
      alert('Register Successfully!');
      this.route.navigate(['/login']);
    } else {
      alert('Something went wrong !!!');
    }
  }
}
