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
