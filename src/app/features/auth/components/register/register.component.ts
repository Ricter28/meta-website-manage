import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, startWith, Subject, switchMap, take, tap } from 'rxjs';
import { AppUrl } from '../../../../constants/app-url';
import { VALIDATION_REGEX } from '../../../../constants/constant';
import { RegisterModel } from '../../../../core/models/register.model';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formSubmit$ = new Subject<any>();
  registerForm!: FormGroup;
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
        tap(() => this.registerForm!.markAsDirty()),
        switchMap(() =>
          this.registerForm!.statusChanges.pipe(
            startWith(this.registerForm!.status),
            filter(status => status !== "PENDING"),
            take(1)
          )
        ),
        filter(status => status === "VALID"),
      )
      .subscribe(() => this.submitForm());
  }

  initForm() {
    this.registerForm = this._fb.group(
      {
        email: [
          "",
          Validators.compose([
            Validators.required,
            Validators.pattern(VALIDATION_REGEX.email),
          ]),
        ],
        fullName: [
          "",
          Validators.compose([
            Validators.required
          ])
        ],
        phoneNumber: [
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.pattern(VALIDATION_REGEX.phone),
          ])
        ],
        address: [
          "",
          Validators.compose([
            Validators.required,
          ])
        ],
        password: [
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
          ])
        ],
        confirmPassword: [
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
          ])
        ],
        birthDay: [
          "",
          Validators.compose([
            Validators.required,
          ])
        ],
      },
    );
  }

  async submitForm() {
  }

  navigateToSignInPage() {
    this.router.navigate([AppUrl.SignIn]);
  }

  get email() {
    if (this.registerForm.get('email')?.invalid
      && (this.registerForm.get('email')?.dirty
        && this.registerForm.get('email')?.touched)) return this.registerForm.get('email');
    return null;
  }

  get password() {
    if (this.registerForm.get('password')?.invalid
      && (this.registerForm.get('password')?.dirty
        && this.registerForm.get('password')?.touched)) return this.registerForm.get('password');
    return null;
  }

  get fullName() {
    if (this.registerForm.get('fullName')?.invalid
      && (this.registerForm.get('fullName')?.dirty
        && this.registerForm.get('fullName')?.touched)) return this.registerForm.get('fullName');
    return null;
  }

  get phoneNumber() {
    if (this.registerForm.get('phoneNumber')?.invalid
      && (this.registerForm.get('phoneNumber')?.dirty
        && this.registerForm.get('phoneNumber')?.touched)) return this.registerForm.get('fullName');
    return null;
  }

  get confirmPassword() {
    if (this.registerForm.get('confirmPassword')?.invalid
      && (this.registerForm.get('confirmPassword')?.dirty
        && this.registerForm.get('confirmPassword')?.touched)) return this.registerForm.get('confirmPassword');
    return null;
  }

  get address() {
    if (this.registerForm.get('address')?.invalid
      && (this.registerForm.get('address')?.dirty
        && this.registerForm.get('address')?.touched)) return this.registerForm.get('address');
    return null;
  }

  get birthDay() {
    if (this.registerForm.get('birthDay')?.invalid
      && (this.registerForm.get('birthDay')?.dirty
        && this.registerForm.get('birthDay')?.touched)) return this.registerForm.get('birthDay');
    return null;
  }
}
