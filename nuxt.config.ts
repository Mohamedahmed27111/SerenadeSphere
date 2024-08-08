// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css:['~/assets/styles/main.scss'],

  modules: ['@nuxtjs/tailwindcss']
})
