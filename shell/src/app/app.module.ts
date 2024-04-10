import { HttpClientModule } from '@angular/common/http';
import { NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateRegistry } from '@backbase/foundation-ang/core';
import { environment } from '../environments/environment';
import { appModuleImports } from './app-module-imports';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    environment.animation ? BrowserAnimationsModule : NoopAnimationsModule,
    ...appModuleImports,
  ],
  providers: [TemplateRegistry],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private ngZone: NgZone) {
    (window as any).ngZone = this.ngZone;
  }
}
