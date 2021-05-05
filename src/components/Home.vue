<template>
  <div class="home">
    <div class="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-6 bg-gray-900">
      <div v-for="(movie, idx) in movies" :key="idx">
        <catalog-item
        :title="movie.title"
        :backdrop-path="movie.poster_path"
        :release-date="movie.release_date"
        :rating="movie.vote_average"
        :owns="idx%5 === 0"
        @details="goToDetailPage(movie.id)"
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
  async mounted() {
    try {
      const res = await Movie.fetchMovies(this.currentPage)
      this.movies = res.data.results
    } catch(e) {
      console.log(e.stack)
    }
  },
  methods: {
    goToDetailPage(id) {
      console.log(id)
    }
  }
}
</script>
