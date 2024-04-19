import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
})
export class NavigationMenuComponent {
  constructor(
    private readonly location: Location,
    private readonly router: Router,
  ) {}

  handleNavigation(remoteName: string, path: string) {
    const elementName = `${remoteName}-element`;
    const eventName = `${remoteName}:navigate`;
    const url = `/${remoteName}${path}`;
    // Trigger initial navigation to load the remote module
    const isLoaded = document.getElementsByTagName(elementName).length > 0;
    if (!isLoaded) {
      this.router.navigateByUrl(url);
      return;
    }
    // Dispatch a custom event so navigation is handled within the remote app
    const event = new CustomEvent(eventName, { detail: { url } });
    window.dispatchEvent(event);
  }

  isActive(url: string): boolean {
    return this.location.path().includes(url);
  }
}
