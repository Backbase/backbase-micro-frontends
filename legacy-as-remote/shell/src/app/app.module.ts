import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appModuleImports } from './app-module-imports';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ...appModuleImports],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
