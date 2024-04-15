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

  googleApiKey: '',
  landingPageUrl: '/',
  apiRoot: '${API_ROOT::-1}',
  baseHref: '${BASE_HREF}',
};
