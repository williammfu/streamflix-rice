<template>
  <div class="flex items-center flex-wrap bg-gray-900 font-sans text-white text-md font-thin shadow-2xl p-6">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'Blog' }" class="ml-4">Blog</router-link>
    <span class="ml-4 last:place-items-end">{{ currentCredits }}</span>
  </div>
</template>

<script>
export default({
  name: 'NavBar',
  computed: {
    currentCredits() {
      return `Rp${this.$store.state.credit.toString()
                 .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}`
    }
  }
})
</script>
