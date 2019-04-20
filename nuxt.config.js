export const mode = 'spa'
export const head = {
  title: 'Bewerbli, Bewerbungsbriefe für Jugendliche',
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
      href: 'https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900'
    },
    {
      rel: 'stylesheet',
      href:
        'https://fonts.googleapis.com/css?family=Muli:200,300,400,600,700,800,900'
    }
  ]
}
export const loading = {
  color: 'red'
}
export const css = [
  '~/assets/css/tailwind.css',
  '~/assets/css/app.styl',
  '~/assets/css/main.css'
]
export const plugins = [
  {
    src: '~/plugins/fireauth.js',
    ssr: false
  },
  { src: '~/node_modules/vue-rellax/lib/nuxt-plugin', ssr: false },
  { src: '~/plugins/parallaxy.js', ssr: false }
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
