<template>
  <div>      
    <Header :nlogin=nombreLogin :var1=loginOK></Header>

    <v-container>

    </v-container>
    <footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'

export default {
  components: { Header, Footer },
}
</script>

<style>

</style>