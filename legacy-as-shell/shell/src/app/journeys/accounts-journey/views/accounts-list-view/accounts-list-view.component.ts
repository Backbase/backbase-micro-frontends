import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accounts-list-view',
  templateUrl: './accounts-list-view.component.html',
})
export class AccountsListViewComponent {
  aggregatedBalancesPosition = 'top';
  activeView = 'table';
  businessFunction = 'Product Summary,Product Summary Limited View';
  privilege = 'view';
  resourceName = 'Product Summary';
  size = 50;

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) {}

  onNavigateToDetails(accountId: string): void {
    this.router.navigate(['details', { selectedAccount: accountId }, 'info'], {
      relativeTo: this.route.parent,
    });
  }
}
