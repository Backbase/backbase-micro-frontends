import { AuthConfig } from 'angular-oauth2-oidc';
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

  googleApiKey: '${FE_MAPS_API_KEY}',
  disputeTopicId: '',
  inquireTopicId: '',
  landingPageUrl: '/',
  apiRoot: '${API_ROOT::-1}',
  baseHref: '${BASE_HREF}',
  accountsUseArrangementViewsApi: String('${ACCOUNTS_USE_ARRANGEMENT_VIEWS_API}').toLowerCase() === 'true',
  rtcEnabled: String('${RTC_ENABLED}').toLowerCase() !== 'false',
  changeUsernameEnabled: String('${CHANGE_USERNAME_ENABLED}').toLowerCase() === 'true',
  versionHeaderName: 'X-App-Version',
  useTransactionSigningV2: String('${USE_TRANSACTION_SIGNING_V2}').toLowerCase() === 'true',
  cardProductsModelBankConfigurations: String('${ORDER_NEW_CARD_MODEL_BANK_CONFIGURATION}').toLowerCase() === 'true',
};

export const authConfig: (baseUrl: string) => AuthConfig = (locale = '') => ({
  // Url of the Identity Provider
  issuer: '${AUTH_URL}realms/${AUTH_REALM}',

  // URL of the SPA to redirect the user to after login
  redirectUri: document.location.origin + '${BASE_HREF}' + locale + '/select-context',

  // The SPA's id. The SPA is registered with this id at the auth-server
  clientId: '${AUTH_CLIENT_ID}',

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications. (IE: does not support PKCE)
  // dummyClientSecret: 'secret',

  responseType: 'code',

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  scope: '${AUTH_SCOPE}',

  requireHttps: false,
  showDebugInformation: true,
  logoutUrl: window.location.origin + '${BASE_HREF}' + locale + '/logout',
});
