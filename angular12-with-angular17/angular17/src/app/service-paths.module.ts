import { InjectionToken, NgModule } from '@angular/core';
import { environment } from '../environments/environment';

export const APP_AUDIT_BASE_PATH = new InjectionToken<string>('ServicePathsModule::APP_AUDIT_BASE_PATH');
export const APP_ACCESS_CONTROL_BASE_PATH = new InjectionToken<string>(
  'ServicePathsModule::APP_ACCESS_CONTROL_BASE_PATH',
);
export const APP_ACCOUNT_STATEMENT_BASE_PATH = new InjectionToken<string>(
  'ServicePathsModule::APP_ACCOUNT_STATEMENT_BASE_PATH',
);
export const APP_NOTIFICATIONS_BASE_PATH = new InjectionToken<string>(
  'ServicePathsModule::APP_NOTIFICATIONS_BASE_PATH',
);
export const APP_APPROVAL_BASE_PATH = new InjectionToken<string>('ServicePathsModule::APP_APPROVAL_BASE_PATH');
export const APP_ARRANGEMENT_MANAGER_BASE_PATH = new InjectionToken<string>(
  'ServicePathsModule::APP_ARRANGEMENT_MANAGER_BASE_PATH',
);
export const APP_TRANSACTIONS_BASE_PATH = new InjectionToken<string>('ServicePathsModule::APP_TRANSACTIONS_BASE_PATH');
export const APP_CATEGORIES_MANAGEMENT_BASE_PATH = new InjectionToken<string>(
  'ServicePathsModule::APP_CATEGORIES_MANAGEMENT_BASE_PATH',
);
/**
 * App Batches/Batch templates base paths
 */
export const APP_BATCH_PAYMENT_BATCH_BASE_PATH = new InjectionToken<string>(
  'ServicePathsModule::APP_BATCH_PAYMENT_BATCH_BASE_PATH',
);
export const APP_BATCH_PAYMENT_BATCH_UPLOAD_MAPPING_BASE_PATH = new InjectionToken<string>(
  'ServicePathsModule::APP_BATCH_PAYMENT_BATCH_UPLOAD_MAPPING_BASE_PATH',
);
export const APP_BATCH_PAYMENT_BATCH_TEMPLATE_BASE_PATH = new InjectionToken<string>(
  'ServicePathsModule::APP_BATCH_PAYMENT_BATCH_TEMPLATE_BASE_PATH',
);
export const APP_BATCH_PAYMENT_MANAGER_BASE_PATH = new InjectionToken<string>(
  'ServicePathsModule::APP_BATCH_PAYMENT_MANAGER_BASE_PATH',
);
// Messages base path token
export const APP_MESSAGES_BASE_PATH = new InjectionToken<string>('ServicePathsModule::APP_MESSAGES_BASE_PATH');

export const APP_ENGAGEMENT_BASE_PATH = new InjectionToken<string>('ServicePathsModule::APP_ENGAGEMENT_BASE_PATH');

export const APP_METRIC_BASE_PATH = new InjectionToken<string>('ServicePathsModule::APP_METRIC_BASE_PATH');

export const APP_PLACES_BASE_PATH = new InjectionToken<string>('ServicePathsModule::APP_PLACES_BASE_PATH');

/**
 * App Payments base paths
 */
export const APP_PAYMENT_ORDER_BASE_PATH = new InjectionToken<string>(
  'ServicePathsModule::APP_PAYMENT_ORDER_BASE_PATH',
);
export const APP_STOP_CHECKS_BASE_PATH = new InjectionToken<string>('ServicePathsModule::APP_STOP_CHECKS_BASE_PATH');
export const APP_CONTACT_MANAGER_BASE_PATH = new InjectionToken<string>(
  'ServicePathsModule::APP_CONTACT_MANAGER_BASE_PATH',
);
export const APP_PAYMENT_ORDER_A2A_BASE_PATH = new InjectionToken<string>(
  'ServicePathsModule::APP_PAYMENT_ORDER_A2A_BASE_PATH',
);
export const APP_PAYMENT_ORDER_OPTIONS_BASE_PATH = new InjectionToken<string>(
  'ServicePathsModule::APP_PAYMENT_ORDER_OPTIONS_BASE_PATH',
);
/**
 * External Accounts base paths
 */
export const APP_FINANCIAL_INSTITUTION_MANAGER_BASE_PATH = new InjectionToken<string>(
  'ServicePathsModule::APP_FINANCIAL_INSTITUTION_MANAGER_BASE_PATH',
);

export const APP_LOANS_JOURNEY_BASE_PATH = new InjectionToken<string>('ServicePathsModule::APP_LOANS_BASE_PATH');
export const APP_CARDS_BASE_PATH = new InjectionToken<string>('ServicePathsModule::APP_CARDS_BASE_PATH');
export const APP_LIMIT_BASE_PATH = new InjectionToken<string>('ServicePathsModule::APP_LIMIT_BASE_PATH');
export const APP_USER_BASE_PATH = new InjectionToken<string>('ServicePathsModule::APP_USER_BASE_PATH');
export const APP_DEVICE_BASE_PATH = new InjectionToken<string>('ServicePathsModule::APP_DEVICE_BASE_PATH');
export const APP_DEVICE_MANAGEMENT_V2_BASE_PATH = new InjectionToken<string>(
  'ServicePathsModule::APP_DEVICE_MANAGEMENT_V2_BASE_PATH',
);
export const APP_ADDRESS_AUTOCOMPLETE_BASE_PATH = new InjectionToken<string>(
  'ServicePathsModule::APP_ADDRESS_AUTOCOMPLETE_BASE_PATH',
);
export const APP_DASHBOARD_BASE_PATH = new InjectionToken<string>('ServicePathsModule::APP_DASHBOARD_BASE_PATH');

