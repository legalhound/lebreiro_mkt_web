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
  ], 'nuxt-mail', 'usebootstrap'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['bootstrap/dist/css/bootstrap.min.css', '@/assets/styles.scss'],
  app: {
    head: {
    title: "Lebreiro",
    script: [
          {src: 'https://unpkg.com/aos@next/dist/aos.js', defer: true },
          {src: 'https://kit.fontawesome.com/b1efa2e87a.js', crossorigin:'anonymous'}
    ],
    link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ]
    }
  }
})