import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty-login',
  templateUrl: './faculty-login.component.html',
})
export class FacultyLoginComponent {
  loginForm: FormGroup;
  loading = false;
  errorMsg = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    this.loading = true;

    const { email, password } = this.loginForm.value;

    this.authService.facultyLogin({ email, password }).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.errorMsg = '';

        localStorage.setItem('faculty-token', res.token);

        // Redirect to faculty dashboard
        this.router.navigate(['/faculty/dashboard']);
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || 'Invalid Login Credentials';
      },
    });
  }
}
