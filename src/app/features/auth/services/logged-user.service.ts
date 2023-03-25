import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../../../core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {
  private _currentUser: BehaviorSubject<UserModel> | any = new BehaviorSubject(null);

  constructor() {
  }

  get currentUser(): Observable<UserModel> {
    return this._currentUser.asObservable();
  }

  setLoggedUser(user: UserModel | unknown) {
    this._currentUser.next(user);
  }

  get loggedUserId(): number | unknown {
    const user = this._currentUser.getValue();
    return user ? user.id : null;
  }

  get loggedUser(): UserModel {
    return this._currentUser.getValue();
  }
}
