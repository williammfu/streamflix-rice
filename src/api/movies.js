import axios from 'axios'

export default class Movie {
  static base_url = process.env.VUE_APP_API_URL || 'https://api.themoviedb.org/3'
  static api_key = process.env.VUE_APP_API_KEY

  static async fetchConf() {
    const res = await axios.get(`${this.base_url}configuration`, {
      params: {
        api_key: this.api_key
      }
    })
    return res
  }
  
  static async fetchMovies(page) {
    console.log(this.api_key)
    const res = await axios.get(`${this.base_url}discover/movie`, {
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
    console.log(res)
    return res
  }
}