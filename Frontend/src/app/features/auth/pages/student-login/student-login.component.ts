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
      mis: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    this.loading = true;

    let { mis, password } = this.loginForm.value;
    mis = Number(mis);

    this.authService.studentLogin({ mis, password }).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.errorMsg = '';

        localStorage.setItem('student-token', res.token);

        // Redirect to student dashboard
        this.router.navigate(['/student/dashboard', mis]);
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || 'Invalid MIS or Password';
      },
    });
  }
}
