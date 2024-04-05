import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account-details-view',
  templateUrl: './account-details-view.component.html',
})
export class AccountDetailsViewComponent {
  accountsBeforeLoadingMore = 5;
  accountsForVirtualScroll = 100;
  businessFunction = 'Product Summary,Product Summary Limited View';
  debounceTime = 300;
  favoriteFirst = true;
  multiple = false;
  privilege = 'view';
  resourceName = 'Product Summary';
  size = 50;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}

  onNavigateBack(): void {
    this.router.navigate(['..'], { relativeTo: this.route.parent });
  }

  onSelectAccount(accountId: string): void {
    const selectedTab = this.route.snapshot.firstChild?.routeConfig?.path || '';
    this.router.navigate(
      ['details', { selectedAccount: accountId }, selectedTab],
      {
        relativeTo: this.route.parent,
      },
    );
  }
}
