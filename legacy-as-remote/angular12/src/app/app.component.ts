import { connectRouter } from '@angular-architects/module-federation-tools';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular12';

  constructor(private router: Router) {
    connectRouter(this.router);
  }
}
