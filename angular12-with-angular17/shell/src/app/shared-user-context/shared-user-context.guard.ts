import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, UrlTree } from '@angular/router';
import { ServiceAgreementHttpService } from '@backbase/data-ang/accesscontrol';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SharedUserContextGuard implements CanActivate, CanActivateChild {
  private cookieValid = false;

  constructor(private readonly router: Router, private readonly serviceAgreementService: ServiceAgreementHttpService) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return (
      this.cookieValid ||
      this.validateUserContextCookie().pipe(map((isValid) => isValid || this.getSelectContextUrlTree()))
    );
  }

  canActivateChild(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate();
  }

  private getSelectContextUrlTree(): UrlTree {
    return this.router.createUrlTree(['/select-context']);
  }

  private validateUserContextCookie(): Observable<boolean> {
    return this.serviceAgreementService.getServiceAgreementContext().pipe(
      map(() => {
        this.cookieValid = true;
        return this.cookieValid;
      }),
      catchError(() => {
        this.cookieValid = false;
        return of(this.cookieValid);
      }),
    );
  }
}
