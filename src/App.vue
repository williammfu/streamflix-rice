<template>
 <div id="nav">
      <router-link :to="{ name: 'HelloWorld' }">Home</router-link> |
      <router-link :to="{ name: 'Blog' }">Blog</router-link>
  </div>
  <div id="#app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
