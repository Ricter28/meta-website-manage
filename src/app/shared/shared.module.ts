import { ModuleWithProviders, NgModule } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { AppLoadService } from '../core/services/app-load.service';
import { AuthenticationService, AuthGuard, GuestGuard } from '../features/auth/services';
import { LoggedUserService } from '../features/auth/services/logged-user.service';
import { ThemeModule } from '../theme/theme.module';

const PROVIDERS = [
    //
    AuthGuard,
    GuestGuard,
    //
    ApiService,
    AppLoadService,
    AuthenticationService,
    LoggedUserService,
];

const COMPONENTS = [];

@NgModule({
    imports: [
        ThemeModule
    ],
    declarations: [],
    exports: []
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            providers: [...PROVIDERS]
        };
    }
}
