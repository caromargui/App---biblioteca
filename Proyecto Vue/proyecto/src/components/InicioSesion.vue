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
                          <v-btn rounded outlined dark @click="step--"
                            >INICIAR SESIÓN</v-btn
                          >
                        </div>
                      </v-col>

                      <v-col cols="12" md="8">
                        <v-card-text class="mt-12">
                          <h1 class="text-center">Crear usuario</h1>
                          <v-form>
                            <v-text-field
                              label="Nombre"
                              name="Name"
                              prepend-icon="mdi-account"
                              type="text"
                              color="light-blue accent-3"
                            />
                            <v-text-field
                              label="Email"
                              name="Email"
                              prepend-icon="mdi-email"
                              type="text"
                              color="light-blue accent-3"
                            />

                            <v-text-field
                              id="password"
                              label="Contraseña"
                              name="password"
                              prepend-icon="mdi-lock"
                              type="password"
                              color="light-blue accent-3"
                            />
                          </v-form>
                        </v-card-text>
                        <div class="text-center mt-n5">
                          <v-btn rounded color="light-blue accent-3" dark
                            >REGISTRARME</v-btn
                          >
                        </div>
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
  </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  components: { Header },
  data: () => ({
    step: 1,
    show1: false,
    password: "",
    // rules: {
    //   required: value => !!value || 'Required.',
    //   min: v => v.length >= 8 || 'Min 8 characters',
    //   emailMatch: () => (`The email and password you entered don't match`),
    // },
  }),
  props: {
    source: String,
  },
};
</script>

<style>
</style>