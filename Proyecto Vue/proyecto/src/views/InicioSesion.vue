<template>
  <div>
    <inicio-sesion />
  </div>
</template>

<script>
import InicioSesion from "../components/InicioSesion.vue";


export default {
  components: { InicioSesion },
  mounted (){
    window.scrollTo(0,0)
  }
};
</script>

<style>
</style>