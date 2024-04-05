import { Routes } from '@angular/router';
import { ProductSummaryAccountDetailsWidgetComponent } from '@backbase/product-summary-account-details-widget-ang';
import { AccountDetailsViewComponent } from './views/account-details-view/account-details-view.component';
import { AccountsListViewComponent } from './views/accounts-list-view/accounts-list-view.component';

export const accountsJourneyRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: AccountsListViewComponent },
  {
    path: 'details',
    component: AccountDetailsViewComponent,
    children: [
      { path: 'balance', children: [] },
      { path: 'info', component: ProductSummaryAccountDetailsWidgetComponent },
    ],
  },
];
