import { shareNgZone } from '@angular-architects/module-federation-tools';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TemplateRegistry } from '@backbase/foundation-ang/core';
import { environment } from '../environments/environment';
import { appModuleImports } from './app-module-imports';
import { AppComponent } from './app.component';
import { MOCKS_TOKEN } from './auth/auth.guard';
import { ServicePathsModule } from './service-paths.module';
import { SharedUserContextInterceptor } from './shared-user-context/shared-user-context.interceptor';
import { UserContextInterceptor } from './user-context/user-context.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, ServicePathsModule, ...appModuleImports],
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserContextInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private ngZone: NgZone) {
    shareNgZone(this.ngZone);
  }
}
