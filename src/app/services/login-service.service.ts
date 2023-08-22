import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isLogin: boolean = false;

  constructor() {}
  isLoginStatus(): boolean {
    return this.isLogin;
  }
  setLogin(isLogin: boolean) {
    this.isLogin = isLogin;
  }
}
