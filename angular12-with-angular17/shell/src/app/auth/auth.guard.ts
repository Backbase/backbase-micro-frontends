import { Inject, Injectable, InjectionToken, LOCALE_ID, Optional } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

export const MOCKS_TOKEN = new InjectionToken<boolean>('mocksEnabled');

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private oAuthService: OAuthService,
    @Inject(LOCALE_ID) private readonly locale: string,
    @Optional() @Inject(MOCKS_TOKEN) private mocksEnabled: boolean,
  ) {}

  canActivate(): boolean {
    if (this.mocksEnabled) {
      return true;
    }
    if (this.oAuthService.hasValidAccessToken()) {
      return true;
    }
    this.oAuthService.initLoginFlow(undefined, { ui_locales: this.locale });
    return false;
  }

  canActivateChild(): boolean {
    return this.canActivate();
  }
}
