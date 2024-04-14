import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TemplateRegistry } from '@backbase/foundation-ang/core';
import { appModuleImports } from './app-module-imports';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicePathsModule } from './service-paths.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, HttpClientModule, ServicePathsModule, ...appModuleImports],
  providers: [TemplateRegistry],
  bootstrap: [AppComponent],
})
export class AppModule {}
