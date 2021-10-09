<template>
  <div v-if="$store.state.loginOK == true">
    <Header
      :nlogin="$store.state.nombreLogin"
      :var1="$store.state.loginOK"
    ></Header>
    <v-container>
      <br />
      <v-row>
        <v-col>
          <h1>¡Busca tu libro preferido!</h1>
          <br />
          <p>
            Si te apasiona el maravilloso mundo de la lectura estás en el lugar
            indicado, en la Biblioteca Comunitaria encontrarás una gran variedad
            de generos literarios, asi que busca tu libro preferido, prestalo y
            a leer...
          </p>
        </v-col>
      </v-row>

      <!-- Barra de búsqueda-->
      <v-row>
        <v-col>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Busca tu libro"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <!-- Fin barra de búsqueda-->

          <!-- Inicio tabla -->
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">ID libro</th>
                  <th class="text-left">Nombre libro</th>
                  <th class="text-left">Autor</th>
                  <th class="text-left">Categoria</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.ID }}</td>
                  <td>{{ item.NombreLibro }}</td>
                  <td>{{ item.Autor }}</td>
                  <td>{{ item.Genero }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <!-- Fin tabla -->

      <br />
      <br />
    </v-container>
    <Footer />
  </div>
  <div v-else>
    <inicio-sesion />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import InicioSesion from "../views/InicioSesion.vue";
import store from "../store/index.js";

export default {
  components: { Header, Footer, InicioSesion },

  data() {

    return {
      desserts: [
        {
          ID: 1,
          NombreLibro: "Cien años de soledad",
          Autor: "Gabriel García Márquez",
          Genero: "Novela",
        },
        {
          ID: 2,
          NombreLibro: "El alquimista",
          Autor: "Paulo Coelho",
          Genero: "Novela",
        },
        {
          ID: 3,
          NombreLibro: "El perfume",
          Autor: "Patrick Süskind",
          Genero: "Novela",
        },
        {
          ID: 4,
          NombreLibro: "El señor de los anillos",
          Autor: "J.R.R Tolkein",
          Genero: "Fantasía",
        },
        {
          ID: 5,
          NombreLibro: "Harry Potter",
          Autor: "J.K Rowling",
          Genero: "Fantasía",
        },
      ],
    };
  },
  created: () => {
    store.commit("setCurrentView", "/prestamos");
    console.log(store.state.view);
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
</style>