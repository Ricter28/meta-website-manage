import { Component } from '@angular/core';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: any): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  getBodyClass(): string {
    let styleClass = '';
    if(this.isSideNavCollapsed) {
      styleClass = 'body-trimmed';
    } else{
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }

  getAppBarClass(): string {
    let styleClass = 'app-bar-md-screen';
    if(this.isSideNavCollapsed) {
      styleClass = 'app-bar-trimmed';
    }
    return styleClass;
  }
}