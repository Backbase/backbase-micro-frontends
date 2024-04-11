import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private oAuthService: OAuthService, @Inject(LOCALE_ID) private readonly locale: string) {}

  canActivate(): boolean {
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
