import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountStatementBusinessWidgetModule } from '@backbase/account-statement-business-widget-ang';
import {
  ACCOUNT_STATEMENT_CATEGORIES_TOKEN,
  accountStatementCategories,
  MIME_TYPE_EXTENSIONS_TOKEN,
  mimeTypeExtensions,
} from '@backbase/account-statement-common-ang';
import { ProductSummaryAccountPickerModule } from '@backbase/product-summary-account-picker-ang';
import { HeaderModule } from '@backbase/ui-ang';
import { AccountStatementBusinessViewComponent } from './account-statement-business-view/account-statement-business-view.component';

@NgModule({
  declarations: [AccountStatementBusinessViewComponent],
  imports: [
    AccountStatementBusinessWidgetModule,
    CommonModule,
    HeaderModule,
    ProductSummaryAccountPickerModule,
    RouterModule.forChild([{ path: '', component: AccountStatementBusinessViewComponent, pathMatch: 'full' }]),
  ],
  providers: [
    {
      provide: ACCOUNT_STATEMENT_CATEGORIES_TOKEN,
      useValue: accountStatementCategories,
    },
    {
      provide: MIME_TYPE_EXTENSIONS_TOKEN,
      useValue: mimeTypeExtensions,
    },
  ],
})
export class AccountStatementBusinessJourneyModule {}
