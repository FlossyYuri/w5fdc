import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['pt'], // Add other supported languages here
  localeSubpaths: {
    en: 'en',
    pt: 'pt',
  },
});

export const { appWithTranslation, useTranslation, Trans, Link, Router, i18n } =
  NextI18NextInstance;

export default NextI18NextInstance;
