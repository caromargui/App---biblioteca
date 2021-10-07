<template>
  <div>
    <Header />

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
                          <v-btn rounded color="light-blue accent-3" dark
                            >INICIAR SESIÓN</v-btn
                          >
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
                              :rules="nameRules"
                              prepend-icon="mdi-account"
                              type="text"
                              color="light-blue accent-3"
                              required
                            />
                            <v-text-field
                              label="Apellido"
                              name="Surname"
                              :rules="surnameRules"
                              prepend-icon="mdi-account"
                              type="text"
                              color="light-blue accent-3"
                              required
                            />
                            <v-text-field
                              label="Email"
                              name="Email"
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
                                @click="validate"
                                >REGISTRARME</v-btn
                              >
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
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in users" :key="item._id">
            <td class="text-center">{{ item.nombre }}</td>
            <td class="text-center">{{ item.apellido }}</td>
            <td class="text-center">{{ item.email }}</td>
            <td class="text-center">{{ item.contraseña }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import Header from "./Header.vue";
import store from "../store/index.js";

export default {
  components: { Header },
  data: () => ({
    valid: true,
    step: 1,
    show1: false,
    password1: "",
    password2: "",
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
    crearUsuario() {
      let obj = {
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        email: this.email,
      };
      store.dispatch("setPersonajes", obj).then(() => {
        store.dispatch("getPersonajes");
        this.nombre = "";
        this.apellido = "";
        this.edad = "";
        this.email = "";
      });
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
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