import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'angular14',
    children: [
      {
        path: 'cards',
        loadChildren: () =>
          import('./journeys/cards-management-journey-bundle.module').then((m) => m.CardsManagementJourneyBundleModule),
      },
      {
        path: 'loans',
        loadChildren: () => import('./journeys/loans-journey-bundle.module').then((m) => m.LoansJourneyBundleModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
