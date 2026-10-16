import { ar } from "./dictionaries/ar";
import { en } from "./dictionaries/en";
import { fr } from "./dictionaries/fr";

export const locales = ["fr", "ar", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function dir(locale: Locale): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}

const dictionaries = { fr, ar, en };

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export const APP_URL = "https://app.clauze.tn";
export const SITE_URL = "https://clauze.tn";
export const CONTACT_EMAIL = "contact@clauze.tn";
export const LINKEDIN_URL = "https://www.linkedin.com/company/135804207/";

// The app's legal pages (CGAU, privacy policy) 404 until the backend publishes
// a terms version (clauze-backend ADR 0031). Flip this once they are live so
// the footer and sitemap link to them.
export const LEGAL_LIVE = false;
export const LEGAL_URLS = {
  terms: `${APP_URL}/legal/conditions-generales`,
  privacy: `${APP_URL}/legal/politique-confidentialite`,
} as const;
