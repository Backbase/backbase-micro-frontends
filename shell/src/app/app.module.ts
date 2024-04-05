import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TemplateRegistry } from '@backbase/foundation-ang/core';
import { appModuleImports } from './app-module-imports';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, ...appModuleImports],
  providers: [TemplateRegistry],
  bootstrap: [AppComponent],
})
export class AppModule {}
