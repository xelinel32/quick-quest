import Vue from 'vue'
import Vuex from 'vuex'
import user from './auth/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { user },
})
