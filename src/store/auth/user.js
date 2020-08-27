import fb from 'firebase/app'

export default {
  state: {
    error: null,
  },
  mutations: {
    SET_ERROR(state, error) {
      state.error = error
    },
  },
  actions: {
    async LOGIN({ commit }, { email, password }) {
      try {
        await fb.auth().signInWithEmailAndPassword(email, password)
      } catch (error) {
        commit('SET_ERROR', error)
        throw error
      }
    },
    async GOOGLE_SIGNIN({ commit }) {
      try {
        let provider = new fb.auth.GoogleAuthProvider()
        let resultAuth = await fb.auth().signInWithPopup(provider)
        return resultAuth
      } catch (error) {
        commit('SET_ERROR', error)
      }
    },
    LOGOUT({ commit }) {
      try {
        fb.auth().signOut()
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
