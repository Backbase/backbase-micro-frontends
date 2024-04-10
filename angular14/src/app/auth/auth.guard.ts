import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, UrlTree } from '@angular/router';
import { AuthService } from '@backbase/identity-auth';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export const MOCKS_TOKEN = new InjectionToken<boolean>('mocksEnabled');

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad, CanActivateChild {
  constructor(
    private readonly authService: AuthService,
    @Optional() @Inject(MOCKS_TOKEN) private mocksEnabled: boolean,
  ) {}

  canLoad(): Observable<boolean | UrlTree> {
    return this.redirectIfUnauthenticated();
  }

  canActivate(): Observable<boolean | UrlTree> {
    return this.redirectIfUnauthenticated();
  }

  canActivateChild(): Observable<boolean | UrlTree> {
    return this.redirectIfUnauthenticated();
  }

  /**
   * If user has an access token in storage they are logged in and may access page.
   * If not, treat them as logged out.
   */
  private redirectIfUnauthenticated(): Observable<boolean | UrlTree> {
    if (this.mocksEnabled) {
      return of(true);
    }

    return this.authService.isAuthenticated$.pipe(
      map((loggedIn) => {
        if (loggedIn) {
          return true;
        }

        this.authService.initLoginFlow();
        return false;
      }),
    );
  }
}
