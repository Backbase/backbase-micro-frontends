import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { TemplateRegistry } from '@backbase/foundation-ang/core';
import { appModuleImports } from './app-module-imports';
import { AppComponent } from './app.component';
import { ServicePathsModule } from './service-paths.module';
import { SharedUserContextInterceptor } from './shared-user-context/shared-user-context.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, ServicePathsModule, ...appModuleImports],
  providers: [
    TemplateRegistry,
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

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('angular14-element', ce);
  }
}
