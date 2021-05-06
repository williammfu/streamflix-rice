<template>
  <div v-if="movie && casts" id="details" class="bg-cover z-0 bg-center h-screen overflow-y-auto" :style="`background-image: url(${base_url + movie.backdrop_path})`">
    <div id="overlay" class="z-2 pt-32 h-100% bg-gradient-to-t from-gray-900">
      <div class="z-2 mx-10 mt-8">
        <span class="transition duration-400 ease-in-out text-4xl md:text-5xl text-gray-100 font-black">{{ movie.title }}</span>
        <p class="w-4/5 md:w-2/5 mt-2 text-justify text-xs sm:text-sm text-gray-100 font-light">{{ movie.overview }}</p>
        <div class="text-gray-100 mt-2 mb-4 font-semibold">            
          <span>{{ movie.vote_average }}</span> |
          <span>{{ movie.runtime }} minutes</span>
        </div>
      <span v-for="(genre, idx) in movie.genres" :key="idx" class="px-4 py-2 mr-2 bg-gray-700 bg-opacity-50 text-xs text-gray-100 flex-shrink-0">
        {{ genre.name }}
      </span>
      <div v-show="!owned">
        <button
        class="my-4 px-5 py-3 bg-green-900 border border-green-600 bg-opacity-25 text-sm text-green-500 transition duration-400 ease-in hover:bg-green-600 hover:text-gray-100"
        @click="buyMovie" 
        >Add To Collection ({{ price }})
        </button>
      </div>
      <div v-show="owned">
        <button
        disabled
        class="my-4 px-5 py-3 bg-gray-900 border border-gray-600 bg-opacity-25 text-sm text-gray-500"
        >You already have this movie!
        </button>
      </div>
      <h2 class="text-gray-100 text-3xl font-semibold mt-10 mb-2">Casts</h2>
      <div id="cast" class="flex overflow-x-auto space-x-4 pb-6">
        <cast-item
          v-for="(cast, idx) in casts" :key="idx"
          :name="cast.name"
          :character="cast.character"
          :backdropPath="cast.profile_path"
        />
      </div>
      <h2 class="text-gray-100 text-3xl font-semibold mt-4 pb-4">Recommended</h2>
      <div class="grid grid-cols-7">
        <catalog-item
          v-for="(movie, idx) in recommendation" :key="idx"
          :title="movie.title"
          :backdrop-path="movie.poster_path"
          :release-date="movie.release_date"
          :rating="movie.vote_average.toString()"
          :owns="searchMovie(movie.id)"
          @details="goToDetailPage(movie)"
        />
      </div>
      <h2 class="text-gray-100 text-3xl font-semibold mt-4 pb-4">Similar Movies</h2>
      </div>
    </div>
  </div>
</template>

<script>
import Movie from '@/api/movies'
import CastItem from '@/components/CastItem'
import CatalogItem from '@/components/CatalogItem'

export default {
  name: 'Details',
  components: { CastItem, CatalogItem },
  data() {
    return {
      base_url: 'http://image.tmdb.org/t/p/original',
      id: parseInt(this.$route.params.id.split('-')[0]),
      movie: null,
      casts: [],
      recommendation: [],
      owned: false
    }
  },
  computed: {
    price() {
      return `Rp${this.$store.state.price(this.movie.vote_average).toString()
                   .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}` 
    }
  },
  async mounted() {
    try {
      const res = await Movie.fetchMovieDetails(this.id)
      const resCast = await Movie.fetchCasts(this.id)
      const resRec = await Movie.fetchRecommendations(this.id)
      this.movie = res.data
      this.casts = resCast.data.cast.slice(0, 7)
      this.recommendation = resRec.data.results
      this.owned = this.$store.state.movies.filter(m => m.id === this.id).length > 0
    } catch(e) {
      console.log(e.stack)
    }
  },
  methods: {
    buyMovie() {
      let price = this.$store.state.price(this.movie.vote_average)
      this.$store.dispatch('spend', { price })
      this.$store.dispatch('addMovie', { id: this.movie.id, title: this.movie.title })
      this.owned = true
    },
    goToDetailPage(movie) {
      let id = `${movie.id}-${movie.title.replace(/\s+/g, '-').toLowerCase()}`
      this.$router.push({ name: 'MovieDetails', params: {id} })
    },
    searchMovie(id) {
      return this.$store.state.movies.filter(m => m.id === id).length > 0
    }
  }
}
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
#details::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
#details {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

#cast::-webkit-scrollbar {
    display: none;
}

#cast {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>