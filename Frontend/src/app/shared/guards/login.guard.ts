import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    const token = sessionStorage.getItem('token');

    if (token) {
      // User already logged in → redirect to home
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
