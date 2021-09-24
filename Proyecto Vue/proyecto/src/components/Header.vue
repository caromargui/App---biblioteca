<template>
  <div>
    <nav
      class="navbar sticky-top navbar-expand-lg navbar-light"
      style="background-color: #089dc2"
    >
      <div class="container-fluid">
        <a class="navbar-brand col-3" href="#">
          <img
            src="./logobiblioteca.png"
            alt=""
            width="116"
            class="d-inline-block align-text-center"
          />
        </a>
        <h1>Biblioteca Comunitaria</h1>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="d-flex justify-content-end" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/servicios">Servicios</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Préstamos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Iniciar sesión</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <b-container>
      <b-carousel
        controls
        indicators
        img-width="1024"
        img-height="200"
        :interval="3000"
        v-model="slide"
      >
        <b-carousel-slide img-src="https://picsum.photos/1024/200/?image=11">
          <h1>Hello World!</h1>
        </b-carousel-slide>

        <b-carousel-slide
          caption="Blank image"
          img-blank
          style="background: lightskyblue"
        >
          <p>My custom slide whitout eny image here!</p>
        </b-carousel-slide>
        <b-carousel-slide
          img-src="https://picsum.photos/1024/200/?image=14"
        ></b-carousel-slide>

        <b-carousel-slide>
          <template #img>
            <img
              class="d-block"
              width="110%"
              height=200
              src="./libros.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
</style>