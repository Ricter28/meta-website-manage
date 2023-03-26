import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, finalize, startWith, Subject, switchMap, take, tap } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';
import { AppNotify } from 'src/app/utils';
import { AppUrl } from '../../../../constants/app-url';
import { VALIDATION_REGEX } from '../../../../constants/constant';
import { AuthenticationService } from '../../services';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  formSubmit$ = new Subject<any>();
  signInForm!: FormGroup;
  isLoading: boolean = false;
  constructor(
    private _fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.initForm();

    this.formSubmit$
      .pipe(
        tap(() => this.signInForm!.markAsDirty()),
        switchMap(() =>
          this.signInForm!.statusChanges.pipe(
            startWith(this.signInForm!.status),
            filter(status => status !== "PENDING"),
            take(1)
          )
        ),
        filter(status => status === "VALID"),
      )
      .subscribe(() => this.submitForm());
  }

  initForm() {
    this.signInForm = this._fb.group(
      {
        email: [
          "",
          Validators.compose([
            Validators.required,
            Validators.pattern(VALIDATION_REGEX.email),
          ]),
        ],
        password: [
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
          ])
        ],
      },
    );
  }

  async submitForm() {
    this.isLoading = true;
    let today = new Date();
    today.setDate(today.getDate() + 7);
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate());
    if(this.signInForm.get('email')?.value === "meta@gmail.com" && this.signInForm.get('password')?.value === 'meta'){
      this.authenticationService.setCurrentUser(new UserModel({}), date)
      this.router.navigate([AppUrl.Home]);
    }else{
      this.isLoading = false;
      AppNotify.error("Email or password is incorrect!")
    }
  }

  get email() {
    if (this.signInForm.get('email')?.invalid
      && (this.signInForm.get('email')?.dirty
        && this.signInForm.get('email')?.touched)) return this.signInForm.get('email');
    return null;
  }

  get password() {
    if (this.signInForm.get('password')?.invalid
      && (this.signInForm.get('password')?.dirty
        && this.signInForm.get('password')?.touched)) return this.signInForm.get('password');
    return null;
  }

  navigateToRegisterPage() {
    this.router.navigate([AppUrl.Register]);
  }
}
