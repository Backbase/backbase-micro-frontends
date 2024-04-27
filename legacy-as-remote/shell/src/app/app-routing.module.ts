/*
 *
 * The content of this file can be edited freely, but to maintain upgradability
 * this file should not be renamed and should always export an Angular module named
 * `AppRoutingModule`.
 *
 *
 */
import {
  startsWith,
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { SharedUserContextGuard } from './shared-user-context/shared-user-context.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'select-context',
    loadChildren: () => import('./user-context/user-context.module').then((m) => m.UserContextModule),
    data: {
      title: $localize`:@@context-selection.nav.item.title:Select Context`,
    },
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        matcher: startsWith('angular12'),
        component: WebComponentWrapper,
        data: {
          elementName: 'angular12-element',
          exposedModule: './web-components',
          remoteEntry: 'http://localhost:4202/remoteEntry.js',
          remoteName: 'angular12',
          type: 'script',
        } as WebComponentWrapperOptions,
      },
      /**
       * Dashboard
       */
      {
        path: 'dashboard',
        children: [],
        data: {
          title: $localize`:@@dashboard.nav.item.title:Dashboard`,
        },
      },
      /**
       * Accounts & Cards
       */
      {
        path: 'cards',
        loadChildren: () =>
          import('./journeys/cards-management-journey-bundle.module').then((m) => m.CardsManagementJourneyBundleModule),
        data: {
          title: $localize`:@@cards.nav.item.title:Cards`,
        },
      },
      {
        path: 'loans',
        loadChildren: () => import('./journeys/loans-journey-bundle.module').then((m) => m.LoansJourneyBundleModule),
        data: {
          title: $localize`:@@loans.nav.item.title:Loans`,
        },
      },
      {
        path: 'manage-statements',
        children: [],
        data: {
          title: $localize`:@@manage-statements.nav.item.title:Manage Statements`,
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
      {
        path: 'global-restrictions',
        children: [],
        data: {
          title: $localize`:@@global-restrictions.nav.item.title:Global Restrictions`,
        },
      },
    ],
    canActivate: [AuthGuard, SharedUserContextGuard],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
