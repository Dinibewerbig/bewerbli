export const mode = 'spa'
export const head = {
  title: 'Bewerbli, Bewerbungsbriefe für Jugendliche',
  script: [
    { src: 'https://js.stripe.com/v3/' },
    { src: 'https://smtpjs.com/v3/smtp.js', defer: true }
  ],
  meta: [
    {
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid:
        'Bewerbungsbriefe, Lebensläufe, Deckblätter für die Lehrstellensuche',
      name: 'Bewerbli',
      content: 'Bewerbli'
    }
  ],
  render: {
    resourceHints: false
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },
    {
      rel: 'stylesheet',
      href:
        'https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,600,700,800,900'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Hind:300,400,500,600,700'
    },
    {
      rel: 'stylesheet',
      href:
        'https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900'
    },
    {
      rel: 'stylesheet',
      href:
        'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800 '
    },
    {
      rel: 'stylesheet',
      href:
        'https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700,800,900'
    },
    {
      rel: 'stylesheet',
      href:
        'https://fonts.googleapis.com/css?family=Lato:100,200,300,400,700,900'
    },
    {
      rel: 'stylesheet',
      href:
        'https://fonts.googleapis.com/css?family=Muli:200,300,400,600,700,800,900'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i'
    },
    {
      rel: 'stylesheet',
      href:
        'https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900 '
    }
  ]
}
export const loading = {
  color: 'red'
}
export const css = [
  '~/assets/css/tailwind.css',
  '~/assets/css/app.styl',
  '~/assets/css/editor.css'
  // '~/node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css',
  // '~/node_modules/@syncfusion/ej2-base/styles/material.css',
  // '~/node_modules/@syncfusion/ej2-buttons/styles/material.css',
  // '~/node_modules/@syncfusion/ej2-dropdowns/styles/material.css',
  // '~/node_modules/@syncfusion/ej2-inputs/styles/material.css',
  // '~/node_modules/@syncfusion/ej2-navigations/styles/material.css',
  // '~/node_modules/@syncfusion/ej2-popups/styles/material.css',
  // '~/node_modules/@syncfusion/ej2-splitbuttons/styles/material.css'
  // '~/node_modules/@syncfusion/ej2-vue-pdfviewer/styles/material.css',
  // '~/node_modules/@syncfusion/ej2-vue-calendars/styles/material.css',
  // '~/node_modules/@syncfusion/ej2-vue-gantt/styles/material.css',
  // '~/node_modules/@syncfusion/ej2-grids/styles/material.css',
  // '~/node_modules/@syncfusion/ej2-layouts/styles/material.css',
  // '~/node_modules/@syncfusion/ej2-lists/styles/material.css'
]
export const plugins = [
  {
    src: '~/plugins/fireauth.js',
    ssr: false
  },
  { src: '~/node_modules/vue-rellax/lib/nuxt-plugin', ssr: false },
  { src: '~/plugins/vue-js-modal', ssr: false },
  { src: '~/plugins/vue-inview', ssr: false },
  { src: '~/plugins/vue-scroll-reveal', ssr: false },
  { src: '~/plugins/vue-typed', ssr: false },
  { src: '~/plugins/editor', ssr: false },
  { src: '~/plugins/pdfviewer', ssr: false },
  { src: '~/plugins/button', ssr: false },
  { src: '~/plugins/gantt', ssr: false },
  { src: '~/plugins/calendar', ssr: false },
  { src: '~/plugins/dropdownbutton', ssr: false },
  { src: '~/plugins/listview', ssr: false },
  { src: '~/plugins/bus', ssr: false },
  { src: '~/plugins/cropie', ssr: false },
  { src: '~/plugins/editor', ssr: false }
]
export const router = {
  middleware: ['router-auth']
}
export const modules = [
  'nuxt-fontawesome',
  '@neneos/nuxt-animate.css',
  'vue-scrollto/nuxt',
  '@nuxtjs/moment'
]
export const fontawesome = {
  imports: [
    {
      set: '@fortawesome/free-solid-svg-icons',
      icons: ['fas']
    },
    {
      set: '@fortawesome/free-regular-svg-icons',
      icons: ['far']
    }
  ]
}
export const build = {
  /*
   ** You can extend webpack config here
   */
  // extractCSS: {
  //   allChunks: true
  // },
  // extractCSS: true,

  extend(config, ctx) {
    // Run ESLint on save
    if (ctx.isDev && ctx.isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      })
    }
  }
}
