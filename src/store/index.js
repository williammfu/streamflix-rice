import { createStore } from 'vuex'

export default createStore({
  state: {
    credit: 100000,
    movies: []
  },
  mutations: {
    spend (state, payload) {
      state.credit -= payload.price 
    },
    addMovie (state, payload) {
      state.movies.push(payload)
    }
  },
  actions: {
    spend ({ commit }, payload) {
      commit('spend', payload)
    },
    addMovie ({ commit }, payload) {
      commit('addMovie', payload)
    }
  },
  modules: {
  }
})
