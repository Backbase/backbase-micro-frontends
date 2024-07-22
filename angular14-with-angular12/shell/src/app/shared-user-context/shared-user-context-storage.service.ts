import { Injectable } from '@angular/core';

const CONTEXT_ID = 'contextId';

@Injectable({
  providedIn: 'root',
})
export class SharedUserContextStorageService {
  private contextId: string | null = null;

  public saveContextId(contextId: string): void {
    this.contextId = contextId;
    sessionStorage.setItem(CONTEXT_ID, contextId);
  }

  public getContextId(): string | null {
    return this.contextId || sessionStorage.getItem(CONTEXT_ID);
  }

  public removeContextId(): void {
    sessionStorage.removeItem(CONTEXT_ID);
    this.contextId = null;
  }
}
