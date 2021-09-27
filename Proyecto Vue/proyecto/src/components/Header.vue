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
            <li>
              <router-link class="nav-link" to="/">Inicio</router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/servicios">Servicios</router-link>
            </li>
            <li>
              <a class="nav-link" href="#">Préstamos</a>
            </li>
            <li>
              <a class="nav-link" href="#">Iniciar sesión</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
</style>