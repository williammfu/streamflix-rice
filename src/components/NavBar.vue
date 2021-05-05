<template>
  <div class="fixed w-full flex items-center bg-gray-900 font-sans text-md font-thin shadow-2xl p-6">
    <router-link class="text-white" :to="{ name: 'Home' }">Home</router-link>
    <span class="ml-auto font-bold text-xl text-teal-200">{{ currentCredits }}</span>
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
