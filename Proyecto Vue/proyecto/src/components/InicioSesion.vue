<template>
  <div>
    <Header :nlogin="nombreLogin" :var1="loginOK"></Header>

    <v-app id="inspire">
      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="8">
              <v-card class="elevation-6">
                <v-window v-model="step">
                  <v-window-item :value="1">
                    <v-row>
                      <v-col cols="12" md="8">
                        <v-card-text class="mt-12">
                          <h1 class="text-center">Inicio de sesión</h1>
                          <v-form>
                            <v-text-field
                              label="Email"
                              name="Email"
                              v-model="UserEmail"
                              prepend-icon="mdi-email"
                              type="text"
                              color="light-blue accent-3"
                            />

                            <v-text-field
                              v-model="password"
                              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                              :type="show1 ? 'text' : 'password'"
                              label="Contraseña"
                              prepend-icon="mdi-lock"
                              @click:append="show1 = !show1"
                            />
                          </v-form>
                        </v-card-text>
                        <div class="text-center mt-3">
                          <v-btn
                            rounded
                            color="light-blue accent-3"
                            dark
                            @click="login"
                            >INICIAR SESIÓN</v-btn
                          >
                          <v-progress-circular
                            v-if="loginOK == true"
                            indeterminate
                            color="primary"
                          ></v-progress-circular>
                          <div v-if="aux1 == true" class="text-center">
                            <br />
                            <v-alert
                              :value="true"
                              type="error"
                              icon="mdi-alert-circle"
                            >
                              Email o contraseña incorrectos.
                            </v-alert>
                          </div>
                        </div>
                        <br />
                      </v-col>
                      <v-col cols="12" md="4" class="light-blue accent-3">
                        <v-card-text class="white--text mt-12">
                          <h1 class="text-center display-1">¡Bienvenido!</h1>
                          <h5 class="text-center">
                            Si aún no tienes un usuario, ingresa tu información
                            personal aquí
                          </h5>
                        </v-card-text>
                        <div class="text-center">
                          <v-btn rounded outlined dark @click="step++"
                            >¡QUIERO REGISTRAME!</v-btn
                          >
                        </div>
                      </v-col>
                    </v-row>
                  </v-window-item>
                  <v-window-item :value="2">
                    <v-row class="fill-height">
                      <v-col cols="12" md="4" class="light-blue accent-3">
                        <v-card-text class="white--text mt-12">
                          <h1 class="text-center display-1">
                            Inicio de sesión
                          </h1>
                          <h5 class="text-center">
                            Ingresa tus datos para iniciar sesión
                          </h5>
                        </v-card-text>
                        <div class="text-center">
                          <v-btn rounded outlined dark @click="step-- + reset()"
                            >INICIAR SESIÓN</v-btn
                          >
                        </div>
                      </v-col>

                      <v-col cols="12" md="8">
                        <v-card-text class="mt-12">
                          <h1 class="text-center">Crear usuario</h1>
                          <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field
                              label="Nombre"
                              name="Name"
                              v-model="nombre"
                              :rules="nameRules"
                              prepend-icon="mdi-account"
                              type="text"
                              color="light-blue accent-3"
                              required
                            />
                            <v-text-field
                              label="Apellido"
                              name="Surname"
                              v-model="apellido"
                              :rules="surnameRules"
                              prepend-icon="mdi-account"
                              type="text"
                              color="light-blue accent-3"
                              required
                            />
                            <v-text-field
                              label="Email"
                              name="Email"
                              v-model="email"
                              :rules="emailRules"
                              prepend-icon="mdi-email"
                              type="text"
                              color="light-blue accent-3"
                              required
                            />
                            <v-text-field
                              v-model="password1"
                              :rules="passwordRules"
                              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                              :type="show1 ? 'text' : 'password'"
                              label="Contraseña"
                              prepend-icon="mdi-lock"
                              @click:append="show1 = !show1"
                              required
                            />
                            <v-text-field
                              v-model="password2"
                              label="Verificar Contraseña"
                              :rules="[passwordRules, passwordConfirmationRule]"
                              name="ValidatePassword"
                              prepend-icon="mdi-lock"
                              type="password"
                              color="light-blue accent-3"
                              required
                            />
                            <br />
                            <div class="text-center mt-3">
                              <v-btn
                                class="text-center mt-n5"
                                rounded
                                color="light-blue accent-3"
                                dark
                                :disabled="!valid"
                                @mouseover="validate"
                                @click="reset + crearUsuario()"
                                >REGISTRARME</v-btn
                              >
                            </div>
                            <div v-if="confirmacion">
                              <br />
                              <v-alert
                                :value="true"
                                type="success"
                                icon="mdi-account-check"
                              >
                                El usuario se ha registrado con éxito.
                              </v-alert>
                            </div>
                          </v-form>
                        </v-card-text>
                      </v-col>
                    </v-row>
                  </v-window-item>
                </v-window>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">Nombre</th>
            <th class="text-center">Apellido</th>
            <th class="text-center">Email</th>
            <th class="text-center">Contraseña</th>
            <th class="text-center">Administrador</th>
            <th class="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in users" :key="item._id">
            <td class="text-center">{{ item.nombre }}</td>
            <td class="text-center">{{ item.apellido }}</td>
            <td class="text-center">{{ item.email }}</td>
            <td class="text-center">{{ item.contraseña }}</td>
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
</template>

