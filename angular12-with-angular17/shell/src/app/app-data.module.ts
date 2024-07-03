/*
 *
 * The content of this file can be edited freely, but to maintain upgradability
 * this file should not be renamed and should always export an Angular module named
 * `AppDataModule`.
 *
 *
 */
import { InjectionToken, NgModule } from '@angular/core';
import { ACCESS_CONTROL_BASE_PATH } from '@backbase/data-ang/accesscontrol';
import { ACCOUNT_STATEMENT_BASE_PATH } from '@backbase/data-ang/account-statements';
import { ACTIONS_BASE_PATH } from '@backbase/data-ang/actions';
import { APPROVAL_BASE_PATH } from '@backbase/data-ang/approvals';
import { ARRANGEMENT_MANAGER_BASE_PATH } from '@backbase/data-ang/arrangements';
import { CARDS_BASE_PATH } from '@backbase/data-ang/cards';
import { CASH_FLOW_BASE_PATH } from '@backbase/data-ang/cash-flow';
import { CASH_MANAGEMENT_BASE_PATH } from '@backbase/data-ang/cash-management';
import { CONTACT_MANAGER_BASE_PATH } from '@backbase/data-ang/contact-manager';
import { DEVICE_BASE_PATH } from '@backbase/data-ang/device';
import { LIMIT_BASE_PATH } from '@backbase/data-ang/limits';
import { NOTIFICATIONS_BASE_PATH } from '@backbase/data-ang/notifications';
import { PAYMENT_BATCH_BASE_PATH } from '@backbase/data-ang/payment-batch';
import { PAYMENT_ORDER_BASE_PATH } from '@backbase/data-ang/payment-order';
import { PAYMENT_ORDER_A2A_BASE_PATH } from '@backbase/data-ang/payment-order-a2a';
import { PAYMENT_ORDER_OPTIONS_BASE_PATH } from '@backbase/data-ang/payment-order-options';
import { PAYMENT_TEMPLATE_BASE_PATH } from '@backbase/data-ang/payment-template';
import { PLACES_BASE_PATH } from '@backbase/data-ang/places';
import { STOP_CHECKS_BASE_PATH } from '@backbase/data-ang/stop-checks';
import { FOREX_BASE_PATH } from '@backbase/data-ang/trading-fx';
import { TRANSACTIONS_BASE_PATH } from '@backbase/data-ang/transactions';
import { USER_BASE_PATH } from '@backbase/data-ang/user';
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
  [ACCOUNT_STATEMENT_BASE_PATH, '/account-statement'],
  [ACTIONS_BASE_PATH, '/action'],
  [APPROVAL_BASE_PATH, '/approval-service'],
  [ARRANGEMENT_MANAGER_BASE_PATH, '/arrangement-manager'],
  [CARDS_BASE_PATH, '/cards-presentation-service'],
  [CASH_FLOW_BASE_PATH, '/cashflow-service'],
  [CASH_MANAGEMENT_BASE_PATH, '/cash-management-presentation-service'],
  [CONTACT_MANAGER_BASE_PATH, '/contact-manager'],
  [DEVICE_BASE_PATH, '/device-management-service'],
  [FOREX_BASE_PATH, '/tradingfx-presentation-service'],
  [LIMIT_BASE_PATH, '/limit'],
  [NOTIFICATIONS_BASE_PATH, '/notifications-service'],
  [PAYMENT_BATCH_BASE_PATH, '/payment-batch'],
  [PAYMENT_ORDER_A2A_BASE_PATH, '/payment-order-a2a'],
  [PAYMENT_ORDER_BASE_PATH, '/payment-order-service'],
  [PAYMENT_ORDER_OPTIONS_BASE_PATH, '/payment-order-options'],
  [PAYMENT_TEMPLATE_BASE_PATH, '/payment-order-service'],
  [PLACES_BASE_PATH, '/places-presentation-service'],
  [STOP_CHECKS_BASE_PATH, '/stop-checks'],
  [TRANSACTIONS_BASE_PATH, '/transaction-manager'],
  [USER_BASE_PATH, '/user-manager'],
];

@NgModule({
  providers: [
    ...dataModulePaths.map(([token, servicePath]) => ({
      provide: token,
      useValue: `${environment.apiRoot}${servicePath}`,
    })),
  ],
})
export class AppDataModule {}
