import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

export interface Scheme {
  [key: string]: string;
}

export const UNKNOWN_SCHEME = 'unknown';

/**
 * See https://datatracker.ietf.org/doc/html/rfc6750#section-3
 * See https://www.rfc-editor.org/rfc/rfc7235.html#section-4.1
 * See https://www.w3.org/Protocols/rfc2616/rfc2616-sec2.html
 * See https://datatracker.ietf.org/doc/html/rfc2617#section-3.2.1
 */
export function getWwwAuthenticate(headers: HttpHeaders): { [schemeName: string]: Scheme } {
  let currentScheme = UNKNOWN_SCHEME;
  const schemes = { [currentScheme]: {} };
  const headerName = headers.keys().find((key) => key.toLowerCase() === 'www-authenticate');
  if (!headerName) {
    return schemes;
  }
  const value = (headers.get(headerName) as string).toLowerCase().trim();
  if (!value) {
    return schemes;
  }
  const matches = value.match(/(?:[^\s,"]+|"[^"]*")+/g);
  if (!matches) {
    schemes[currentScheme] = value;
    return schemes;
  }
  return matches.reduce((acc: { [schemeName: string]: Scheme }, match: string) => {
    const nameVal = match.split('=').map((v) => v.trim());
    if (nameVal.length === 1) {
      currentScheme = nameVal[0];
      acc[currentScheme] = {};
    } else if (nameVal.length === 2) {
      acc[currentScheme][nameVal[0]] = nameVal[1].replace(/"/g, '');
    }
    return acc;
  }, schemes);
}

/**
 * The 401 (Unauthorized) status code indicates that the request has not
 * been applied because it lacks valid authentication credentials for
 * the target resource.  The server generating a 401 response MUST send
 * a WWW-Authenticate header field (Section 4.1) containing at least one
 * challenge applicable to the target resource.
 */
export function isInvalidToken401(error: HttpErrorResponse): boolean {
  if (error.status !== 401) {
    return false;
  }
  const bearer = getWwwAuthenticate(error.headers).bearer;
  if (!bearer) {
    return false;
  }
  if (bearer.challenge_types && bearer.challenge_types === 'reauth') {
    return false;
  }
  return bearer.error === 'invalid_token';
}

export function parseJwt(token: string): { locale: string } | undefined {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
  } catch (e) {
    return undefined;
  }
}
