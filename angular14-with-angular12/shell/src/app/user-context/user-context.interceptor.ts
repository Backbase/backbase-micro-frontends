import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserContextInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.indexOf('/api/access-control/client-api/v2/accessgroups') !== -1) {
      const url = request.url
        .replace('v2', 'v3')
        .replace('usercontext', 'user-context')
        .replace('serviceagreements', 'service-agreements');
      const v3Request = request.clone({ url });
      return next.handle(v3Request);
    }
    return next.handle(request);
  }
}
