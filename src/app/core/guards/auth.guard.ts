import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, RouterStateSnapshot
} from '@angular/router';
import { AuthenticationService } from 'src/app/features/auth/services/authentication.service';
import { ApiService } from '../services/api.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private apiService: ApiService,
    private authService: AuthenticationService,
    ) {
  }

  private isLoggedIn(): boolean { 
    try{
      const dateExpiration = new Date(this.apiService.accessToken);
      const now = new Date();
      if(now <= dateExpiration){
        return true;
      }else{
        this.authService.removeCurrentUser(false);
        this.apiService.navigateToLogin(true);
        return false;
      }
    }catch(_){
      this.authService.removeCurrentUser(false);
      this.apiService.navigateToLogin(true);
      return false;
    }
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
