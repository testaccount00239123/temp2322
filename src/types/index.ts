export type Language = 'en' | 'fr';

export interface TranslatedText {
  en: string;
  fr: string;
}

export interface NavItem {
  label: TranslatedText;
  href: string;
}