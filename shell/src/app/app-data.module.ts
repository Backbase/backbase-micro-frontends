/*
 *
 * The content of this file can be edited freely, but to maintain upgradability
 * this file should not be renamed and should always export an Angular module named
 * `AppDataModule`.
 *
 *
 */
import { NgModule } from '@angular/core';
import {
  AccessControlApiModule,
  AccessControlConfiguration,
} from '@backbase/accesscontrol-http-ang';
import {
  ArrangementManagerApiModule,
  ArrangementManagerConfiguration,
} from '@backbase/arrangement-manager-http-ang';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    AccessControlApiModule.forRoot(
      () =>
        new AccessControlConfiguration({
          basePath: `${environment.apiRoot}/access-control`,
        }),
    ),
    ArrangementManagerApiModule.forRoot(
      () =>
        new ArrangementManagerConfiguration({
          basePath: `${environment.apiRoot}/arrangement-manager`,
        }),
    ),
  ],
})
export class AppDataModule {}
