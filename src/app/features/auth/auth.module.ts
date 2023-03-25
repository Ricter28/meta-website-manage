import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppUrl } from '../../constants/app-url';
import { SharedModule } from '../../shared/shared.module';
import { ThemeModule } from '../../theme/theme.module';
import { RegisterComponent } from './components/register/register.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { GuestGuard } from './services';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {
    path: AppUrl.SignIn,
    component: SignInComponent,
    canActivate: [GuestGuard]
  },
  {
    path: AppUrl.Register,
    component: RegisterComponent,
  }
];

@NgModule({
  declarations: [SignInComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    SharedModule,
    ThemeModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
