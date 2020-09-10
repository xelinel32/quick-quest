import Vue from 'vue'
import Vuex from 'vuex'
import user from './auth/user'
import data from './data/data'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { user, data },
})
