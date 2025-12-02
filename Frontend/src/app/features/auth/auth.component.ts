import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
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

    console.log('hi i am here');
    let { role, mis, password } = this.loginForm.value;
    mis = Number(mis);

    const loginFn =
      role === 'student'
        ? this.authService.studentLogin.bind(this.authService)
        : this.authService.facultyLogin.bind(this.authService);

    loginFn({ mis, password }).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.errorMsg = '';

        localStorage.setItem('token', res.token);
        localStorage.setItem('mis', mis);
        const userRole = role === 'student' ? 0 : 1;
        localStorage.setItem('role', JSON.stringify(userRole));

        // Redirect to student dashboard
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || 'Invalid MIS or Password';
      },
    });
  }
}
