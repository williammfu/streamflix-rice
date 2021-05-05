<template>
  <div class="group w-full shadow-xl hover:bg-gray-800" @click="$emit('details')">
    <img class="object-cover overflow-hidden h-72"
    :src="base_url + backdropPath"
    alt="Poster"/>
    <div class="w-100% truncate overflow-hidden pb-8">
      <div class="text-xs font-light text-purple-500 mt-2">{{ owns ? 'You owned this' : null }}</div>
      <div class="text-md truncate overflow-hidden font-semibold text-white">{{ title }}</div>
      <div class="text-sm font-bold text-gray-500">{{ releaseDate }}</div>
      <div class="text-sm font-bold text-gray-500">{{ rating }}</div>
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
  }
})
</script>
