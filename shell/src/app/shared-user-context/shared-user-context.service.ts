import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

export const UserContextConfigurationToken = new InjectionToken<string>('UserContextConfiguration:landingPageUrl');

@Injectable()
export class SharedUserContextService {
  constructor(
    @Inject(UserContextConfigurationToken) private landingPageUrl: string,
    private router: Router,
    private oAuthService: OAuthService,
  ) {}

  public reload(): void {
    window.location.reload();
  }

  public openLandingPage(): void {
    this.router.navigateByUrl(this.landingPageUrl);
  }

  public logout(): void {
    this.oAuthService.revokeTokenAndLogout().then(() => {
      this.oAuthService.initLoginFlow();
    });
  }
}
