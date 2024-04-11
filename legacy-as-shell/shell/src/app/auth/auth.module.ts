import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, LOCALE_ID, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IdentityAuthModule } from '@backbase/identity-auth';
import { ImpersonationModule, ImpersonationService } from '@backbase/identity-auth/impersonation';
import {
  AuthConfig,
  OAuthEvent,
  OAuthModule,
  OAuthModuleConfig,
  OAuthService,
  OAuthStorage,
} from 'angular-oauth2-oidc';
import { CookieService } from 'ngx-cookie-service';
import { AuthEventsHandlerService } from './auth-events-handler.service';
import { AuthInterceptor } from './auth.interceptor';

const cookiePaths = [
  '/api/account-statement/client-api/v2/account/statements/download',
  '/api/transaction-manager/client-api/v2/transactions/export',
  '/api/loan/client-api/v1/loans',
];

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, IdentityAuthModule, ImpersonationModule, OAuthModule.forRoot()],
  exports: [],
})
export class AuthModule {
  constructor(@Optional() @SkipSelf() targetModule: AuthModule) {
    if (targetModule) {
      throw new Error(
        `${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only.`,
      );
    }
  }

  static forRoot(apiRoot: string, authConfig: (baseUrl: string) => AuthConfig): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
        {
          provide: AuthConfig,
          useFactory: authConfig,
          deps: [[new Optional(), LOCALE_ID]],
        },
        { provide: OAuthStorage, useFactory: () => localStorage },
        {
          provide: OAuthModuleConfig,
          useValue: {
            resourceServer: {
              allowedUrls: [apiRoot],
              sendAccessToken: true,
            },
          },
        },
        {
          provide: APP_INITIALIZER,
          multi: true,
          deps: [OAuthService, CookieService, ImpersonationService, AuthEventsHandlerService],
          useFactory:
            (oAuthService: OAuthService, cookieService: CookieService, impersonationService: ImpersonationService) =>
            async () => {
              // todo: delete when files download works without cookies
              oAuthService.events.subscribe((authEvent: OAuthEvent) => {
                if (authEvent.type === 'token_received' || authEvent.type === 'token_refreshed') {
                  cookiePaths.forEach((path) =>
                    cookieService.set('Authorization', oAuthService.getAccessToken(), { path }),
                  );
                }
              });

              await impersonationService.checkImpersonationStatus();

              await oAuthService.loadDiscoveryDocumentAndTryLogin();
            },
        },
      ],
    };
  }
}
