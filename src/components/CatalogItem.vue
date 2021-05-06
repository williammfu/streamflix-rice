<template>
  <div class="group w-full shadow-xl hover:bg-gray-800 cursor-pointer" @click="$emit('details')">
    <img class="object-cover overflow-hidden h-72 w-full z-0"
    :src="base_url + backdropPath"
    alt="Poster"/>
    <div class="w-100% truncate overflow-hidden px-2 pb-8">
      <div class="text-xs font-light mt-2">
        <div v-show="owns" class="w-1/4 text-center text-teal-500 border py-0.5 px-0.5 border-teal-500">
          BOUGHT
        </div>
      </div>
      <div class="text-md truncate overflow-hidden font-light text-white">{{ title }}</div>
      <div class="text-sm font-bold text-gray-200">{{ releaseDate }}</div>
      <div class="text-sm font-bold text-gray-200">{{ price(rating) }}</div>
    </div>
  </div>
</template>

<script>
export default({
  name: 'CatalogItem',
  data() {
    return {
      base_url: 'http://image.tmdb.org/t/p/w500',
    }
  },
  props: {
    title: {
      type: String,
      default: 'Title Not Found'
    },
    backdropPath: {
      type: String,
      default: ''
    },
    releaseDate: {
      type: String,
      default: ''
    },
    rating: {
      type: String,
      default: ''
    },
    owns: {
      type: Boolean,
      deafult: false
    }
  },
  methods: {
    price(rating) {
      return `Rp${this.$store.state.price(rating).toString()
                   .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}`
    }
  }
})
</script>
