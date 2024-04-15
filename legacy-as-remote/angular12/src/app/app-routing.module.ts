import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductSummaryCommon, ProductSummaryUserPermissionsService } from '@backbase/product-summary-common-ang';
import { ProductSummaryUiModule } from '@backbase/product-summary-ui';

const routes: Routes = [
  {
    path: 'angular12',
    children: [
      {
        path: 'accounts',
        loadChildren: () =>
          import('./journeys/accounts-journey/accounts-journey.module').then((m) => m.AccountsJourneyModule),
      },
    ],
  },
];

@NgModule({
  imports: [ProductSummaryCommon, ProductSummaryUiModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProductSummaryUserPermissionsService],
})
export class AppRoutingModule {}
