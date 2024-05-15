import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from '../public/locales/en/common.json';
import caTranslations from '../public/locales/ca/common.json';
import esTranslations from '../public/locales/es/common.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    ca: {
      translation: caTranslations,
    },
    es: {
      translation: esTranslations,
    },
  },
  lng: 'es', // default language
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
