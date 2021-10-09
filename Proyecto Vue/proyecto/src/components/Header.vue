<template>
  <div>
    <nav
      class="navbar sticky-top navbar-expand-lg navbar-light"
      style="background-color: #089dc2"
    >
      <div class="container-fluid">
        <a class="navbar-brand col-3" href="#">
          <img
            src="./img/logobiblioteca.png"
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
              <router-link class="nav-link" to="/cursos">Cursos</router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/simulador"
                >Simulador</router-link
              >
            </li>
            <li>
              <a class="nav-link" href="#">Préstamos</a>
            </li>
            <!-- <div class="nav-link">
              {{ nlogin }}
            </div>
            <div class="nav-link">
              {{ var1 }}
            </div> -->

            <li class="nav-item dropdown" v-if="var1 == true">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ nlogin }}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
              </ul>
            </li>
            <li v-else>
              <router-link class="nav-link" to="/login">Iniciar sesión</router-link>
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
  components: {},
  methods: {},
  props: ["nlogin", "var1"],
};
</script>

    
<style>
</style>