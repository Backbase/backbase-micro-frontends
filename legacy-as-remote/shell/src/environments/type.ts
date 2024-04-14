export interface Environment {
  production: boolean;
  animation: boolean;
  googleApiKey: string;
  disputeTopicId: string;
  inquireTopicId: string;
  landingPageUrl: string;
  baseHref: string;
  apiRoot: string;
  localize?: boolean;
  calendarVersion?: string;
  appVersion?: string;
  accountsUseArrangementViewsApi?: boolean;
  mocksEnabled?: boolean;
  rtcEnabled: boolean;
}
