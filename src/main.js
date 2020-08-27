import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VuePageTransition from 'vue-page-transition'

// title component
import qSectionTitle from './components/qSectionTitle'
// error handler
import qErrorHandler from './components/qErrorHandler'

import { rtdbPlugin } from 'vuefire'
import fb from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.use(VuePageTransition)
Vue.use(rtdbPlugin)
Vue.component('qSectionTitle', qSectionTitle)
Vue.component('qErrorHandler', qErrorHandler)

Vue.config.productionTip = false

fb.initializeApp({
  apiKey: 'AIzaSyBLM6owec9ffKutQIlQaWznQPMRv3PTSls',
  authDomain: 'qquestions-d767e.firebaseapp.com',
  databaseURL: 'https://qquestions-d767e.firebaseio.com',
  projectId: 'qquestions-d767e',
  storageBucket: 'qquestions-d767e.appspot.com',
  messagingSenderId: '218449302259',
  appId: '1:218449302259:web:4ec8850a31f9c538171d86',
})

let app

fb.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App),
    }).$mount('#app')
  }
})
