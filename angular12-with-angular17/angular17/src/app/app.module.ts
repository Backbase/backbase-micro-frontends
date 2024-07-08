import { HttpClientModule } from '@angular/common/http';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AppDataModule } from './app-data.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicePathsModule } from './service-paths.module';
import { SharedAppCoreModule } from './shared-app-core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppDataModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ServicePathsModule,
    SharedAppCoreModule.forRoot(environment),
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('angular17-element', ce);
  }
}
