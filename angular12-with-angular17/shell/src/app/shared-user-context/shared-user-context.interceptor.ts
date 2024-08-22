import { Injectable } from '@angular/core';
import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedUserContextStorageService } from './shared-user-context-storage.service';
import { tap } from 'rxjs/operators';

const USER_CONTEXT_HEADER = 'x-user-context';

@Injectable()
export class SharedUserContextInterceptor implements HttpInterceptor {
  constructor(private sharedUserContextStorageService: SharedUserContextStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next
      .handle(this.addContextHeader(request))
      .pipe(tap((response: HttpEvent<unknown>) => this.saveContextHeader(response)));
  }

  private saveContextHeader(response: HttpEvent<unknown>): void {
    if (response.type !== HttpEventType.Response) {
      return;
    }

    const contextId: string | null = response.headers?.get(USER_CONTEXT_HEADER);

    if (contextId) {
      this.sharedUserContextStorageService.saveContextId(contextId);
    }
  }

  private addContextHeader(request: HttpRequest<unknown>): HttpRequest<unknown> {
    const contextId = this.sharedUserContextStorageService.getContextId();

    if (!contextId) {
      return request;
    }

    return request.clone({ headers: request.headers.set(USER_CONTEXT_HEADER, contextId) });
  }
}
