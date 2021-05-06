<template>
  <div class="fixed z-10 w-full flex items-center bg-gray-800 bg-opacity-50 font-sans text-md font-thin shadow-2xl p-6">
    <router-link class="text-white" :to="{ name: 'Home', query: { page: 1 }}" active-class>Home</router-link>
    <span class="ml-auto font-light text-xl text-gray-300 border border-gray-300 px-2 py-0.5
    transition duration-300 ease-in hover:bg-gray-800 hover:bg-opacity-50 cursor-default">{{ currentCredits }}</span>
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
