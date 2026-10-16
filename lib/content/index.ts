import type { Locale } from "../i18n";
import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";

const content = { fr, ar, en };

export function getContent(locale: Locale) {
  return content[locale];
}
