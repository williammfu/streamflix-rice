import { createStore } from 'vuex'

export default createStore({
  state: {
    credit: 100000,
    movies: [],
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
      state.credit -= payload.price
      localStorage.setItem('price', state.credit) 
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
