<template>
  <div class="simulador">
    <Header />
    <h1>Este es la vista dlesimulador</h1>
    <Simulador />
    <Piedepag />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Piedepag from '../components/Piedepag.vue';
import Simulador from './components/simulador.vue';

// @ is an alias to /src

export default {
  name: "Simulador",
  components: {
    Piedepag,
    Header,
    Simulador
  },
};
</script>