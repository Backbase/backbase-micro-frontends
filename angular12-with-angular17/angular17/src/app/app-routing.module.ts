import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'angular17',
    children: [
      {
        path: 'cards',
        loadChildren: () =>
          import('./journeys/cards-management-journey-bundle.module').then((m) => m.CardsManagementJourneyBundleModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