<script>
import Header from "./Header.vue";
import store from "../store/index.js";
import router from "../router";

export default {
  components: { Header },
  data: () => ({
    valid: true,
    step: 1,
    show1: false,
    loginOK: false,
    confirmacion: false,
    nombreLogin: "",
    password: "aaaaaa",
    UserEmail: "sbarrera.96@hotmail.com",
    aux1: false,
    nameRules: [(v) => !!v || "*Nombre es obligatorio"],
    surnameRules: [(v) => !!v || "*Apellido es obligatorio"],
    emailRules: [
      (v) => !!v || "*Email es obligatorio",
      (v) => /.+@.+\..+/.test(v) || "*E-mail debe ser válido",
    ],
    passwordRules: [(v) => !!v || "*Contraseña es obligatoria"],
  }),
  props: {
    source: String,
  },
  methods: {
    eliminarUsuario(id) {
      let obj = { id };
      store.dispatch("deleteUsers", obj).then(() => {
        store.dispatch("getUsers");
      });
    },
    crearUsuario() {
      let obj = {
        nombre: this.nombre,
        apellido: this.apellido,
        email: this.email,
        contraseña: this.password1,
      };
      store.dispatch("setUsers", obj).then(() => {
        store.dispatch("getUsers");
        this.reset();
        this.confirmacion = true;
      });
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
      this.confirmacion = false;
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    loginValidation() {
      console.log("Si está en la BD");

      console.log(this.users);
      for (var i = 0; i < this.users.length; i++) {
        console.log(this.users[i].email);
        if (
          String(this.users[i].email) === this.UserEmail &&
          this.users[i].contraseña === this.password
        ) {
          console.log("Esta el usuario");
          console.log(this.users[i].email);
          console.log(this.users[i].contraseña);
          console.log(this.users[i].nombre);
          store.commit("cambiarUsuario", this.users[i].nombre);
          var aux = true;
          store.commit("cambiarEstadoLogin", aux);
          break;
        } else {
          var aux = false;
          this.aux1 = true;
        }
      }
      console.log(aux);
      return (this.loginOK = aux), (this.nombreLogin = this.users[i].nombre);
    },
    login() {
      this.loginValidation();
      setTimeout(function () {
        router.push("/");
      }, 500);
    },
  },

  created: () => {
    //dispatch: accede a las acciones del store
    store.dispatch("getUsers");
  },

  computed: {
    users: () => {
      return store.state.users;
    },

    passwordConfirmationRule() {
      return () =>
        this.password1 === this.password2 ||
        "*Las contraseñas no coinciden. Inténtelo nuevamente.";
    },
  },
};
</script>

<style>
</style>