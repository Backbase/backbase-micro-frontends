import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductSummaryAccountsOverviewModule } from '@backbase/product-summary-accounts-overview-ang';
import { HeaderModule } from '@backbase/ui-ang/header';
import { accountsJourneyRoutes } from './accounts-journey.routes';
import { AccountsListViewComponent } from './views/accounts-list-view/accounts-list-view.component';

@NgModule({
  declarations: [AccountsListViewComponent],
  imports: [
    CommonModule,
    HeaderModule,
    ProductSummaryAccountsOverviewModule,
    RouterModule.forChild(accountsJourneyRoutes),
  ],
})
export class AccountsJourneyModule {}
