import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductSummaryAccountDetailsWidgetModule } from '@backbase/product-summary-account-details-widget-ang';
import { ProductSummaryAccountPickerModule } from '@backbase/product-summary-account-picker-ang';
import { ProductSummaryAccountsOverviewModule } from '@backbase/product-summary-accounts-overview-ang';
import { ProductSummaryAccountsService } from '@backbase/product-summary-common-ang';
import { HeaderModule } from '@backbase/ui-ang/header';
import { accountsJourneyRoutes } from './accounts-journey.routes';
import { AccountDetailsViewComponent } from './views/account-details-view/account-details-view.component';
import { AccountsListViewComponent } from './views/accounts-list-view/accounts-list-view.component';

@NgModule({
  declarations: [AccountsListViewComponent, AccountDetailsViewComponent],
  imports: [
    CommonModule,
    HeaderModule,
    ProductSummaryAccountDetailsWidgetModule,
    ProductSummaryAccountPickerModule,
    ProductSummaryAccountsOverviewModule,
    RouterModule.forChild(accountsJourneyRoutes),
  ],
  providers: [ProductSummaryAccountsService],
})
export class AccountsJourneyModule {}
