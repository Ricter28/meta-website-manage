import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppUrl } from './constants/app-url';
import { AuthGuard } from './core/guards/auth.guard';
import { GuestGuard } from './core/guards/guest.guard';
import { ErrorComponent } from './shared/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: AppUrl.Home, pathMatch: 'full' },
  {
    path: AppUrl.Home,
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
  },
  { path: '**', component: ErrorComponent }
];
const config: ExtraOptions = {
  useHash: false
};
@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    GuestGuard
  ]
})
export class AppRoutingModule { }