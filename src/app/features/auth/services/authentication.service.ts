import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
import { catchError, finalize, map, Observable, of } from 'rxjs';
import { MetaModel } from 'src/app/core/models/meta.model';

import {
  ACCESS_TOKEN_KEY, HOME_URL_KEY, IMAGE_TOKEN_KEY, REFRESH_TOKEN_KEY
} from '../../../constants/constant';
import { LoginModel } from '../../../core/models/login.model';
import { RegisterModel } from '../../../core/models/register.model';
import { UserModel } from '../../../core/models/user.model';
import { ApiService } from '../../../core/services/api.service';
import { API_ENDPOINT } from '../../../environments/endpoint';
import { AppStorage, ImageUtility } from '../../../utils/index';
import { LoggedUserService } from './logged-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isRefreshingToken = false;

  constructor(
    private router: Router,
    private permissionsService: NgxPermissionsService,
    private apiService: ApiService,
    private loggedUserService: LoggedUserService
  ) { }

  get currentUser(): Observable<UserModel> {
    return this.loggedUserService.currentUser;
  }

  get loggedUser(): UserModel {
    return this.loggedUserService.loggedUser;
  }

  removeTokens() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(IMAGE_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(HOME_URL_KEY);
  }

  isLoggedIn(): boolean {
    if (!this.apiService.accessToken) {
      return false;
    }
    return true;
  }

  setCurrentUser(user: UserModel | undefined, accessToken?: string) {
    if (user) {
      this.loggedUserService.setLoggedUser(user);
      if (accessToken) {
        AppStorage.storeTokenData(ACCESS_TOKEN_KEY, accessToken);
      }
      // this.permissionsService.loadPermissions(user.permissions || []);
    }
  }

  redirectToHome(homeUrl?: string) {
    if (!homeUrl) {
      homeUrl = AppStorage.getTokenData(HOME_URL_KEY);
    }
    if (homeUrl) {
      this.router.navigateByUrl(homeUrl);
    } else {
      // TODO: Handle other cases
      console.error('None homeUrl');
      this.router.navigate(['/']);
    }
  }

  removeCurrentUser(navigateToLogin = true) {
    //
    this.loggedUserService.setLoggedUser(null);
    //
    this.permissionsService.flushPermissions();
    //
    this.removeTokens();
    //
    if (navigateToLogin) {
      this.apiService.navigateToLogin();
    }
  }

  getDataMeta(): Observable<MetaModel[]> {
    return this.apiService.get(API_ENDPOINT.meta);
  }

  logout() {
    this.removeCurrentUser(true);
  }
}
