export type ConsentValue = "accepted" | "declined" | undefined;

const CONSENT_COOKIE = "cookie_consent";
const PREFS_COOKIE = "cookie_prefs";

function readCookieFromString(name: string, cookieHeader: string): string | undefined {
  const nameEq = name + "=";
  const parts = cookieHeader.split(";");
  for (let i = 0; i < parts.length; i++) {
    let c = parts[i];
    while (c.charAt(0) === " ") c = c.substring(1);
    if (c.indexOf(nameEq) === 0) return decodeURIComponent(c.substring(nameEq.length));
  }
  return undefined;
}

export function getConsent(cookieHeader?: string): ConsentValue {
  const src = typeof document !== "undefined" && !cookieHeader ? document.cookie : (cookieHeader ?? "");
  const v = src ? readCookieFromString(CONSENT_COOKIE, src) : undefined;
  if (v === "accepted" || v === "declined") return v;
  return undefined;
}

export function getPrefs<T = { analytics?: boolean }>(cookieHeader?: string): T | undefined {
  const src = typeof document !== "undefined" && !cookieHeader ? document.cookie : (cookieHeader ?? "");
  const raw = src ? readCookieFromString(PREFS_COOKIE, src) : undefined;
  if (!raw) return undefined;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return undefined;
  }
}

export function shouldEnableAnalytics(cookieHeader?: string): boolean {
  const consent = getConsent(cookieHeader);
  if (consent !== "accepted") return false;
  const prefs = getPrefs<{ analytics?: boolean }>(cookieHeader);
  return !!prefs?.analytics;
}

export const CookieEvent = {
  Change: "cookie-consent:change",
};

export type CookieChangeDetail = {
  consent?: ConsentValue;
  prefs?: { analytics?: boolean };
};

export function emitCookieChange(detail: CookieChangeDetail) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(CookieEvent.Change, { detail }));
}

