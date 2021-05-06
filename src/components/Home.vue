<template>
  <div id="home" class="bg-gray-900">
    <div id="button-panel" class="flex">
      <button :disabled="currentPage <= 1" class="ml-auto mt-28 py-1 px-4 
       text-teal-400 font-light border border-teal-400
       transition duration-400 ease-in-out 
       hover:bg-teal-400 hover:text-gray-100
       " @click="previousPage"> &lt; </button>
      <button class="mt-28 mx-2 py-1 px-4 text-teal-400 font-light border border-teal-400 cursor-default">{{ currentPage }}</button>
      <button class="mt-28 mr-auto py-1 px-4 text-teal-400 font-light border border-teal-400
       transition duration-400 ease-in-out 
       hover:bg-teal-400 hover:text-gray-100" @click="nextPage"> &gt; </button>
    </div>
    <div class="grid mt-4 px-8 grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5">
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
      window.scrollTo(0, 0)
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
    previousPage() {
      this.currentPage -= 1
      this.$router.push({ name: 'Home', query: { page: this.currentPage }})
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
