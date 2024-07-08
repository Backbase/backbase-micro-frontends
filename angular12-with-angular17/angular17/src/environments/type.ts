export interface Environment {
  production: boolean;
  animation: boolean;
  /**
   * The header name for `AppVersionInterceptor` interceptor from `@backbase/foundation-ang`.
   * For each request, the header with this name will be appended with the value of the current app version.
   * The version is imported from `version.json` file
   */
  versionHeaderName: string;
  googleApiKey: string;
  /**
   * @redundant
   * @deprecated This property is no longer used in the application
   * You can modify it directly in these files:
   * - src/app/journeys/accounts-journey-bundle.module.ts
   * - src/app/journeys/transactions-journey-bundle.module.ts
   */
  disputeTopicId?: string;
  /**
   * @redundant
   * @deprecated This property is no longer used in the application
   * You can modify it directly in these files:
   * - src/app/journeys/accounts-journey-bundle.module.ts
   * - src/app/journeys/transactions-journey-bundle.module.ts
   */
  inquireTopicId?: string;
  landingPageUrl: string;
  baseHref: string;
  apiRoot: string;
  localize?: boolean;
  calendarVersion?: string;
  appVersion?: string;
  accountsUseArrangementViewsApi?: boolean;
  mocksEnabled?: boolean;
  rtcEnabled: boolean;
  changeUsernameEnabled: boolean;

  /**
   * @deprecated This property will no longer be required once the legacy version of Transaction Signing is removed.
   * Enables the newer version of Transaction Signing as a Backbase ModelBank-environment-specific feature.
   */
  useTransactionSigningV2?: boolean;
  /**
   * Enables Cards Management journey to have ModelBank-environment-specific configurations that are not available OOTB otherwise.
   * This will enable the new card products to have formatted title and description in the UI.
   */
  cardProductsModelBankConfigurations?: boolean;
}
