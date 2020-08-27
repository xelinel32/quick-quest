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
