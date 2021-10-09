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
              <router-link class="nav-link" to="/prestamos"
                >Préstamos</router-link
              >
            </li>
            <li class="nav-item dropdown" v-if="var1 == true">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <strong>
                  {{ nlogin }}
                </strong>
                <v-icon>mdi-account</v-icon>
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <li>
                  <v-btn tile text @click="logOut" to="/">
                    <v-icon> mdi-logout </v-icon>
                    Salir
                  </v-btn>
                </li>
              </div>
            </li>
            <li v-else>
              <router-link class="nav-link" to="/login"
                >Iniciar sesión</router-link
              >
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
  data: () => ({
    
  }),
  props: ["nlogin", "var1"],
  methods: {
    logOut() {
      console.log("Si está en la BD");
      this.var1=false
    },
  },
};
</script>


    
<style>
</style>