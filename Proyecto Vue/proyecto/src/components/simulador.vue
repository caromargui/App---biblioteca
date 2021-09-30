<template>
  <div>
    <Header />  
        <div class="card" style="width: 18rem;">
       <img src="..." class="card-img-top" alt="...">
       <div class="card-body">
       <h5 class="card-title">Card title</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>

   <Piedepag />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Piedepag from './components/Piedepag.vue';
export default {
  components: { Header, Piedepag },
};
</script>

<style>

</style>