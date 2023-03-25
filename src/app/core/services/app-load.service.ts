import {Injectable, Injector} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgxPermissionsService} from 'ngx-permissions';
import {forkJoin, of} from 'rxjs';
import {ApiService} from './api.service';
import { AuthenticationService } from '../../features/auth/services';
import { AppNotify } from '../../utils';


@Injectable()
export class AppLoadService {
  protected httpClient: HttpClient;
  protected permissionsService: NgxPermissionsService;
  protected apiService: ApiService;
  protected authService: AuthenticationService;

  constructor(private injector: Injector) {
    this.httpClient = this.injector.get(HttpClient);
    this.permissionsService = this.injector.get(NgxPermissionsService);
    this.apiService = this.injector.get(ApiService);
    this.authService = this.injector.get(AuthenticationService);
  }

  initApp(): Promise<any> {
    return of(true).toPromise();
  }
}
