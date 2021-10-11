<template>
  <div class="home">
    <Header
      :nlogin="$store.state.nombreLogin"
      :var1="$store.state.loginOK"
    ></Header>
    <br />
    <h1>Contáctenos</h1>
    <contactenos />
  </div>
</template>

<script>
import Contactenos from "../components/Contactenos.vue";
import Header from "../components/Header.vue";
import InicioSesion from "../views/InicioSesion.vue";
import store from "../store/index.js";

// @ is an alias to /src

export default {
  name: "Home",
  components: {
    Contactenos,
    Header,
    InicioSesion,
  },
  created: () => {
    store.commit("setCurrentView", "/about");
    console.log(store.state.view);
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
