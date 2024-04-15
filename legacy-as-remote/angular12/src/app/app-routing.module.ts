import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
