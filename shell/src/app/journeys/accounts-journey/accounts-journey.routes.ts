import { Routes } from '@angular/router';
import { AccountsListViewComponent } from './views/accounts-list-view/accounts-list-view.component';

export const accountsJourneyRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: AccountsListViewComponent },
];
