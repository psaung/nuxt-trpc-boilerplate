import { createI18n } from 'vue-i18n';
import en from '~/src/locale/en/index.json';
import mm from '~/src/locale/mm/index.json';

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en,
      mm,
    },
  });

  vueApp.use(i18n);
});
