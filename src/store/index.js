import { createStore } from 'vuex'

export default createStore({
  state: {
    credit: localStorage.getItem('credit') || 100000,
    movies: JSON.parse(localStorage.getItem('movies')) || [],
    price: (rating) => {
      if (rating >= 8)
        return 21250
      else if (rating >= 6)
        return 16350
      else if (rating >= 3)
        return 8250
      else // rating 1 - 3
        return 3500
    }
  },
  mutations: {
    spend (state, payload) {
      if(payload.price <= state.credit) {
        state.credit -= payload.price
        localStorage.setItem('credit', state.credit)
      } 
    },
    addMovie (state, payload) {
      state.movies.push(payload)
      localStorage.setItem('movies', JSON.stringify(state.movies))
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
