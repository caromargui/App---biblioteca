 
<template>
  <div>
    <Header />  
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <div class="container-fluid">
  
    <div class="container">
      <div class="row"><br><br>
        <div class="col-4">image</div>
        <div class="col-8">BOTON DEL CONTENIDO</div>
      </div>

      <div class="row"><br><br>
       <div class="col-4">image</div>
       <div class="col-8">BOTON DEL CONTENIDO</div>
      </div>

      <div class="row"><br><br>
        <div class="col-4">IMAGEN </div>
        <div class="col-8"><br>BOTON DEL CONTENIDO.</div>
      </div>
    </div>

   <Piedepag />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Piedepag from './components/Piedepag.vue';
export default {
};
</script>

<style>

</style>