import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { ACCESS_TOKEN_KEY } from 'src/app/constants/constant';
import { AppStorage } from 'src/app/utils/storage';
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
    try{
      if(!this.authService.isLoggedIn()){
        return true;
      }else{
        this.authService.redirectToHome(AppUrl.Home);
        return false;
      }
    }catch(_){
      return true;
    }
  }
}
