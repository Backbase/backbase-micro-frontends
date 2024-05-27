export interface Environment {
  production: boolean;
  animation: boolean;
  googleApiKey: string;
  landingPageUrl: string;
  baseHref: string;
  apiRoot: string;
  localize?: boolean;
  mocksEnabled?: boolean;
}
