/*
 *
 * The content of this file can be edited freely, but to maintain upgradability
 * this file should not be renamed and should always export an Angular module named
 * `AppRoutingModule`.
 *
 *
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { SharedUserContextGuard } from './shared-user-context/shared-user-context.guard';
import { WrapperComponent } from './wrapper.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'accounts',
  },
  {
    path: 'select-context',
    loadChildren: () => import('./user-context/user-context.module').then((m) => m.UserContextModule),
    canActivate: [AuthGuard],
    data: {
      title: $localize`:@@context-selection.nav.item.title:Select Context`,
    },
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard, SharedUserContextGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'accounts',
      },
      /**
       * Accounts & Cards
       */
      {
        path: 'accounts',
        loadChildren: () =>
          import('./journeys/accounts-journey/accounts-journey.module').then((m) => m.AccountsJourneyModule),
        data: {
          title: $localize`:@@accounts.nav.item.title:Accounts`,
        },
      },
      {
        path: 'angular14/cards',
        component: WrapperComponent,
        data: {
          elementName: 'angular14-element',
          importName: 'angular14',
          title: $localize`:@@cards.nav.item.title:Cards`,
        },
      },
      {
        path: 'angular14/loans',
        component: WrapperComponent,
        data: {
          elementName: 'angular14-element',
          importName: 'angular14',
          title: $localize`:@@loans.nav.item.title:Loans`,
        },
      },
      {
        path: 'account-statements',
        children: [],
        data: {
          title: $localize`:@@account-statements.nav.item.title:Account Statements`,
        },
      },
      {
        path: 'transactions',
        children: [],
        data: {
          title: $localize`:@@transactions.nav.item.title:Transactions`,
        },
      },
      /**
       * Move Money
       */
      {
        path: 'transfers',
        children: [],
        data: {
          title: $localize`:@@transfers.nav.item.title:Transfers`,
        },
      },
      {
        path: 'batches',
        children: [],
        data: {
          title: $localize`:@@batches.nav.item.title:Batches`,
        },
      },
      {
        path: 'stop-check-payments',
        children: [],
        data: {
          title: $localize`:@@stop-check.nav.item.title:Stop check payments`,
        },
      },
      {
        path: 'templates',
        children: [],
        data: {
          title: $localize`:@@templates.nav.item.title:Templates`,
        },
      },
      {
        path: 'contacts',
        children: [],
        data: {
          title: $localize`:@@contacts.nav.item.title:Contacts`,
        },
      },
      /**
       * Finance Management
       */
      {
        path: 'cash-flow',
        children: [],
        data: {
          title: $localize`:@@cash-flow.nav.item.title:Cash Flow`,
        },
      },
      {
        path: 'sweeping',
        children: [],
        data: {
          title: $localize`:@@sweeping.nav.item.title:Sweeping`,
        },
      },
      {
        path: 'forex',
        children: [],
        data: {
          title: $localize`:@@forex.nav.item.title:Forex`,
        },
      },

      {
        path: 'trade-finance',
        children: [],
        data: {
          title: $localize`:@@trade-finance.nav.item.title:Trade Finance`,
        },
      },
      /**
       * Personal
       */
      {
        path: 'messages',
        children: [],
        data: {
          title: $localize`:@@messages.nav.item.title:Messages`,
        },
      },
      {
        path: 'my-profile',
        children: [],
        data: {
          title: $localize`:@@my-profile.nav.item.title:My profile`,
        },
      },
      {
        path: 'find-atm-branch',
        children: [],
        data: {
          title: $localize`:@@find-atm-branch.nav.item.title:Find ATM or Branch`,
        },
      },
      /**
       * Company Administration
       */
      {
        path: 'audit',
        children: [],
        data: {
          title: $localize`:@@audit.nav.item.title:Audit`,
        },
      },
      {
        path: 'company-permissions',
        children: [],
        data: {
          title: $localize`:@@company-permissions.nav.item.title:Company Permissions`,
        },
      },
      {
        path: 'service-agreements',
        children: [],
        data: {
          title: $localize`:@@service-agreements.nav.item.title:Service Agreements`,
        },
      },
      {
        path: 'legal-entities',
        children: [],
        data: {
          title: $localize`:@@legal-entities.nav.item.title:Legal Entities`,
        },
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'accounts',
  },
];

@NgModule({
  declarations: [WrapperComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
