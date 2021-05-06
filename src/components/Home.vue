<template>
  <div class="home">
    <div class="grid pt-28 px-8 grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5 bg-gray-900">
        <div v-for="(movie, idx) in movies" :key="idx">
          <catalog-item
          :title="movie.title"
          :backdrop-path="movie.poster_path"
          :release-date="movie.release_date"
          :rating="movie.vote_average.toString()"
          :owns="searchMovie(movie.id)"
          @details="goToDetailPage(movie)"
          />
      </div>
      <button
      class="p-3 text-white text-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
      @click="nextPage">Next Page</button>
    </div>
  </div>
</template>

<script>
import Movie from '@/api/movies'
import CatalogItem from './CatalogItem.vue'

export default {
  name: 'Home',
  components: { CatalogItem },
  data() {
    return {
      movies: null,
      currentPage: 1
    }
  },
  async created() {
    this.currentPage = this.$route.query.page ? parseInt(this.$route.query.page) : 1 
    await this.loadMovies()
  },
  async mounted() {
    this.currentPage = this.$route.query.page ? parseInt(this.$route.query.page) : 1 
    await this.loadMovies()
  },
  watch: {
    async $route() {
      await this.loadMovies()
    }
  },
  methods: {
    goToDetailPage(movie) {
      let id = `${movie.id}-${movie.title.replace(/\s+/g, '-').toLowerCase()}`
      this.$router.push({ name: 'MovieDetails', params: {id} })
    },
    searchMovie(id) {
      return this.$store.state.movies.filter(m => m.id === id).length > 0
    },
    nextPage() {
      this.currentPage += 1
      this.$router.push({ name: 'Home', query: { page: this.currentPage }})
    },
    async loadMovies() {
      try {
        const res = await Movie.fetchMovies(this.currentPage)
        this.movies = res.data.results
      } catch (e) {
        console.log(e.stack)
      }
    }
  }
}
</script>
