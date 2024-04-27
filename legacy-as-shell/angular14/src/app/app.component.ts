import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'angular14';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // https://stackoverflow.com/a/75354963/706246
    const { pushState, replaceState } = window.history;

    window.history.pushState = function (...args) {
      pushState.apply(window.history, args);
      window.dispatchEvent(new Event('pushState'));
    };

    window.history.replaceState = function (...args) {
      replaceState.apply(window.history, args);
      window.dispatchEvent(new Event('replaceState'));
    };

    window.addEventListener('popstate', this.navigationHandler as (e: Event) => void, false);
    window.addEventListener('pushState', this.navigationHandler as (e: Event) => void, false);
    window.addEventListener('replaceState', this.navigationHandler as (e: Event) => void, false);

    this.navigationHandler();
  }

  ngOnDestroy(): void {
    window.removeEventListener('popstate', this.navigationHandler as (e: Event) => void, false);
    window.removeEventListener('pushState', this.navigationHandler as (e: Event) => void, false);
    window.removeEventListener('replaceState', this.navigationHandler as (e: Event) => void, false);
  }

  private navigationHandler = (): void => {
    const url = `${location.pathname.substr(1)}${location.search}`;
    if (url.includes(this.title)) {
      setTimeout(() => {
        this.router.navigateByUrl(url);
      }, 0);
    }
  };
}
