import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, startWith, Subject, switchMap, take, tap } from 'rxjs';
import { VALIDATION_REGEX } from '../../../../constants/constant';
import { UserModel } from '../../../../core/models/user.model';
import { ApiService } from '../../../../core/services/api.service';
import { AppNotify } from '../../../../utils';
import { AuthenticationService } from '../../services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  dataUserReady: boolean = false;
  isShowUploadAvatar: boolean = false;
  user: UserModel = new UserModel();
  profileFormSubmit$ = new Subject<any>();
  profileForm!: FormGroup;
  isLoading: boolean = false;
  fileAvatar!: File;

  constructor(
    private authService: AuthenticationService,
    private apiService: ApiService,
    private _fb: FormBuilder
  ) {
    this.authService.currentUser
      .subscribe((user: any) => {
        if(user != null){
          this.dataUserReady = true;
          this.user = user;
          this.initProfileForm();
        }
      });

  }

  ngOnInit(): void {
    this.profileFormSubmit$
      .pipe(
        tap(() => this.profileForm!.markAsDirty()),
        switchMap(() =>
          this.profileForm!.statusChanges.pipe(
            startWith(this.profileForm!.status),
            filter(status => status !== "PENDING"),
            take(1)
          )
        ),
        filter(status => status === "VALID"),
      )
      .subscribe(validationSuccessful => this.submitForm());
  }

  // TODO: Update profile user
  submitForm() {
    console.log("Submit form update profile", this.profileForm);
    this.updateProfile(this.profileForm.value);
  }

  initProfileForm(): void {
    this.profileForm = this._fb.group({
      name: [
        this.user.name,
        Validators.compose([
          Validators.required,
        ]),
      ],
      email: [
        this.user.email,
        Validators.compose([
          Validators.required,
          Validators.pattern(VALIDATION_REGEX.email)
        ])
      ],
      address: [
        this.user.address,
        Validators.compose([
          Validators.required,
        ])
      ],
      birthday: [
        this.user.birthday,
        Validators.compose([
          Validators.required,
        ])
      ],
      gender: [
        this.user.gender,
        Validators.compose([
          Validators.required,
        ])
      ],
      phone: [
        this.user.phone,
        Validators.compose([
          Validators.required,
          Validators.pattern(VALIDATION_REGEX.phone)
        ])
      ],
      notify: [this.user.notify],
    })
  }

  toggleShowUploadAvatar() {
    this.isShowUploadAvatar = !this.isShowUploadAvatar;
  }

  // On file Select
  async onChange(event: any) {
    this.fileAvatar = event.target.files[0];
    this.isShowUploadAvatar = false;
    await this.onUploadAvatar();
  }

  // OnClick of button Upload
  async onUploadAvatar() {
  }

  updateProfile(user: any) {
  }

  onChangeNotify(){
    this.user.notify = !this.user.notify;
    AppNotify.success("Notification "+ this.user.notify ? 'On' : 'Off');
    this.updateProfile(this.user);
  }
}