@NgModule({
  providers: [
    {
      provide: APP_FINANCIAL_INSTITUTION_MANAGER_BASE_PATH,
      useValue: `${environment.apiRoot}/financial-institution-manager`,
    },
    {
      provide: APP_CATEGORIES_MANAGEMENT_BASE_PATH,
      useValue: `${environment.apiRoot}/transaction-category-collectorr`,
    },
    {
      provide: APP_ACCESS_CONTROL_BASE_PATH,
      useValue: `${environment.apiRoot}/access-control`,
    },
    {
      provide: APP_ACCOUNT_STATEMENT_BASE_PATH,
      useValue: `${environment.apiRoot}/account-statement`,
    },
    {
      provide: APP_AUDIT_BASE_PATH,
      useValue: `${environment.apiRoot}/audit-service`,
    },
    {
      provide: APP_NOTIFICATIONS_BASE_PATH,
      useValue: `${environment.apiRoot}/notifications-service`,
    },
    {
      provide: APP_APPROVAL_BASE_PATH,
      useValue: `${environment.apiRoot}/approval-service`,
    },
    {
      provide: APP_ARRANGEMENT_MANAGER_BASE_PATH,
      useValue: `${environment.apiRoot}/arrangement-manager`,
    },
    {
      provide: APP_TRANSACTIONS_BASE_PATH,
      useValue: `${environment.apiRoot}/transaction-manager`,
    },
    // Batches
    {
      provide: APP_BATCH_PAYMENT_BATCH_BASE_PATH,
      useValue: `${environment.apiRoot}/payment-batch`,
    },
    {
      provide: APP_BATCH_PAYMENT_BATCH_UPLOAD_MAPPING_BASE_PATH,
      useValue: `${environment.apiRoot}/payment-batch`,
    },
    {
      provide: APP_BATCH_PAYMENT_BATCH_TEMPLATE_BASE_PATH,
      useValue: `${environment.apiRoot}/payment-batch`,
    },
    {
      provide: APP_BATCH_PAYMENT_MANAGER_BASE_PATH,
      useValue: `${environment.apiRoot}/batch-manager`,
    },
    {
      provide: APP_MESSAGES_BASE_PATH,
      useValue: `${environment.apiRoot}/messages-service`,
    },
    {
      provide: APP_ENGAGEMENT_BASE_PATH,
      useValue: `${environment.apiRoot}/engagement`,
    },
    {
      provide: APP_METRIC_BASE_PATH,
      useValue: `${environment.apiRoot}/metric`,
    },
    {
      provide: APP_PLACES_BASE_PATH,
      useValue: `${environment.apiRoot}/places-presentation-service`,
    },
    // Payments
    {
      provide: APP_PAYMENT_ORDER_BASE_PATH,
      useValue: `${environment.apiRoot}/payment-order-service`,
    },
    {
      provide: APP_STOP_CHECKS_BASE_PATH,
      useValue: `${environment.apiRoot}/stop-checks`,
    },
    {
      provide: APP_CONTACT_MANAGER_BASE_PATH,
      useValue: `${environment.apiRoot}/contact-manager`,
    },
    {
      provide: APP_PAYMENT_ORDER_A2A_BASE_PATH,
      useValue: `${environment.apiRoot}/payment-order-a2a`,
    },
    {
      provide: APP_PAYMENT_ORDER_OPTIONS_BASE_PATH,
      useValue: `${environment.apiRoot}/payment-order-options`,
    },
    // Loans
    {
      provide: APP_LOANS_JOURNEY_BASE_PATH,
      useValue: `${environment.apiRoot}/loan`,
    },
    //Cards
    {
      provide: APP_CARDS_BASE_PATH,
      useValue: `${environment.apiRoot}/cards-presentation-service`,
    },
    {
      provide: APP_LIMIT_BASE_PATH,
      useValue: `${environment.apiRoot}/limit`,
    },
    {
      provide: APP_USER_BASE_PATH,
      useValue: `${environment.apiRoot}/user-manager`,
    },
    {
      provide: APP_DEVICE_BASE_PATH,
      useValue: `${environment.apiRoot}/device-management-service`,
    },
    {
      provide: APP_DEVICE_MANAGEMENT_V2_BASE_PATH,
      useValue: `${environment.apiRoot}/device-management-service`,
    },
    {
      provide: APP_ADDRESS_AUTOCOMPLETE_BASE_PATH,
      useValue: `${environment.apiRoot}/address-autocomplete`,
    },
    {
      provide: APP_DASHBOARD_BASE_PATH,
      useValue: `${environment.apiRoot}/dashboard`,
    },
  ],
})
export class ServicePathsModule {}
