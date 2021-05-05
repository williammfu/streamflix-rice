<template>
  <div class="group w-100% h-64 shadow-xl hover:bg-gray-800">
    <img class="object-cover overflow-hidden w-100% h-36 transition duration-500 ease-in transform hover:scale-120"
    :src="base_url + backdropPath"
    alt="Sneak Peek"/>
    <div class="w-100% truncate overflow-hidden text-md font-light text-white" >
      {{ title }}
    </div>
  </div>
</template>

<script>
export default({
  name: 'CatalogItem',
  data() {
    return {
      base_url: 'http://image.tmdb.org/t/p/original',
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
    }
  }
})
</script>
