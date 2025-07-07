// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [[
    'nuxt-mail',
    {
      message: {
        to: ['vicente.cuellar@crisalidalabs.com','manuel.barbosa@crisalidalabs.com']
      },
      smtp: {
        host: 'smtp.postmarkapp.com',
        port: 587,
        auth: {
          user: process.env.NUXT_POSTMARK_TOKEN,
          pass: process.env.NUXT_POSTMARK_TOKEN,
        },
      },
    },
  ], 'nuxt-mail', 'usebootstrap', '@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'es',
    locales: [  
      { code: 'es', name: 'Español', file: 'es.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    
    ]
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['bootstrap/dist/css/bootstrap.min.css', '@/assets/styles.scss'],
  app: {
    head: {
    title: "Lebreiro",
    script: [
          {src: 'https://kit.fontawesome.com/b1efa2e87a.js', crossorigin:'anonymous'}
    ],
    link: [
  
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ]
    }
  }
})