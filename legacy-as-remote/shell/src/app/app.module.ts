import { shareNgZone } from '@angular-architects/module-federation-tools';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TemplateRegistry } from '@backbase/foundation-ang/core';
import { appModuleImports } from './app-module-imports';
import { AppComponent } from './app.component';
import { ServicePathsModule } from './service-paths.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, ServicePathsModule, ...appModuleImports],
  providers: [TemplateRegistry],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private ngZone: NgZone) {
    shareNgZone(this.ngZone);
  }
}
