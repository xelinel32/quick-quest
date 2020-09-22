import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import fb from './api/firebaseConfig'
import VuePageTransition from 'vue-page-transition'
import qSectionTitle from './components/qSectionTitle'
import qErrorHandler from './components/qErrorHandler'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.use(VuePageTransition)
Vue.component('qSectionTitle', qSectionTitle)
Vue.component('qErrorHandler', qErrorHandler)

Vue.config.productionTip = false

let app

fb.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App),
      created() {
        if (fb.auth().currentUser) {
          fb.auth().currentUser.providerData.forEach(u => {
            const user = {
              name: u.displayName,
              email: u.email,
              avatar: u.photoURL,
              uid: u.uid,
            }
            this.$store.commit('SET_USER', user)
          })
        }
      },
    }).$mount('#app')
  }
})
