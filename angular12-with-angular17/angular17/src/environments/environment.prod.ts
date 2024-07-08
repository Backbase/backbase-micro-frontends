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
