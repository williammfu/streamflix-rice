<template>
  <div class="home">
    <div class="grid pt-28 px-8 grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5 bg-gray-900">
        <div v-for="(movie, idx) in movies" :key="idx">
          <catalog-item
          :title="movie.title"
          :backdrop-path="movie.poster_path"
          :release-date="movie.release_date"
          :rating="movie.vote_average.toString()"
          :owns="idx%5 === 0"
          @details="goToDetailPage(movie.id)"
          />
      </div>
      <button class="p-3 text-white text-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" @click="nextPage">Next Page</button>
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
  async mounted() {
    this.currentPage = this.$route.query.page ? parseInt(this.$route.query.page) : 1 
    await this.loadMovies()
  },
  methods: {
    goToDetailPage(id) {
      this.$router.push({ name: 'MovieDetails', params: {id} })
    },
    async nextPage() {
      this.currentPage += 1
      this.$router.push({ name: 'Home', query: { page: this.currentPage }})
      await this.loadMovies()
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
