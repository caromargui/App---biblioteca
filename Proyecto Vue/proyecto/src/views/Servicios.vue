<template>
  <div>
    <Header />
    <Header />
    <inicio-sesion />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import InicioSesion from "../components/InicioSesion.vue";

export default {
  components: { Header, InicioSesion },
};
</script>

<style>
</style>