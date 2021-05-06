<template>
  <div 
   class="bg-cover z-1 bg-center w-40 h-48 font-light shadow-xl filter brightness-75 my-2"
   :style="`background-image: url(${base_url + backdropPath})`">
    <div class="h-full bg-gradient-to-t from-gray-900 bg-opacity-75">
      <div class="text-gray-100 text-sm pl-2 pt-36">
        <div class="font-semibold truncate overflow-ellipsis">
          {{ name }}
        </div>
        <div class="font-light truncate overflow-ellipsis">
          {{ character }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default({
  name: 'CastItem',
  props: {
    name: {
      type: String,
      default: ''
    },
    character: {
      type: String,
      default: ''
    },
    backdropPath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      base_url: 'http://image.tmdb.org/t/p/w500/'
    }
  }
})
</script>
