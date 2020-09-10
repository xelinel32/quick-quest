import fb from 'firebase/app'

export default {
  state: {
    error: null,
    user: {},
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
        const resultAuth = await fb
          .auth()
          .signInWithEmailAndPassword(email, password)
        const user = {
          name: resultAuth.user.displayName || '',
          email: resultAuth.user.email,
          avatar: resultAuth.user.photoURL || '',
          uid: resultAuth.user.uid,
          counterQuestions: 0,
        }
        await fb
          .database()
          .ref(`/users/${user.uid}/info`)
          .set(user)
        commit('SET_USER', user)
      } catch (error) {
        commit('SET_ERROR', error)
        throw error
      }
    },
    async GOOGLE_SIGNIN({ commit }) {
      try {
        let provider = new fb.auth.GoogleAuthProvider()
        let resultAuth = await fb.auth().signInWithPopup(provider)
        const user = {
          name: resultAuth.additionalUserInfo.profile.name,
          email: resultAuth.additionalUserInfo.profile.email,
          avatar: resultAuth.additionalUserInfo.profile.picture,
          uid: resultAuth.user.uid,
          counterQuestions: 0,
        }
        await fb
          .database()
          .ref(`/users/${resultAuth.user.uid}/info`)
          .set(user)
        commit('SET_USER', user)
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
    GET_ERROR: state => state.error,
    GET_USER: state => state.user,
  },
}
