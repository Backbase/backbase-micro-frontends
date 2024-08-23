import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateRegistry } from '@backbase/foundation-ang/core';
import { environment } from '../environments/environment';
import { appModuleImports } from './app-module-imports';
import { AppComponent } from './app.component';
import { MOCKS_TOKEN } from './auth/auth.guard';
import { SharedUserContextInterceptor } from './shared-user-context/shared-user-context.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    environment.animation ? BrowserAnimationsModule : NoopAnimationsModule,
    ...appModuleImports,
  ],
  providers: [
    TemplateRegistry,
    {
      provide: MOCKS_TOKEN,
      useValue: environment.mocksEnabled,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SharedUserContextInterceptor,
      multi: true,
    },
  ],
  bootstrap: [],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}
  ngDoBootstrap(): void {
    const ce = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('angular12-element', ce);
  }
}
