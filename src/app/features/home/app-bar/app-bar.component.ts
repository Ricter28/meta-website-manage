import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../core/models/user.model';
import { AuthenticationService } from '../../auth/services';

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {

  isShowOption = false;
  isVisibleConfirmLogout = false;
  isVisibleProfile = false;
  isVisibleNotify = false;
  user: UserModel = new UserModel({ avatar: '' });
  animationOptions: any = {
    show: {
      duration: 300,
      type: "slideIn",
      direction: 'right',
      easing: "linear"
    },
    hide: {
      duration: 300,
      type: "slideOut",
      direction: 'right',
      easing: "linear"
    }
  };



  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe((value) => {
      if (value != null) {
        this.user = value;
      }
    });
  }

  ngOnInit(): void {
  }

  toggleShowOption(): void {
    this.isShowOption = !this.isShowOption;
  }

  toggleShowProfile(): void {
    this.isVisibleProfile = !this.isVisibleProfile;
  }

  toggleShowConfirmLogout(): void {
    this.isVisibleConfirmLogout = !this.isVisibleConfirmLogout;
  }

  hiddenPopupConfirmLogout() {
    this.isVisibleConfirmLogout = false;
  }

  actionLogout() {
    this.authenticationService.logout();
  }

  toggleShowNotify() {
    this.isVisibleNotify = !this.isVisibleNotify;
  }
}
