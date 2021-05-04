<template>
  <div class="hello">
    Hello World<br>
    {{ msg }}
    <button @click="get">API Call</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    axios.get("https://api.themoviedb.org/3/configuration?api_key=cb707eca4e61a1527fb74eec5cc5009e")
         .then(res => { console.log(res) })
  },
  methods: {
    async get() {
      await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=cb707eca4e61a1527fb74eec5cc5009e&language=id-ID&region=&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
      ).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
