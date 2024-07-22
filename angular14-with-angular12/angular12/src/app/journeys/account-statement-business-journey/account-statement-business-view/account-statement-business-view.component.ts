import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationType } from '@backbase/account-statement-common-ang';
import { AccountStatementsPostRequest } from '@backbase/account-statements-http-ang';

@Component({
  selector: 'app-account-statement-business-view',
  templateUrl: './account-statement-business-view.component.html',
})
export class AccountStatementBusinessViewComponent {
  absoluteDateLimit = '';
  accountsBeforeLoadingMore = 5;
  accountsForVirtualScroll = 100;
  businessFunction = 'Product Summary,Product Summary Limited View';
  debounceTime = 300;
  favoriteFirst = true;
  multiple = false;
  notificationDismissTime = 5;
  pageSize = 24;
  paginationType = PaginationType.Pagination;
  privilege = 'view';
  relativeDateLimit = 0;
  resourceName = 'Product Summary';
  showBookDate = true;
  showCategory = true;
  size = 50;
  sortingDirection = AccountStatementsPostRequest.DirectionEnum.DESC;
  sortingOrder = 'date';

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) {}

  onSelectAccount(accountId: string): void {
    this.router.navigate(['.', { selectedAccount: accountId }], {
      relativeTo: this.route.parent,
    });
  }
}
