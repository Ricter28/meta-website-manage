import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUrl } from '../../constants/app-url';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {

  constructor(private router: Router) { }

  goHome(){
    this.router.navigate([AppUrl.Home]);
  }
}
