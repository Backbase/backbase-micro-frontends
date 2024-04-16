import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { SharedUserContextStorageService } from './shared-user-context-storage.service';

export const UserContextConfigurationToken = new InjectionToken<string>('UserContextConfiguration:landingPageUrl');

@Injectable()
export class SharedUserContextService {
  constructor(
    @Inject(UserContextConfigurationToken) private landingPageUrl: string,
    private router: Router,
    private oAuthService: OAuthService,
    private userContextStorageService: SharedUserContextStorageService,
  ) {}

  public reload(): void {
    window.location.reload();
  }

  public openLandingPage(): void {
    this.router.navigateByUrl(this.landingPageUrl);
  }

  public logout(): void {
    this.oAuthService.logOut();
    this.userContextStorageService.removeContextId();
  }
}
