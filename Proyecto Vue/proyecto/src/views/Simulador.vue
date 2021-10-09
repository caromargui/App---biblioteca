<template>
  <div v-if="$store.state.loginOK == true">
    <Header
      :nlogin="$store.state.nombreLogin"
      :var1="$store.state.loginOK"
    ></Header>
    <simulador />
    <br />
    <Footer />
  </div>
  <div v-else>
    <inicio-sesion />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Simulador from "../components/Simulador.vue";
import InicioSesion from "../views/InicioSesion.vue";
import store from "../store/index.js";

export default {
  components: { Header, Footer, Simulador, InicioSesion },
  created: () => {
    store.commit("setCurrentView", "/simulador");
    console.log(store.state.view);
  },
};
</script>
<style>
</style>