<template>
  <div id="blog" class="flex items-center">
    <catalog-item
    :title="Godzilla"
    :backdrop-path="'/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg'"
    />
    Blog hehehehehehehehehhehehehehehehheeheheheheheheh
     <button class="bg-red-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Hover</button>
  </div>
</template>

<script>
import CatalogItem from './CatalogItem.vue'
export default {
  name: 'Blog',
  components: { CatalogItem }
}
</script>
