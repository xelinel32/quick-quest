import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.min.css'

Vue.use(Vuetify)

Vuetify.config.silent = true

export default new Vuetify({
  theme: {
    dark: false,
    options: {
      customProperties: true,
    },
    icon: {
      iconfont: 'mdi',
    },
    themes: {
      light: {
        primary: '#00E676',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
})
