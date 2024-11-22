import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Detects browser language

import enTranslation from './locales/en.json';
import arTranslation from './locales/ar.json';

i18n
  .use(LanguageDetector) // Automatically detect user language
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ar: {
        translation: arTranslation,
      },
    },
    fallbackLng: 'en', // Default language
    debug: true, // For development, you can disable it later
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react:{
      useSuspense:false
    }
  });

export default i18n;
