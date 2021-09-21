<template>
  <div id="app">
    <pagina-inicio />
  </div>
</template>

<script>
import PaginaInicio from './components/PaginaInicio.vue'


export default {
  name: 'App',
  components: {
    PaginaInicio
    
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

</style>
