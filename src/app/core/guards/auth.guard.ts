import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot
} from '@angular/router';
import { AuthenticationService } from '../../features/auth/services/authentication.service';
import { ApiService } from '../services/api.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private router: Router, 
    private authService: AuthenticationService, 
    private apiService: ApiService
    ) {
  }

  private isLoggedIn(): boolean {
    // if (this.authService.isLoggedIn()) {
    //   return true;
    // }
    // this.authService.removeCurrentUser(false);
    // this.apiService.navigateToLogin(true);
    return this.apiService.accessToken !== null;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('canActivate: '+this.isLoggedIn());
    
    return this.isLoggedIn();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('canActivateChild: '+this.isLoggedIn());
    return this.isLoggedIn();
  }

  canLoad(route: Route): boolean {
    console.log('canLoad: '+this.isLoggedIn());
    return this.isLoggedIn();
  }
}
