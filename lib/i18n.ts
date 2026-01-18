import en from "@/lib/i18n/en.json";
import uk from "@/lib/i18n/uk.json";

export const translations = { en, uk } as const;

export type Locale = keyof typeof translations;

export function getTranslations(locale: Locale) {
  return translations[locale] ?? translations.en;
}
