<template>
  <pagina-inicio />
</template>

<script>
import PaginaInicio from "../components/PaginaInicio.vue";
import store from "../store/index.js";

export default {
  name: "Home",

  components: { PaginaInicio },
  mounted (){
    window.scrollTo(0,0)
  },
  created: () => {
    store.commit("setCurrentView","/");
    console.log(store.state.view)
  },
};

</script>
