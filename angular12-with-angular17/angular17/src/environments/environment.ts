// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
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

  googleApiKey: '${FE_MAPS_API_KEY}',
  disputeTopicId: '',
  inquireTopicId: '',
  landingPageUrl: '/',
  apiRoot: '/api',
  baseHref: '/',
  accountsUseArrangementViewsApi: false,
  rtcEnabled: true,
  changeUsernameEnabled: true,
  versionHeaderName: 'X-App-Version',
};
