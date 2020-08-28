import fb from 'firebase/app'

export default {
  state: {
    error: null,
    user: null,
  },
  mutations: {
    SET_ERROR(state, error) {
      state.error = error
    },
    SET_USER(state, user) {
      state.user = user
    },
    CLEAR_USER(state) {
      state.user = null
    },
  },
  actions: {
    async LOGIN({ commit }, { email, password }) {
      try {
        let resultAuth = await fb
          .auth()
          .signInWithEmailAndPassword(email, password)
        if (resultAuth.user.uid) {
          commit('SET_USER', resultAuth.user.uid)
        }
      } catch (error) {
        commit('SET_ERROR', error)
        throw error
      }
    },
    async GOOGLE_SIGNIN({ commit }) {
      try {
        let provider = new fb.auth.GoogleAuthProvider()
        let resultAuth = await fb.auth().signInWithPopup(provider)
        debugger
        if (resultAuth.user.uid) {
          commit('SET_USER', resultAuth.user.uid)
        }
        return resultAuth
      } catch (error) {
        commit('SET_ERROR', error)
      }
    },
    GET_UID() {
      const userId = fb.auth().currentUser
      return userId ? userId.uid : null
    },
    LOGOUT({ commit }) {
      try {
        fb.auth().signOut()
        commit('CLEAR_USER')
      } catch (error) {
        commit('SET_ERROR', error)
        throw error
      }
    },
  },
  getters: {
    GET_ERROR(state) {
      return state.error
    },
  },
}
