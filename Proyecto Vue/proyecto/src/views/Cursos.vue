<template>
  <div v-if="$store.state.loginOK == true">
    <Header
      :nlogin="$store.state.nombreLogin"
      :var1="$store.state.loginOK"
    ></Header>
    <v-container>
      <v-row justify="center">
        <v-col cols="auto">
          <h1>Acerca de los cursos</h1>
          <p>
            Desde Biblioteca Comunitaria, les ofrecemos un repertorio de
            cursos online gratuitos, y asincrónicos, los cuales pueden ser
            descargados desde esta misma página. Encontraras, tutoriales,
            documentos, videos, y todo tipo de material educativo, el cual
            obtendras de forma fácil y segura, a tan sólo unos cuantos clics.
            Así puedes administrar mejor tu tiempo y tienes la opción de hacerlo
            a tu ritmo.
          </p>
          <p>
            A continuación podrás encontrar el buscador de cursos, con sus
            respectivos niveles, cuando hayas seleccionado un nivel, pulsa el
            botón de acceder para obtener la información del curso.
          </p>
          <br />
          <hr />
          <!-- Inicia Barra de búsqueda-->
          <v-system-bar></v-system-bar>
          <v-toolbar flat color="transparent">
            <v-text-field
              v-model="search"
              label="Buscar cursos"
              single-line
            ></v-text-field>
          </v-toolbar>
          <!-- Termina Barra de búsqueda -->
          <!-- Inicia lista -->

          <v-sheet class="mx-auto" max-width="1400">
            <v-slide-group
              center-active
              next-icon="mdi-chevron-right"
              prev-icon="mdi-chevron-left"
            >
              <v-slide-item
                v-for="(item, i) in searching"
                :key="i"
                ripple
                @click="() => {}"
              >
                <!-- Inicia v-card -->
                <v-card
                  :loading="loading"
                  class="mx-auto my-12"
                  max-width="374"
                  sheped="true"
                >
                  <template slot="progress">
                    <v-progress-linear
                      color="deep-purple"
                      height="10"
                      indeterminate
                    ></v-progress-linear>
                  </template>

                  <v-img height="250" :src="item.image"></v-img>

                  <v-card-title v-text="item.title"></v-card-title>
                  <hr />
                  <v-card-text class="justify-center" v-text="item.resume">
                    <v-chip v-text="item.keyword"></v-chip>
                  </v-card-text>

                  <v-divider class="mx-4"></v-divider>

                  <v-card-title class="a">Nivel</v-card-title>

                  <v-card-text>
                    <v-chip-group
                      v-model="selection"
                      active-class="deep-purple accent-4 white--text"
                      column
                    >
                      <v-chip>Principiante</v-chip>

                      <v-chip>Intermedio</v-chip>

                      <v-chip>Avanzado</v-chip>
                    </v-chip-group>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn color="deep-purple lighten-2" text @click="Acceder">
                      Acceder
                    </v-btn>
                  </v-card-actions>
                </v-card>
                <!-- Finaliza V-card -->
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
          <!-- Termina lista -->
        </v-col>
      </v-row>
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
import store from "../store/index.js";
import InicioSesion from "../views/InicioSesion.vue";
export default {
  components: { Header, Footer, InicioSesion },
  data: () => ({
    items: [
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*9C9hLji68wV373tk8okLYA.jpeg",
        title: "TBI’s 5 Best: SF Mocktails to Finish Dry January Strong",
        resume:
          "El punto de partida para la planificación serán las conclusiones y valoraciones relativas a los procesos de autoevaluación y mejora del curso anterior.",
        keyword: "Drinks",
      },
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*BBNtYUieAqHoXKjiJ2mMjQ.png",
        title:
          "PWAs on iOS 12.2 beta: the good, the bad, and the “not sure yet if good”",
        resume:
          "Elaborará un informe sobre los objetivos que no se han alcanzado. El archivo, deberá consignar qué resultados de aprendizaje y criterios de evaluación no han podido adquirirse de manera adecuada.",
        keyword: "Phones",
      },
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*rTEtei1UEmNqbq6evRsExw.jpeg",
        title: "How to Get Media Mentions for Your Business",
        resume:
          "Se centrará en la retroalimentación de información, el refuerzo positivo y apoyo emocional, para poder verificar la situación del alumnado en lo relativo a su proceso de aprendizaje.",
        keyword: "Social",
      },
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*FD2nkJewVeQnGf0ommQfrw.jpeg",
        title:
          "The Pitfalls Of Outsourcing Self-Awareness To Artificial Intelligence",
        resume:
          "Las habilidades, destrezas y competencias llevarán a cabo reuniones, para establecer los mecanismos de coordinación necesarios en lo relativo a las programaciones didácticas y seguimiento de las mismas.",
        keyword: "Military",
      },
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*eogFpsVgNzXQLCVgFzT_-A.jpeg",
        title: "Degrees of Freedom and Sudoko",
        resume:
          "En la medida de lo posible, el CTO deberá consignar qué resultados de aprendizaje y criterios de evaluación no han podido adquirirse de manera adecuada.",
        keyword: "Social",
      },
    ],
    search: "",
  }),

  computed: {
    keywords() {
      if (!this.search) return [];

      const keywords = [];

      for (const search of this.searching) {
        keywords.push(search.keyword);
      }

      return keywords;
    },
    searching() {
      if (!this.search) return this.items;

      const search = this.search.toLowerCase();

      return this.items.filter((item) => {
        const text = item.title.toLowerCase();

        return text.indexOf(search) > -1;
      });
    },
  },

  created: () => {
    store.commit("setCurrentView", "/Cursos");
    console.log(store.state.view);
  },
  mounted (){
    window.scrollTo(0,0)
  }
};
</script>

<style>
h1 {
  text-align: center;
}
/* .v-card__title {
  align-items: baseline;
  display: flex;
  flex-wrap: wrap;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.0125em;
  line-height: 2rem;
  word-break: keep-all;
  max-height: 100px;
  min-height: 100px;
}
.v-card__title.a {
  align-items: baseline;
  max-height: 50px;
  min-height: 50px;
}
.v-card__actions {
  align-items: baseline;
  max-height: 50px;
  min-height: 50px;
}
.v-card__text {
  max-height: 107px;
  min-height: 107px;
  max-width: 374px;
  min-width: 374px;
} */
</style>