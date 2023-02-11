export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'prathamesh',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap/dist/css/bootstrap.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/notification.js'
  ],
  

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'vue-notification/nuxt',
    'vue-notification',
    '@nuxtjs/vuetify',
    '@nuxtjs/axios'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'vue-notification/nuxt'
  ],

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
        themes: {
          dark: {
              primary: '#0D47A1',
              accent: '#3E2723',
              secondary: '#FFA000',
              info: '#00B0FF',
              warning: '#FFA000',
              error: '#FF5722',
              success: '#43A047'
            }
          }
        }
      },
  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
  router: {
    routes: [
      {
        path: '/login',
        component: '~/components/Login.vue'
      },
      {
        path: '/signup',
        component: '~/components/Signup.vue'
      }
    ]
  },

  axios: {
    baseURL: 'http://127.0.0.1:8000/'
  },

  }
