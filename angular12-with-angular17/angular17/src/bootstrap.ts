import { NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

declare global {
  interface Window {
    ngZone: NgZone;
  }
}

platformBrowserDynamic()
  .bootstrapModule(AppModule, { ngZone: window.ngZone })
  .catch((err) => console.error(err));
