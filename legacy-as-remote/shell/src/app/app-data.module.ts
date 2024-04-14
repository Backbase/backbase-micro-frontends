/*
 *
 * The content of this file can be edited freely, but to maintain upgradability
 * this file should not be renamed and should always export an Angular module named
 * `AppDataModule`.
 *
 *
 */
import { InjectionToken, NgModule } from '@angular/core';
import { ACCESS_CONTROL_BASE_PATH } from '@backbase/accesscontrol-http-ang';
import { ACCESS_CONTROL_BASE_PATH as ACCESS_CONTROL_V3_BASE_PATH } from '@backbase/accesscontrol-v3-http-ang';
import { CARDS_MANAGEMENT_JOURNEY_CARDS_BASE_PATH } from '@backbase/cards-management-journey-ang';
import {
  IMPERSONATION_SERVICE_BASE_PATH,
  IMPERSONATION_USER_MANAGER_SERVICE_BASE_PATH,
} from '@backbase/identity-auth/impersonation';
import { USER_BASE_PATH } from '@backbase/user-http-ang';

import { environment } from '../environments/environment';

/**
 * Service paths for the individual data modules.
 *
 * The values provided here are mapped to FactoryProviders in the AppDataModules
 * module below, using the servicePathFactory function above to create the
 * factory for each injection token.
 *
 * If for some reason you do not want to use the servicePathFactory to provide
 * the base path for a service, remove it from this array and add a separate
 * provider for it to the AppDataModules module, below.
 *
 * The entries in this array may be edited, added or removed as required, but
 * deleting or renaming the array itself may prevent future upgrades being
 * correctly applied.
 */
const dataModulePaths: [InjectionToken<string>, string][] = [
  [ACCESS_CONTROL_BASE_PATH, '/access-control'],
  [ACCESS_CONTROL_V3_BASE_PATH, '/access-control'],
  [CARDS_MANAGEMENT_JOURNEY_CARDS_BASE_PATH, '/cards-presentation-service'],
  [IMPERSONATION_SERVICE_BASE_PATH, '/orchestration'],
  [IMPERSONATION_USER_MANAGER_SERVICE_BASE_PATH, '/user-manager'],
  [USER_BASE_PATH, '/user-manager'],
];

/**
 * This module is added to the `imports` array of the AppModule in app.module.ts.
 *
 * Service configuration may be customised by modifying the relevant
 * `*_BASE_PATH` provider token value or by adding a `ModuleWithProvider`
 * as an import to this module by calling `.forRoot` on an API module:
 *
 * ```
 * @NgModule({
 *   providers: [...],
 *   imports: [
 *     AuditApiModule.forRoot(() => new AuditConfiguration({ ... }))
 *   ]
 * })
 * export class AppDataModules {}
 * ```
 */
@NgModule({
  providers: [
    ...dataModulePaths.map(([token, servicePath]) => ({
      provide: token,
      useValue: `${environment.apiRoot}${servicePath}`,
    })),
  ],
})
export class AppDataModule {}
