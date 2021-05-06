<template>
  <div class="fixed z-10 w-full flex items-center bg-gray-800 bg-opacity-50 font-sans text-md font-thin shadow-2xl p-6">
    <a class="text-teal-200" href="/?page=1">MOVIE LIST</a>
    <span class="ml-auto font-light cursor-default text-xl text-gray-300">
      Your credits:   
      <span class="border border-gray-300 px-2 py-0.5
       transition duration-300 ease-in hover:bg-gray-800 hover:bg-opacity-50">{{ currentCredits }}</span>
    </span>
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
