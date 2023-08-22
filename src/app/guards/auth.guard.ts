import { Injectable } from '@angular/core';
import { LoginService } from '../services/login-service.service';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}
  canActivate() {
    if (this.loginService.isLoginStatus()) {
      return true;
    } else {
      alert('กรุณา Login ก่อน');
      this.router.createUrlTree(['/login']);
      return false;
    }
  }
}
