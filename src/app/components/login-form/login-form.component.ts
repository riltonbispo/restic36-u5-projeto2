import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})

export class LoginFormComponent {
  loginForm: FormGroup = new FormGroup({
    emailFormControl: new FormControl<string>('', [
      Validators.email,
      Validators.required,
    ]),
    passWordFormControl: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5),
    ])
  });


  get emailFormControl() {
    return this.loginForm.get('emailFormControl') as FormControl;
  }

  get passwordFormControl() {
    return this.loginForm.get('passWordFormControl') as FormControl;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { emailFormControl, passWordFormControl } = this.loginForm.value;
      console.log('Login successful:', { emailFormControl, passWordFormControl });
    }
    console.log('Form submission attempted');
  }
}
