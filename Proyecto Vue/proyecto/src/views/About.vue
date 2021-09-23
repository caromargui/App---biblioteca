<template>
  <div class="home">
    <h1>This is an about page</h1>
    <pagina-inicio />
    
  </div>
</template>

<script>
import PaginaInicio from '../components/PaginaInicio.vue'
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    PaginaInicio
    
  }
}
</script>
