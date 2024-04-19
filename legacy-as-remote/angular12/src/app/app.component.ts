import { connectRouter } from '@angular-architects/module-federation-tools';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnDestroy {
  eventName = 'angular12:navigate';
  title = 'angular12';

  constructor(private readonly router: Router) {
    connectRouter(this.router);
    window.addEventListener(this.eventName, this.navigationHandler as (e: Event) => void, false);
  }

  ngOnDestroy(): void {
    window.removeEventListener(this.eventName, this.navigationHandler as (e: Event) => void, false);
  }

  private navigationHandler = (event: CustomEvent): void => {
    if (event.detail.url) {
      this.router.navigateByUrl(event.detail.url);
    }
  };
}
