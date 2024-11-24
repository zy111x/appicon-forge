import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { en } from './en'

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en,
  },

  interpolation: {
    escapeValue: false,
  },
})
