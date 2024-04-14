import { Environment } from './type';

export const environment: Environment = {
  /**
   * Whether to run the app in production mode.
   * Default: true
   */
  production: true,

  /**
   * Whether to enable animation capabilities
   * Default: true
   */
  animation: true,

  googleApiKey: '${MAPS_API_KEY}',
  disputeTopicId: '',
  inquireTopicId: '',
  landingPageUrl: '/',
  apiRoot: '${API_ROOT::-1}',
  baseHref: '${BASE_HREF}',
  accountsUseArrangementViewsApi: String('${ACCOUNTS_USE_ARRANGEMENT_VIEWS_API}').toLowerCase() === 'true',
  rtcEnabled: String('${RTC_ENABLED}').toLowerCase() !== 'false',
};
