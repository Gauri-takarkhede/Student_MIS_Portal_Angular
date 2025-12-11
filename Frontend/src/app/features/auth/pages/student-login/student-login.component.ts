import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
})
export class StudentLoginComponent {
  loginForm: FormGroup;
  loading = false;
  errorMsg = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      role: ['', Validators.required],
      mis: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    this.loading = true;

    let { role, mis, password } = this.loginForm.value;
    mis = Number(mis);

    const roleLogin =
      role === 'Student'
        ? this.authService.studentLogin
        : this.authService.facultyLogin;
    roleLogin({ mis, password }).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.errorMsg = '';

        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('mis', mis);

        // Redirect to student dashboard
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || 'Invalid MIS or Password';
      },
    });
  }
}
