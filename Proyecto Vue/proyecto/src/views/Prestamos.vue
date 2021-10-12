<template>
  <div v-if="$store.state.loginOK == true">
    <Header
      :nlogin="$store.state.nombreLogin"
      :var1="$store.state.loginOK"
    ></Header>

    <v-container>
      <v-row>
        <v-col>
          <h1>¡Busca tu libro preferido!</h1>
          <br />
          <p>
            Si te apasiona el maravilloso mundo de la lectura estás en el lugar
            indicado, en la Biblioteca Comunitaria encontrarás una gran variedad
            de generos literarios, asi que busca tu libro preferido, préstalo y
            a leer...
          </p>
        </v-col>
      </v-row>

      <!-- Inicio formulario para creación y actualización -->
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        v-if="$store.state.admin == true"
      >
        <h2>Agregar/Actualizar libros</h2>
        <v-text-field
          v-model="name"
          :rules="nameRules"
          label="Nombre"
          required
        ></v-text-field>

        <v-text-field
          v-model="author"
          :rules="authorRules"
          label="Autor"
          required
        ></v-text-field>

        <v-text-field
          v-model="year"
          :rules="yearRules"
          label="Año"
          type="number"
          required
        ></v-text-field>

        <v-text-field
          v-model="available"
          :rules="availableRules"
          label="Disponible"
          required
        ></v-text-field>

        <v-btn
          v-if="id == null"
          rounded
          color="primary"
          class="mr-4"
          @click="createBook"
          ><v-icon> mdi-plus-thick </v-icon>Agregar</v-btn
        >

        <v-btn
          v-if="id != null"
          rounded
          color="primary"
          class="mr-4"
          @click="UpdateBook(id)"
        >
          Actualizar</v-btn
        >

        <v-btn
          v-if="id != null"
          rounded
          color="error"
          class="mr-4"
          @click="btnCancelar"
          ><v-icon> mdi-close </v-icon>Cancelar</v-btn
        >

        <v-btn rounded color="error" class="mr-4" @click="reset">
          Limpiar formulario
        </v-btn>
      </v-form>
      <!-- Fin formulario para creación y actualización -->
      <br />
      <!-- Inicio tabla -->
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Nombre</th>
              <th class="text-left">Autor</th>
              <th class="text-left">Año</th>
              <th class="text-left">Disponible</th>
              <th class="text-left" v-if="$store.state.admin == true">
                Acción
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in books" :key="item._id">
              <td class="text-left">{{ item.name }}</td>
              <td class="text-left">{{ item.author }}</td>
              <td class="text-left">{{ item.year }}</td>
              <td class="text-left" v-if="item.available == true">Si</td>
              <td class="text-left" v-else-if="item.available == false">No</td>
              <th class="text-left" v-if="$store.state.admin == true">
                <v-btn
                  @click="deleteBook(item._id)"
                  color="error"
                  elevation="12"
                  rounded
                  ><v-icon> mdi-delete </v-icon>Eliminar</v-btn
                >
                <v-btn
                  color="primary"
                  elevation="8"
                  class="mr-4"
                  rounded
                  v-on:click="
                    btnActualizar(
                      item._id,
                      item.name,
                      item.author,
                      item.year,
                      item.available
                    )
                  "
                  ><v-icon> mdi-pencil </v-icon>
                  Actualizar
                </v-btn>
              </th>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <!-- Fin tabla -->

      <br />
      <br />
      <div v-if="$store.state.admin == true">
        <h2>Usuarios registrados</h2>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">Nombre</th>
                <th class="text-center">Apellido</th>
                <th class="text-center">Email</th>
                <th class="text-center">Administrador</th>
                <th class="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in users" :key="item._id">
                <td class="text-center">{{ item.nombre }}</td>
                <td class="text-center">{{ item.apellido }}</td>
                <td class="text-center">{{ item.email }}</td>
                <td class="text-center">{{ item.administrador }}</td>
                <td class="text-center">
                  <v-btn
                    @click="eliminarUsuario(item._id)"
                    color="error"
                    elevation="12"
                    rounded
                    >Eliminar</v-btn
                  >
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
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

  data: () => ({
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Nombre es obligatorio"],
    author: "",
    authorRules: [(v) => !!v || "Autor es obligatorio"],
    year: "",
    yearRules: [(v) => !!v || "Año es obligatorio"],
    available: "",
    availableRules: [(v) => !!v || "Disponibilidad es obligatorio"],
    checkbox: false,
    id: null,
    search: "",
  }),
  created: () => {
    store.commit("setCurrentView", "/prestamos");
    console.log(store.state.view);
    //dispatch: accede a las acciones del store
    store.dispatch("getBooks");
    store.dispatch("getUsers");
  },

  

  computed: {
    books: () => {
      return store.state.books;
    },
    users: () => {
      return store.state.users;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    deleteBook(id) {
      let obj = { id };
      store.dispatch("deleteBooks", obj).then(() => {
        store.dispatch("getBooks");
      });
    },
    createBook() {
      let obj = {
        name: this.name,
        author: this.author,
        year: this.year,
        available: this.available,
      };
      store.dispatch("setBooks", obj).then(() => {
        store.dispatch("getBooks");
        this.$refs.form.reset();
      });
    },
    UpdateBook(id) {
      let obj = {
        id: id,
        name: this.name,
        author: this.author,
        year: this.year,
        available: this.available,
      };
      store.dispatch("updateBooks", obj).then(() => {
        store.dispatch("getBooks");
        this.$refs.form.reset();
        this.id = null;
      });
    },
    btnActualizar(id, name, author, year, available) {
      this.id = id;
      this.name = name;
      this.author = author;
      this.year = year;
      this.available = available;
    },
    btnCancelar() {
      this.$refs.form.reset();
      this.id = null;
    },
    reset() {
      this.$refs.form.reset();
    },
    eliminarUsuario(id) {
      let obj = { id };
      store.dispatch("deleteUsers", obj).then(() => {
        store.dispatch("getUsers");
      });
    },
  },
};
</script>

<style>
</style>