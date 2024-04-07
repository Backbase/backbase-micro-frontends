// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from './type';

export const environment: Environment = {
  /**
   * Whether to run the app in production mode.
   * Default: false
   */
  production: false,

  /**
   * Whether to enable animation capabilities
   * Default: true
   */
  animation: false,

  googleApiKey: '${MAPS_API_KEY}',
  disputeTopicId: '',
  inquireTopicId: '',
  landingPageUrl: '/',
  apiRoot: '/api',
  baseHref: '/',
  accountsUseArrangementViewsApi: false,
  rtcEnabled: true,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
