import axios from 'axios'

export default class Movie {
  static base_url = process.env.VUE_APP_API_URL || 'https://api.themoviedb.org/3'
  static api_key = process.env.VUE_APP_API_KEY

  static async fetchConf() {
    const res = await axios.get(`${this.base_url}/configuration`, {
      params: {
        api_key: this.api_key
      }
    })
    return res
  }
  
  static async fetchMovies(page) {
    const res = await axios.get(`${this.base_url}/discover/movie`, {
      params: {
        api_key: this.api_key,
        page: page,
        language: 'id-ID',
        region: 'id',
        sort_by: 'popularity.desc',
        include_adult: false,
        include_video: false,
        with_watch_monetization_types: 'flatrate'
      }
    })
    return res
  }

  static async fetchMovieDetails(id) {
    const res = await axios.get(`${this.base_url}/movie/${id}`, {
      params: {
        api_key: this.api_key
      }
    })
    return res
  }

  static async fetchCasts(id) {
    const res = await axios.get(`${this.base_url}/movie/${id}/credits`, {
      params: {
        api_key: this.api_key
      }
    })
    return res
  }

  static async fetchRecommendations(id) {
    const res = await axios.get(`${this.base_url}/movie/${id}/recommendations`, {
      params: {
        api_key: this.api_key
      }
    })
    return res
  }

}