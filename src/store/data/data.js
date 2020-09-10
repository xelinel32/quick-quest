import fb from 'firebase/app'

export default {
  state: {
    users: [],
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users
    },
  },
  actions: {
    async CREATE_QUESTIONS({ commit, dispatch }, data) {
      try {
        const uid = await dispatch('GET_UID')
        dispatch('UPDATE_COUNTER')
        await fb
          .database()
          .ref(`users/${uid}/questions`)
          .push({
            ...data,
            id: uid,
          })
      } catch (error) {
        commit('SET_ERROR', error)
        throw error
      }
    },
    async FETCH_DATA({ commit }) {
      try {
        // const uid = await dispatch('GET_UID')
        const questions =
          (await (
            await fb
              .database()
              .ref(`/users/`)
              .once('value')
          ).val()) || {}
        return Object.keys(questions).map(key => ({
          ...questions[key].questions,
        }))
      } catch (error) {
        commit('SET_ERROR', error)
        throw error
      }
    },
    async FETCH_USERS({ commit }) {
      try {
        const users = await fb
          .database()
          .ref('/users/')
          .once('value')
        let usersAr = users.val()
        const userFetched = Object.keys(usersAr).map(key => {
          return { ...usersAr[key].info }
        })
        commit('SET_USERS', userFetched)
        return userFetched
      } catch (error) {
        commit('SET_ERROR', error)
        throw error
      }
    },
    async UPDATE_COUNTER(ctx) {
      const uid = await ctx.dispatch('GET_UID')
      await fb
        .database()
        .ref(`/users/${uid}/info/counterQuestions`)
        .transaction(value => {
          return (value || 0) + 1
        })
    },
  },
  getters: {
    GET_USERS(state) {
      return state.users
    },
  },
}
