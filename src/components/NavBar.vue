<template>
  <div class="flex items-center flex-wrap bg-gray-900 font-sans text-white text-md font-thin shadow-2xl p-6">
    <router-link :to="{ name: 'HelloWorld' }">Home</router-link>
    <router-link :to="{ name: 'Blog' }">Blog</router-link>
  </div>
</template>

<script>
export default({
  name: 'NavBar'
})
</script>
