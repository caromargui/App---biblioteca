<template>
  <div class="home">
    <Header :nlogin=nombreLogin :var1=loginOK></Header>
    <h1>Contáctenos</h1>
    <contactenos />
  </div>
</template>

<script>
import Contactenos from "../components/Contactenos.vue";
import Header from '../components/Header.vue';


// @ is an alias to /src

export default {
  name: "Home",
  components: {
    Contactenos,
    Header
  },
};
</script>
