import { shareNgZone } from '@angular-architects/module-federation-tools';
import { NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appModuleImports } from './app-module-imports';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ...appModuleImports],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private ngZone: NgZone) {
    shareNgZone(this.ngZone);
  }
}
