// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  app: {
    head: {
      title: 'Serenade Sphere',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'find your artist best music' },
        { name: 'keywords', content: 'The Weeknd, kanye west, Future , sza , Lana Del Rey ' },
        { name: 'author', content: 'MR willson' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        // You can include global scripts here
      ]
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css:['~/assets/styles/main.scss'],

  modules: ['@nuxtjs/tailwindcss']
})
