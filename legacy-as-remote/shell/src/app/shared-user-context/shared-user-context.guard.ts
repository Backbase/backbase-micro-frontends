import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, UrlTree } from '@angular/router';
import { ServiceAgreementHttpService } from '@backbase/accesscontrol-http-ang';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SharedUserContextGuard implements CanActivate, CanActivateChild {
  private isContextValid = false;

  constructor(
    private readonly router: Router,
    private readonly serviceAgreementService: ServiceAgreementHttpService,
  ) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return (
      this.isContextValid ||
      this.validateUserContext().pipe(map((isValid) => isValid || this.getSelectContextUrlTree()))
    );
  }

  canActivateChild(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate();
  }

  private getSelectContextUrlTree(): UrlTree {
    return this.router.createUrlTree(['/select-context']);
  }

  private validateUserContext(): Observable<boolean> {
    return this.serviceAgreementService.getServiceAgreementContext().pipe(
      map(() => {
        this.isContextValid = true;
        return this.isContextValid;
      }),
      catchError(() => {
        this.isContextValid = false;
        return of(this.isContextValid);
      }),
    );
  }
}
