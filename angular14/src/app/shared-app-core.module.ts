import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  ENTITLEMENTS_CONFIG,
  EntitlementsModule,
} from '@backbase/foundation-ang/entitlements';
import {
  PubSubService,
  SetLocaleService,
} from '@backbase/foundation-ang/web-sdk';

export type CommonConfig = {
  production: boolean;
  apiRoot: string;
  baseHref: string;
  localize?: boolean;
  disableEntitlements?: boolean;
  appVersion?: string;
  calendarVersion?: string;
};

@NgModule({
  imports: [EntitlementsModule],
  providers: [PubSubService, SetLocaleService],
})
export class SharedAppCoreModule {
  static forRoot(
    config: CommonConfig,
  ): ModuleWithProviders<SharedAppCoreModule> {
    return {
      ngModule: SharedAppCoreModule,
      providers: [
        {
          provide: ENTITLEMENTS_CONFIG,
          useValue: {
            forceResolved: !!config.disableEntitlements,
            accessControlBasePath: `${config.apiRoot}/access-control`,
          },
        },
      ],
    };
  }
}
