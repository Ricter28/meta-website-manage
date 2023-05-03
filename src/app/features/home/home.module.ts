import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { MatPaginatorModule} from "@angular/material/paginator";
import { AppUrl } from '../../constants/app-url';
import { SharedModule } from '../../shared/shared.module';
import { ThemeModule } from '../../theme/theme.module';
import { ProfileComponent } from '../auth/components/profile/profile.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { HomeComponent } from './home.component';
import { ProductsComponent } from './products/products.component';
import { DashboardService } from './services/dashboard.service';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CalendarService } from './services/calendar.service';
import { AndroidComponent } from './android/android.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: AppUrl.Products,
        pathMatch: 'full'
      },
      {
        path: AppUrl.Products,
        component: ProductsComponent
      }, 
      {
        path: AppUrl.Android,
        component: AndroidComponent
      }
    ]
  },
];

@NgModule({
  declarations: [
    ProductsComponent,
    SidenavComponent,
    HomeComponent,
    AppBarComponent,
    ProfileComponent,
    AndroidComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    SharedModule,
    ThemeModule,
    RouterModule.forChild(routes)
  ],
  providers: [DashboardService, CalendarService]
})
export class HomeModule { }
