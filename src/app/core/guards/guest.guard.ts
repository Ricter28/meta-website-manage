import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AppUrl } from '../../constants/app-url';
import { AuthenticationService } from '../../features/auth/services/authentication.service';

@Injectable()
export class GuestGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService, 
    private router: Router
  ) { }

  canActivate() {
    console.log("User is loggedIn: "+ this.authService.isLoggedIn());
    if (!this.authService.isLoggedIn()) {
      return true;
    } else {
      this.authService.redirectToHome(AppUrl.Home);
      return false;
    }
  }
}
