import { HttpClientModule } from '@angular/common/http';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { TemplateRegistry } from '@backbase/foundation-ang/core';
import { appModuleImports } from './app-module-imports';
import { AppComponent } from './app.component';
import { ServicePathsModule } from './service-paths.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServicePathsModule,
    ...appModuleImports,
  ],
  providers: [TemplateRegistry],
  bootstrap: [],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('angular14-element', ce);
  }
}
