<template>
  <div class="hello">
    <div class="flex items-center justify-between flex-wrap bg-gray-900">
      <catalog-item
      v-for="(movie, idx) in movies" :key="idx"
      :title="movie.title"
      :backdrop-path="movie.backdrop_path"
      class="m-1"
      />
    </div>
  </div>
</template>

<script>
import Movie from '@/api/movies'
import CatalogItem from './CatalogItem.vue'

export default {
  name: 'HelloWorld',
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
      console.log(this.movies)
    } catch(e) {
      console.log('mounted')
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
