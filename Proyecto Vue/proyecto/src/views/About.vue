<template>
  <div class="home">
    <Header />
    <h1>This is an about page</h1>
    <Contactenos />
    <Piedepag />
  </div>
</template>

<script>
import Contactenos from "../components/Contactenos.vue";
import Header from '../components/Header.vue';
import Piedepag from '../components/Piedepag.vue';

// @ is an alias to /src

export default {
  name: "Home",
  components: {
    Contactenos,
    Piedepag,
    Header
  },
};
</script>
