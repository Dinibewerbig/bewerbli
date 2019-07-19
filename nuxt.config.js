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
  '~/assets/css/editor.css',
  '~/assets/css/scheduler.css',
  '~/assets/css/grid.css',
  '~/assets/css/email.css'
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
  { src: '~/plugins/editor', ssr: false },
  { src: '~/plugins/tooltip', ssr: false },
  { src: '~/plugins/vue-select', ssr: false },
  { src: '~/plugins/number-input', ssr: false },
  { src: '~/plugins/scheduler', ssr: false },
  { src: '~/plugins/grid', ssr: false },
  { src: '~/plugins/localStorage.js', ssr: false }
]
export const router = {
  base: '/',
  middleware: ['ini-app']
}
export const modules = [
  'nuxt-fontawesome',
  '@neneos/nuxt-animate.css',
  'vue-scrollto/nuxt',
  'bootstrap-vue/nuxt',
  '@nuxtjs/moment',
  [
    'nuxt-svg-sprite-module',
    {
      directory: '~/assets/icons'
    }
  ]
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
  devtool: 'eval-source-map', // eval-source-map inline-source-map
  vendor: ['lodash'],
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
