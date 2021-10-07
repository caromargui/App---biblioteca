<template>
  <div>
      <Header/>
      <simulador/>
      <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Simulador from '../components/Simulador.vue'


export default {
  components: {Header, Footer, Simulador},

}
</script>
<style>

</style>