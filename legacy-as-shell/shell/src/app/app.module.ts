import { shareNgZone } from '@angular-architects/module-federation-tools';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateRegistry } from '@backbase/foundation-ang/core';
import { environment } from '../environments/environment';
import { appModuleImports } from './app-module-imports';
import { AppComponent } from './app.component';
import { MOCKS_TOKEN } from './auth/auth.guard';

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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private ngZone: NgZone) {
    shareNgZone(this.ngZone);
  }
}
