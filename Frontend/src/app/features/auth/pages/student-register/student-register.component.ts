import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.scss'],
})
export class StudentRegisterComponent {
  registerForm: FormGroup;
  loading = false;
  errorMsg = '';
  successMsg = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        mis: ['', [Validators.required]],
        role: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: this.passwordMatch }
    );
  }

  passwordMatch(group: FormGroup) {
    const pass = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return pass === confirm ? null : { notMatch: true };
  }

  get passwordNotMatch() {
    return (
      this.registerForm.errors?.['notMatch'] &&
      this.registerForm.get('confirmPassword')?.touched
    );
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      console.log('invalid here');
      return;
    }
    this.loading = true;

    const { name, email, mis, password, role } = this.registerForm.value;

    const payload = { name, email, mis, password, role };

    this.authService.userRegister(payload).subscribe({
      next: (res) => {
        this.successMsg = 'Registered successfully!';
        this.errorMsg = '';
        this.loading = false;
        this.registerForm.reset();
      },
      error: (err) => {
        this.errorMsg = err.error?.message || 'Registration failed!';
        this.successMsg = '';
        this.loading = false;
      },
    });
  }
}
