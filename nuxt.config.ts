// https://nuxt.com/docs/api/configuration/nuxt-config

const ONE_DAY = 60 * 60 * 24 * 1000;
const ONE_WEEK = ONE_DAY * 7;

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Nuxt Boilerplate',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt Boilerplate',
        },
      ],
    },
  },
  plugins: [
    '~/plugins/vue-i18n',
    '~/plugins/trpc',
    '~/plugins/vue-store',
    '~/plugins/auth',
  ],
  build: {
    transpile: ['trpc-nuxt'],
  },
  runtimeConfig: {
    public: {},
    cookieName: process.env.COOKIE_NAME || '__session',
    cookieSecret: process.env.COOKIE_SECRET || 'secret',
    cookieExpires: parseInt(
      process.env.COOKIE_EXPIRE_TIME || ONE_DAY.toString(),
      10
    ),
    cookieRememberMeExpires: parseInt(
      process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_WEEK.toString(),
      10
    ),
  },
});
