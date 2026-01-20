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
  hide: boolean = true;

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

  togglePassword() {
    this.hide = !this.hide;
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    this.loading = true;
    let { mis, password } = this.loginForm.value;
    mis = Number(mis);

    this.authService.userLogin({ mis, password }).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.errorMsg = '';

        sessionStorage.setItem('token', res.token);

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
