import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppNotify, AppStorage } from '../../utils';
import { ACCESS_TOKEN_KEY, AUTH_SCHEME } from '../../constants/constant';
import { API_URL, API_URL_PHU } from '../../environments/endpoint';
import { AppUrl } from '../../constants/app-url';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  get accessToken(): string {
    return AppStorage.getTokenData(ACCESS_TOKEN_KEY);
  }

  get headerAuthorizationKey(): string {
    return AUTH_SCHEME + this.accessToken;
  }

  get headers(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'q=0.8;application/json;q=0.9',
      APIKey: '~123456789~',
      Authorization: this.headerAuthorizationKey
    });
  }

  get options() {
    return { headers: this.headers };
  }

  get formDataHeaders(): HttpHeaders {
    return new HttpHeaders({
      Accept: 'application/json',
      Authorization: this.headerAuthorizationKey,
    });
  }

  get<T>(url: string): Observable<T> {
    return this.httpClient
      .get<T>(`${API_URL}/${url}`, this.options)
      .pipe(catchError((error) => this.handleError(error, url)));
  }

  post<T>(url: string, data: any): Observable<T> {
    if (data instanceof FormData) {
      const httpOptions = {
        headers: this.formDataHeaders
      };
      return this.httpClient.post<T>(`${API_URL}/${url}`, data, httpOptions)
        .pipe(catchError((error) => this.handleError(error, url)));
    } else {
      return this.httpClient
        .post<T>(`${API_URL}/${url}`, data, this.options)
        .pipe(catchError((error) => this.handleError(error, url)));
    }
  }

  postFile<T>(url: string, files: File[]): Observable<HttpEvent<T>> {
    const formData: FormData = new FormData();
    for (const file of files) {
      formData.append('files', file, file.name);
    }
    const headers = this.formDataHeaders;
    const uploadReq = new HttpRequest('POST', `${API_URL}/${url}`, formData, {
      reportProgress: true,
      headers
    });

    return this.httpClient.request(uploadReq);
  }

  put<T>(url: string, data: any): Observable<T> {
    console.log(url, data);

    if (data instanceof FormData) {
      const httpOptions = {
        headers: this.formDataHeaders
      };
      return this.httpClient.put<T>(`${API_URL}/${url}`, data, httpOptions)
        .pipe(catchError((error) => this.handleError(error, url)));
    } else {
      return this.httpClient
        .put<T>(`${API_URL}/${url}`, data, this.options)
        .pipe(
          tap(console.log),
          catchError((error) => this.handleError(error, url))
        );
    }
  }

  patch<T>(url: string, data: any): Observable<T> {
    if (data instanceof FormData) {
      const httpOptions = {
        headers: this.formDataHeaders
      };
      return this.httpClient.patch<T>(`${API_URL}/${url}`, data, httpOptions)
        .pipe(catchError((error) => this.handleError(error, url)));
    } else {
      return this.httpClient
        .patch<T>(`${API_URL}/${url}`, data, this.options)
        .pipe(catchError((error) => this.handleError(error, url)));
    }
  }

  delete<T>(url: string): Observable<T> {
    const params: URLSearchParams | any = new URLSearchParams();
    const options = { headers: this.headers };

    if (params) {
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          const val = params[key];
          params.set(key, val);
        }
      }

      (options as any).search = params;
    }

    return this.httpClient
      .delete<T>(`${API_URL}/${url}`, options)
      .pipe(catchError((error) => this.handleError(error, url)));
  }

  private handleError(response: HttpErrorResponse, requestUrl?: string) {
    if (response.status === 401) {
      this.router.navigate([AppUrl.SignIn]);
      return throwError('Your session has expired. please log in');
    }
    //
    if (response.status === 403) {
      return throwError('Permission Denied');
    }
    //
    if (response.status === 500) {
      let error = response.error ? response.error.message : response.statusText;
      if (!error) {
        error = 'Internal Server Error';
      }
      AppNotify.error(error);
      return throwError(response);
    }
    //
    let messageError = '';
    if (response.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', response.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${response.status}, ` +
        `body was: ${response.error}`);
    }

    if (!!response.error && !!response.error.message) {
      messageError = response.error.message;
    } else {
      messageError = 'Something Bad Happened';
    }

    AppNotify.error(messageError);

    // return an observable with a user-facing error message
    return throwError(messageError);
  }

  navigateToForbidden() {
    this.router.navigate([AppUrl.Forbidden]);
  }

  navigateToLogin(callbackUrl = false) {
    let pathname = window.location.pathname;
    if (pathname === '/' || pathname === '/sign-in') {
      pathname = '';
    }
    //
    if (pathname && callbackUrl === true) {
      this.router.navigate([`/${AppUrl.SignIn}`], {
        queryParams: { callback: encodeURIComponent(window.location.href) }
      });
    } else {
      this.router.navigate([AppUrl.SignIn]);
    }
  }

  // PHU SERVER
  getp<T>(url: string): Observable<T> {
    return this.httpClient
      .get<T>(`${API_URL_PHU}/${url}`, this.options)
      .pipe(catchError((error) => this.handleError(error, url)));
  }

  postp<T>(url: string, data: any): Observable<T> {
    if (data instanceof FormData) {
      const httpOptions = {
        headers: this.formDataHeaders
      };
      return this.httpClient.post<T>(`${API_URL_PHU}/${url}`, data, httpOptions)
        .pipe(catchError((error) => this.handleError(error, url)));
    } else {
      return this.httpClient
        .post<T>(`${API_URL_PHU}/${url}`, data, this.options)
        .pipe(catchError((error) => this.handleError(error, url)));
    }
  }
}
